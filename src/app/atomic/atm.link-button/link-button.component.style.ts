import { tv } from "tailwind-variants";

export const linkButtonVariants = tv({
  base: "gap-sm rounded-sm text-medium font-semibold",
  variants: {
    variant: {
      link: "text-brand-primary-dark hover:underline active:text-brand-accessory-magenta",
      hasIcon:
        "flex flex-row text-brand-primary-dark hover:underline active:text-brand-accessory-magenta",
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
