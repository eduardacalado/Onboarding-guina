import { tv } from "tailwind-variants";

export const typographyVariants = tv({
  base: "text-medium font-regular flex gap-sm",
  variants: {
    variant: {
      display: "font-bold text-xx-large line-height-sm",
      heading1: "text-x-large font-semibold line-height-sm",
      heading2: "text-large font-semibold line-height-sm",
      heading3: "line-height-sm font-semibold",
      heading4: "text-small line-height-md",
      body1: "!text-x-small text-gray-x-dark line-height-md",
      body2: "font-medium !text-xx-small text-gray-dark line-height-md",
      link: "!text-x-small font-semibold text-cta-dark line-height-md",
      linkSmall: "!text-xx-small font-semibold text-cta-dark line-height-md",
      inputLabel: "!text-xx-small font-semibold text-gray-dark line-height-md",
      inputValue: "!text-small text-gray-medium line-height-md",
      inputCaption: "!text-xx-small text-gray-dark line-height-md",
      inputCaptionError:
        "!text-xx-small text-feedback-error-dark line-height-md",
    },
  },
  defaultVariants: {
    variant: "display",
  },
});
