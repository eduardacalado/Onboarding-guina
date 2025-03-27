import { ReactNode } from "react";
import { createPortal } from "react-dom";
import { CloseIcon } from "@/app/assets/svg";

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
          <div className="fixed inset-0 bg-black opacity-30" />
          <div className="fixed inset-0 flex items-center justify-center px-3xl">
            <div
              className="flex flex-col items-center bg-white p-6 rounded-lg w-full max-w-[600px]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex w-full justify-end">
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
