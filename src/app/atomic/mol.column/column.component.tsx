import { PlusIcon } from "@/app/assets/svg";
import { columnItemsVariants, columnVariants } from "./column.style";
import { CardColumns } from "@/app/data/graphql/generated/graphql";
import { columnStrings } from "./column.strings";
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
  cards: CardType[];
};

export function Column({ columnName, columnVariant, cards }: ColumnProps) {
  const {
    buttonStyle,
    buttonContainer,
    buttonTextStyle,
    InnerColumn,
    columnContainer,
    columnTypeContainer,
  } = columnItemsVariants();

  const { setNodeRef } = useDroppable({
    id: columnVariant,
  });

  return (
    <div ref={setNodeRef} className={columnContainer()}>
      <div className={columnTypeContainer()}>
        <div className={columnVariants({ status: columnVariant })}>
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
        <button className={buttonStyle()}>
          <PlusIcon />
          <span className={buttonTextStyle()}>{columnStrings.ctaAddTast}</span>
        </button>
      </div>
    </div>
  );
}
