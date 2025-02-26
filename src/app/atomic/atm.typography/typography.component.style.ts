import { tv } from "tailwind-variants";

export const typographyVariants = tv({
  base: "text-medium font-semibold",
  variants: {
    variant: {
      display: "font-bold text-xx-large line-height-sm",
      heading1: "font-semibold text-x-large line-height-sm",
      heading2: "font-semibold text-large line-height-sm",
      heading3: "font-semibold text-medium line-height-sm",
      heading4: "font-medium text-small line-height-md",
      body1: "text-x-small text-gray-x-dark line-height-md",
      body2: "font-medium text-xx-small text-gray-dark line-height-md",
      link: "text-x-small text-cta-dark line-height-md",
      linkSmall: "font-semibold text-xx-small text-cta-dark line-height-md",
      inputLabel: "text-small text-gray-dark line-height-md",
      inputValue: "text-small text-gray-medium line-height-md",
      inputCaption: "text-small text-feedback-warning-dark line-height-md",
    },
  },
  defaultVariants: {
    variant: "display",
  },
});
