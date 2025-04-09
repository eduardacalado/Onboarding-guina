import { tv } from "tailwind-variants";

export const cardDivVariants = tv({
  slots: {
    cardContainer: "flex flex-col gap-md p-md bg-white rounded-sm",
    titleUserContainer: "flex flex-col gap-sm",
    userCommentsInfoContainer: "flex gap-xs items-center pointer-events-none",
    comentInfoContainer: "flex gap-sm",
  },
});
