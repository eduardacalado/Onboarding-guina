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
  const {
    backgroundContainer,
    closeButtonContainer,
    darkBackground,
    modalContainer,
  } = modalDivVariants();

  if (!isOpen) return;

  return (
    <>
      {createPortal(
        <div onClick={onClose}>
          <div className={darkBackground()} />
          <div className={backgroundContainer()}>
            <div
              className={modalContainer()}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={closeButtonContainer()}>
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
