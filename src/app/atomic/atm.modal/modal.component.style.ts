import { tv } from "tailwind-variants";

export const divVariants = tv({
  variants: {
    variant: {
      darkBackground: "fixed inset-0 bg-black opacity-30",
      backgroundDiv: "fixed inset-0 flex items-center justify-center px-3xl",
      modal:
        "flex flex-col items-center bg-white p-6 rounded-lg w-full max-w-[600px]",
      closeButtonDiv: "flex w-full justify-end",
    },
  },
});
