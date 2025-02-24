import { AnchorHTMLAttributes } from "react";
import { linkButtonVariants } from "./link-button.component.style";

type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "link";
  disabled?: boolean;
  path: string;
};

function LinkButton({
  variant = "link",
  disabled = false,
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
