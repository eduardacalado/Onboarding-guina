import { tv } from "tailwind-variants";

export const modalDivVariants = tv({
  slots: {
    darkBackground: "fixed inset-0 bg-black opacity-30",
    backgroundContainer:
      "fixed inset-0 flex items-center justify-center px-3xl",
    modalContainer:
      "flex flex-col items-center bg-white p-xxl rounded-lg w-full max-w-[600px]",
    closeButtonContainer: "flex w-full justify-end",
  },
});
