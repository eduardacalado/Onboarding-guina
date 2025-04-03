import { tv } from "tailwind-variants";

export const deleteBoardDivVariants = tv({
  slots: {
    modalContainer: "flex flex-col w-full gap-lg",
    titlesContainer: "flex flex-col justify-center",
    buttonsContainer: "flex gap-md",
  },
});
