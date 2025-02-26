import { tv } from "tailwind-variants";

export const linkButtonVariants = tv({
  base: "flex gap-sm h-xl w-xxl px-md py-sm rounded-sm text-medium font-semibold",
  variants: {
    variant: {
      link: "flex flex-row text-brand-primary-dark hover:underline focus:border focus:border-sm focus:border-brand-primary-dark active:text-brand-accessory-magenta",
    },
    disabled: {
      true: "opacity-50 pointer-events-none",
    },
  },
  defaultVariants: {
    variant: "link",
    disabled: false,
  },
});
