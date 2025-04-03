import { ReactNode } from "react";
import { createPortal } from "react-dom";
import { CloseIcon } from "@/app/assets/svg";
import { modalDivVariants } from "./modal.component.style";

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
          <div className={modalDivVariants({ variant: "darkBackground" })} />
          <div className={modalDivVariants({ variant: "backgroundDiv" })}>
            <div
              className={modalDivVariants({ variant: "modal" })}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={modalDivVariants({ variant: "closeButtonDiv" })}>
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
