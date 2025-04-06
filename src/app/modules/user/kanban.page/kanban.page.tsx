import { Card, Column, Text } from "@/app/atomic";
import { CardColumns } from "@/app/data/graphql/generated/graphql";
import { useParams } from "react-router-dom";
import { useQueryBoard } from "./query-board.use-case";
import { KanbanSkeleton } from "./components/skeleton/kanban.skeleton";
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
} from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { Card as CardType } from "@/app/data/graphql/generated/graphql";
import { useEffect, useState } from "react";
import { getInitialState } from "@dnd-kit/core/dist/store";

const columns = [
  { columnName: "A fazer", columnVariant: CardColumns.ToDo },
  { columnName: "Fazendo", columnVariant: CardColumns.InProgress },
  { columnName: "Review", columnVariant: CardColumns.InReview },
  { columnName: "Finalizado", columnVariant: CardColumns.Done },
];

export function KanbanPage() {
  const { boardId } = useParams<{ boardId: string }>();
  const { data, loading } = useQueryBoard({
    variables: { boardId: boardId || "" },
  });

  const mockCards = [
    {
      id: "5",
      name: "Revisar código 1",
      column: CardColumns.InReview,
      createdAt: new Date().toISOString(),
      order: 3,
    },
    {
      id: "6",
      name: "Revisar código 2",
      column: CardColumns.InReview,
      createdAt: new Date().toISOString(),
      order: 3,
    },
    {
      id: "7",
      name: "Revisar código 3",
      column: CardColumns.InReview,
      createdAt: new Date().toISOString(),
      order: 3,
    },
  ];

  const initialCards = data?.board?.cards?.length
    ? data.board.cards
    : mockCards;

  const [cards, setCards] = useState(data?.board.cards || []);
  const [activeCard, setActiveCard] = useState<CardType | null>(null);

  useEffect(() => {
    setCards(initialCards);
    // setCards(data?.board.cards || []);
  }, [data]);

  function handleDragStart(event: DragStartEvent) {
    const { active } = event;
    const currentCard = cards?.find(
      (card) => card.id === active.id
    ) as CardType;

    setActiveCard(currentCard);
  }

  function moveCardWithinSameColumn(
    destinationColumn: CardColumns,
    newIndex: number
  ) {
    if (!activeCard) return;

    const thisColumnCards = cards.filter(
      (card) => card.column === destinationColumn
    );
    const oldIndex = thisColumnCards.findIndex(
      (card) => card.id === activeCard.id
    );

    if (oldIndex !== newIndex) {
      const newColumnCards = arrayMove(thisColumnCards, oldIndex, newIndex);
      const newCards = [
        ...cards.filter((card) => card.column !== destinationColumn),
        ...newColumnCards,
      ];
      setCards(newCards);
    }
  }

  function moveCardToDifferentColumn(
    destinationColumn: CardColumns,
    newIndex: number
  ) {
    if (!activeCard) return;

    const updatedCard = {
      ...activeCard,
      column: destinationColumn,
    };
    const filteredCards = cards.filter((card) => card.id !== activeCard.id);
    const newColumnCards = filteredCards.filter(
      (card) => card.column === destinationColumn
    );

    newColumnCards.splice(newIndex, 0, updatedCard);

    const newCards = [
      ...filteredCards.filter((card) => card.column !== destinationColumn),
      ...newColumnCards,
    ];
    setCards(newCards);
  }

  function getNewIndex(
    destinationColumn: CardColumns,
    over: DragEndEvent["over"]
  ): number {
    const thisColumnCards = cards.filter(
      (card) => card.column === destinationColumn
    );

    if (over?.data.current?.sortable) {
      return thisColumnCards.findIndex((card) => card.id === over.id);
    }

    return thisColumnCards.length;
  }

  function handleDragEnd(event: DragEndEvent) {
    const { over } = event;
    setActiveCard(null);
    if (!over || !activeCard) return;

    const destinationColumn: CardColumns = over.data.current?.column || over.id;

    const newIndex = getNewIndex(destinationColumn, over);

    if (activeCard.column === destinationColumn) {
      moveCardWithinSameColumn(destinationColumn, newIndex);
    } else {
      moveCardToDifferentColumn(destinationColumn, newIndex);
    }
  }

  return (
    <div className="flex min-h-screen px-[170px] py-xl bg-background-beige justify-center">
      <div className="flex flex-col justify-center w-full">
        {loading ? (
          <>
            <KanbanSkeleton />
          </>
        ) : (
          <>
            <div className="flex pb-xl w-full justify-start">
              <Text>{data?.board.name}</Text>
            </div>
            <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
              <div className="flex w-full h-full justify-between">
                {columns.map((column) => (
                  <Column
                    key={column.columnVariant}
                    columnName={column.columnName}
                    columnVariant={column.columnVariant}
                    cards={cards?.filter(
                      (card) => card?.column === column?.columnVariant
                    )}
                  />
                ))}
              </div>

              <DragOverlay>
                {activeCard ? <Card card={activeCard} /> : null}
              </DragOverlay>
            </DndContext>
          </>
        )}
      </div>
    </div>
  );
}
