import { Column, Text } from "@/app/atomic";
import { CardColumns } from "@/app/data/graphql/generated/graphql";
import { useParams } from "react-router-dom";
import { useQueryBoard } from "./query-board.use-case";
import { KanbanSkeleton } from "./components/skeleton/kanban.skeleton";

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

  const cards = data?.board.cards;
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
            <div className="flex w-full h-full justify-between">
              {columns.map((column) => (
                <Column
                  key={column.columnVariant}
                  columnName={column.columnName}
                  columnVariant={column.columnVariant}
                  cards={cards?.filter(
                    (card) => card.column === column.columnVariant
                  )}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
