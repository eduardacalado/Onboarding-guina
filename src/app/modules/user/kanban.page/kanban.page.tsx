import { Card, KanbanColumn, Modal, Text } from "@/app/atomic";
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
import { CreateCardModal } from "./components/create-card.modal/create-card.modal";
import { UpdateCardModal } from "./components/update-card.modal/update-card.modal";
import { DeleteCardModal } from "./components/delete-card.modal/delete-card.modal";

const columns = [
  { columnName: "A fazer", columnVariant: CardColumns.ToDo },
  { columnName: "Fazendo", columnVariant: CardColumns.InProgress },
  { columnName: "Review", columnVariant: CardColumns.InReview },
  { columnName: "Finalizado", columnVariant: CardColumns.Done },
];

export function KanbanPage() {
  const [isCreateCardModalOpen, setIsCreateCardModalOpen] = useState(false);
  const [isUpdateCardModalOpen, setIsUpdateCardModalOpen] = useState(false);
  const [isDeleteCardModalOpen, setIsDeleteCardModalOpen] = useState(false);
  const { boardId } = useParams<{ boardId: string }>();
  const { data, loading, refetch } = useQueryBoard({
    variables: { boardId: boardId || "" },
  });

  const [cards, setCards] = useState(data?.board.cards || []);
  const [activeCard, setActiveCard] = useState<CardType | null>(null);
  const [createCardColumn, setCreateCardColumn] = useState<CardColumns | null>(
    null
  );
  useEffect(() => {
    setCards(data?.board.cards || []);
  }, [data]);

  function handleDragStart(event: DragStartEvent) {
    const { active } = event;
    const currentCard = cards?.find(
      (card) => card.id === active.id
    ) as CardType;

    setActiveCard(currentCard);
  }

  function getCardsByColumn(
    column: CardColumns,
    cardList: typeof cards = cards
  ) {
    return cardList.filter((card) => card.column === column);
  }

  function getCardsNotInColumn(
    column: CardColumns,
    cardList: typeof cards = cards
  ) {
    return cardList.filter((card) => card.column !== column);
  }

  function moveCardWithinSameColumn(
    targetColumn: CardColumns,
    newIndex: number
  ) {
    const thisColumnCards = getCardsByColumn(targetColumn);
    const oldIndex = thisColumnCards.findIndex(
      (card) => card.id === activeCard?.id
    );

    if (oldIndex !== newIndex) {
      const newColumnCards = arrayMove(thisColumnCards, oldIndex, newIndex);
      const newCards = [
        ...getCardsNotInColumn(targetColumn),
        ...newColumnCards,
      ];
      setCards(newCards);
    }
  }

  function moveCardToDifferentColumn(
    targetColumn: CardColumns,
    newIndex: number
  ) {
    if (!activeCard) return;

    const updatedCard = { ...activeCard, column: targetColumn };
    const cardsWithoutActive = cards.filter(
      (card) => card.id !== activeCard.id
    );
    const targetColumnCards = getCardsByColumn(
      targetColumn,
      cardsWithoutActive
    );

    targetColumnCards.splice(newIndex, 0, updatedCard);

    const otherCards = getCardsNotInColumn(targetColumn, cardsWithoutActive);
    const newCards = [...otherCards, ...targetColumnCards];
    setCards(newCards);
  }

  function getNewIndex(
    targetColumn: CardColumns,
    over: DragEndEvent["over"]
  ): number {
    const thisColumnCards = getCardsByColumn(targetColumn);

    if (over?.data.current?.sortable) {
      return thisColumnCards.findIndex((card) => card.id === over.id);
    }

    return thisColumnCards.length;
  }

  function handleDragEnd(event: DragEndEvent) {
    const { over } = event;
    setActiveCard(null);
    if (!over || !activeCard) return;

    const targetColumn: CardColumns = over.data.current?.column || over.id;

    const newIndex = getNewIndex(targetColumn, over);

    if (activeCard.column === targetColumn) {
      moveCardWithinSameColumn(targetColumn, newIndex);
    } else {
      moveCardToDifferentColumn(targetColumn, newIndex);
    }
  }

  function handleToggleCreateCardModal() {
    setIsCreateCardModalOpen(!isCreateCardModalOpen);
  }

  function handleToggleUpdateCardModal() {
    setIsUpdateCardModalOpen(!isUpdateCardModalOpen);
  }

  function handleToggleDeleteCardModal() {
    setIsDeleteCardModalOpen(!isDeleteCardModalOpen);
  }

  function handleUpdateCard(card?: CardType) {
    if (card) setActiveCard(card);
    handleToggleUpdateCardModal();
  }

  function handleCreateCard(column: CardColumns) {
    setCreateCardColumn(column);
    handleToggleCreateCardModal();
  }

  function handleDeleteCard() {
    handleToggleDeleteCardModal();
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
                  <KanbanColumn
                    key={column.columnVariant}
                    columnName={column.columnName}
                    columnVariant={column.columnVariant}
                    cards={cards?.filter(
                      (card) => card?.column === column?.columnVariant
                    )}
                    handleCreateCardModal={() =>
                      handleCreateCard(column.columnVariant)
                    }
                    handleUpdateCardModal={(card) => handleUpdateCard(card)}
                    handleDeleteCardModal={() => handleDeleteCard()}
                  />
                ))}
              </div>

              <DragOverlay>
                {activeCard ? <Card card={activeCard} /> : null}
              </DragOverlay>
            </DndContext>
          </>
        )}

        {createCardColumn && (
          <Modal
            isOpen={isCreateCardModalOpen}
            onClose={() => handleToggleCreateCardModal()}
          >
            <CreateCardModal
              onCardCreated={() => {
                refetch();
                handleToggleCreateCardModal();
              }}
              boardId={boardId || ""}
              column={createCardColumn}
            />
          </Modal>
        )}

        <Modal
          isOpen={isUpdateCardModalOpen}
          onClose={() => handleToggleUpdateCardModal()}
        >
          <UpdateCardModal
            onCardUpdated={() => handleUpdateCard()}
            cardName={activeCard?.name || ""}
            cardId={activeCard?.id || ""}
          />
        </Modal>

        <Modal
          isOpen={isDeleteCardModalOpen}
          onClose={() => handleToggleDeleteCardModal()}
        >
          <DeleteCardModal />
        </Modal>
      </div>
    </div>
  );
}
