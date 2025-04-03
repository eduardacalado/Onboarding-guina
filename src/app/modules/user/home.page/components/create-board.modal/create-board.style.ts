import { tv } from "tailwind-variants";

export const createBoardDivVariants = tv({
  slots: {
    modalContainer: "flex flex-col w-full gap-lg",
    titleContainer: "flex justify-center",
    inputFieldContainer: "flex flex-col gap-lg",
  },
});
