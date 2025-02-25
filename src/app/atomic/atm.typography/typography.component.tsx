import React, { ReactNode, JSX } from "react";
import { typographyVariants } from "./typography.component.style";

type TypographyProps = {
  variant?:
    | "display"
    | "heading1"
    | "heading2"
    | "heading3"
    | "heading4"
    | "body1"
    | "body2"
    | "link"
    | "linkSmall"
    | "inputLabel"
    | "inputValue"
    | "inputCaption";
  tag?: keyof JSX.IntrinsicElements;
  children: ReactNode;
};

function Text({
  variant = "display",
  tag = "div",
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
