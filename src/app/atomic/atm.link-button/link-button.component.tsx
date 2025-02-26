import { AnchorHTMLAttributes } from "react";
import { linkButtonVariants } from "./link-button.component.style";
import { VariantProps } from "tailwind-variants";

type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof linkButtonVariants> & {
    disabled?: boolean;
    path: string;
  };

function LinkButton({
  variant = "link",
  disabled,
  children,
  path,
  ...props
}: LinkButtonProps) {
  return (
    <a
      href={path}
      className={linkButtonVariants({ variant, disabled })}
      {...props}
    >
      {children}
    </a>
  );
}

export default LinkButton;
