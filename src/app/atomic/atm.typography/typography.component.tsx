import React, { ReactNode, JSX } from "react";
import { typographyVariants } from "./typography.component.style";
import { VariantProps } from "tailwind-variants";

type TypographyProps = VariantProps<typeof typographyVariants> & {
  tag: keyof JSX.IntrinsicElements;
  children: ReactNode;
};

function Text({
  variant = "display",
  tag = "p",
  children,
  ...props
}: TypographyProps) {
  return React.createElement(
    tag,
    { className: typographyVariants({ variant }), ...props },
    children
  );
}

export default Text;
