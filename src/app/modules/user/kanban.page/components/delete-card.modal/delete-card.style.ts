import { tv } from "tailwind-variants";

export const deleteCardDivVariants = tv({
  slots: {
    modalContainer: "flex flex-col w-full gap-lg",
    titlesContainer: "flex flex-col justify-center",
    buttonsContainer: "flex gap-md",
  },
});
