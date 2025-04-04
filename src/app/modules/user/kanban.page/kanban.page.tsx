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

  console.log(boardId);

  return (
    <div className="flex flex-col justify-center items-center h-screen px-[142px] pb-xl bg-background-beige">
      <div>
        <div className="flex pb-xl w-full justify-start">
          <Text>{data?.board.name}</Text>
        </div>
        <div className="flex gap-lg">
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
