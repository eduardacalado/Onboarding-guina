import { PlusIcon } from "@/app/assets/svg";
import { columnItemsVariants, columnVariants } from "./column.style";
import { CardColumns } from "@/app/data/graphql/generated/graphql";
import { columnStrings } from "./column.strings";
import { Card } from "../mol.card/card.component";
import { Card as CardType } from "@/app/data/graphql/generated/graphql";

type ColumnProps = {
  columnName: string;
  columnVariant: CardColumns;
  cards?: CardType[];
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
  return (
    <div className={columnContainer()}>
      <div className={columnTypeContainer()}>
        <div className={columnVariants({ status: columnVariant })}>
          {columnName}
        </div>
      </div>
      <div className={InnerColumn()}>
        {cards?.map((card) => (
          <Card key={card.id} card={card} />
        ))}
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
