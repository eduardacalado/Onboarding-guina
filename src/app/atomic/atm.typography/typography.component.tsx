import React, { ReactNode, JSX } from "react";
import { typographyVariants } from "./typography.component.style";
import { VariantProps } from "tailwind-variants";

type TypographyProps = VariantProps<typeof typographyVariants> & {
  tag?: keyof JSX.IntrinsicElements;
  children: ReactNode;
  className?: string;
};

const tagMap = {
  display: "h1",
  heading1: "h1",
  heading2: "h2",
  heading3: "h3",
  inputLabel: "label",
  inputCaption: "span",
  inputCaptionError: "span",
  inputValue: "span",
} as const;

export function Text({
  variant = "display",
  tag,
  className,
  children,
  ...props
}: TypographyProps) {
  function handleGetTag(variantType: string): keyof JSX.IntrinsicElements {
    if (tag) return tag;
    return (tagMap[variantType as keyof typeof tagMap] ||
      "p") as keyof JSX.IntrinsicElements;
  }

  return React.createElement(
    handleGetTag(variant),
    { className: `${typographyVariants({ variant })} ${className}`, ...props },
    children
  );
}
