import { PlusIcon } from "@/app/assets/svg";
import { columnItemsVariants, columnVariants } from "./column.style";
import { CardColumns } from "@/app/data/graphql/generated/graphql";
import { columnStrings } from "./column.strings";

type ColumnProps = {
  columnName: string;
  columnVariant: CardColumns;
};

export function Column({ columnName, columnVariant }: ColumnProps) {
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
      <div className={InnerColumn()} />
      <div className={buttonContainer()}>
        <button className={buttonStyle()}>
          <PlusIcon />
          <span className={buttonTextStyle()}>{columnStrings.ctaAddTast}</span>
        </button>
      </div>
    </div>
  );
}
