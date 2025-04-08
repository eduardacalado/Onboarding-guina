import { PlusIcon } from "@/app/assets/svg";
import {
  KanbanColumnItemsVariants,
  kanbanColumnVariants,
} from "./kanban-column.style";
import { CardColumns } from "@/app/data/graphql/generated/graphql";
import { kanbanColumnStrings } from "./kanban-column.strings";
import { Card } from "../mol.card/card.component";
import { Card as CardType } from "@/app/data/graphql/generated/graphql";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useDroppable } from "@dnd-kit/core";

type ColumnProps = {
  columnName: string;
  columnVariant: CardColumns;
  cards?: CardType[];
  handleCreateCardModal: () => void;
};

export function KanbanColumn({
  columnName,
  columnVariant,
  cards,
  handleCreateCardModal,
}: ColumnProps) {
  const {
    buttonStyle,
    buttonContainer,
    buttonTextStyle,
    InnerColumn,
    columnContainer,
    columnTypeContainer,
  } = KanbanColumnItemsVariants();

  const { setNodeRef } = useDroppable({
    id: columnVariant,
  });

  return (
    <div ref={setNodeRef} className={columnContainer()}>
      <div className={columnTypeContainer()}>
        <div className={kanbanColumnVariants({ status: columnVariant })}>
          {columnName}
        </div>
      </div>
      <div className={InnerColumn()}>
        <SortableContext
          items={(cards ?? []).map((card) => card.id)}
          strategy={verticalListSortingStrategy}
        >
          {cards?.map((card: CardType) => (
            <Card key={card.id} card={card} column={columnVariant} />
          ))}
        </SortableContext>
      </div>
      <div className={buttonContainer()}>
        <button className={buttonStyle()} onClick={handleCreateCardModal}>
          <PlusIcon />
          <span className={buttonTextStyle()}>
            {kanbanColumnStrings.ctaAddTast}
          </span>
        </button>
      </div>
    </div>
  );
}
