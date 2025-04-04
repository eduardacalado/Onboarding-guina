import { Text } from "@/app/atomic";
import { Column } from "@/app/atomic/mol.column/column.component";
import { CardColumns } from "@/app/data/graphql/generated/graphql";
import { useParams } from "react-router-dom";
import { useQueryBoard } from "./query-board.use-case";

const columns = [
  { columnName: "A fazer", columnVariant: CardColumns.ToDo },
  { columnName: "Fazendo", columnVariant: CardColumns.InProgress },
  { columnName: "Review", columnVariant: CardColumns.InReview },
  { columnName: "Finalizado", columnVariant: CardColumns.Done },
];

export function KanbanPage() {
  const { boardId } = useParams<{ boardId: string }>();
  const { data } = useQueryBoard({ variables: { boardId: boardId || "" } });

  return (
    <div className="flex min-h-screen px-[170px] py-xl bg-background-beige justify-center">
      <div className="flex flex-col justify-center w-full">
        <div className="flex pb-xl w-full justify-start">
          <Text>{data?.board.name}</Text>
        </div>
        <div className="flex w-full h-full justify-between">
          {columns.map((column) => (
            <Column
              key={column.columnVariant}
              columnName={column.columnName}
              columnVariant={column.columnVariant}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
