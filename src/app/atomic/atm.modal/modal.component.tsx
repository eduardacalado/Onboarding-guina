import { ReactNode } from "react";
import { createPortal } from "react-dom";
import { CloseIcon } from "@/app/assets/svg";
import { divVariants } from "./modal.component.style";

type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

export function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return;

  return (
    <>
      {createPortal(
        <div onClick={onClose}>
          <div className={divVariants({ variant: "darkBackground" })} />
          <div className={divVariants({ variant: "backgroundDiv" })}>
            <div
              className={divVariants({ variant: "modal" })}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={divVariants({ variant: "closeButtonDiv" })}>
                <button onClick={onClose} className="cursor-pointer">
                  <CloseIcon />
                </button>
              </div>
              {children}
            </div>
          </div>
        </div>,
        document.getElementById("portal") as HTMLElement
      )}
    </>
  );
}
