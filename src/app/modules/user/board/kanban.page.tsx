import { Text } from "@/app/atomic";
import { Column } from "@/app/atomic/mol.column/column.component";
import { CardColumns } from "@/app/data/graphql/generated/graphql";

const columns = [
  { columnName: "A fazer", columnVariant: CardColumns.ToDo },
  { columnName: "Fazendo", columnVariant: CardColumns.InProgress },
  { columnName: "Review", columnVariant: CardColumns.InReview },
  { columnName: "Finalizado", columnVariant: CardColumns.Done },
];

export function KanbanPage() {
  return (
    <div className="flex flex-col justify-center items-center h-screen px-[142px] pb-xl bg-background-beige">
      <div>
        <div className="flex pb-xl w-full justify-start">
          <Text>Nome do projeto</Text>
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
