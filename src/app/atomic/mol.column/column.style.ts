import { CardColumns } from "@/app/data/graphql/generated/graphql";
import { tv } from "tailwind-variants";

export const columnVariants = tv({
  base: "rounded-sm px-md py-sm",
  variants: {
    status: {
      [CardColumns.ToDo]: "bg-gray-light",
      [CardColumns.InProgress]: "bg-feedback-warning-light",
      [CardColumns.InReview]: "bg-feedback-error-light",
      [CardColumns.Done]: "bg-feedback-success-light",
    },
  },
});

export const columnItemsVariants = tv({
  slots: {
    columnContainer:
      "flex flex-col gap-lg justify-center items-center bg-white w-full h-full max-h-[660px] max-w-[330px] p-lg rounded-md",
    columnTypeContainer: "flex justify-start w-full",
    InnerColumn: "bg-gray-light w-full overflow-y-auto flex-1 rounded-sm",
    buttonContainer: "flex items-center justify-center",
    buttonStyle: "flex gap-sm cursor-pointer",
    buttonTextStyle: "text-brand-primary-dark font-bold",
  },
});
