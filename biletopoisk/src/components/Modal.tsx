import React, { useRef, useEffect } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

const Modal = ({ isOpen, onClose, onConfirm }: ModalProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const handleClose = () => {
    dialogRef.current?.close();
  };

  const handleConfirm = () => {
    dialogRef.current?.close();
    onConfirm();
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const rect = dialogRef.current?.getBoundingClientRect();

      if (rect) {
        const isInDialog =
          rect.top <= event.clientY &&
          event.clientY <= rect.top + rect.height &&
          rect.left <= event.clientX &&
          event.clientX <= rect.left + rect.width;

        if (!isInDialog) {
          dialogRef.current?.close();
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dialogRef]);

  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal();
    }
  }, [isOpen]);

  useEffect(() => {
    dialogRef.current?.addEventListener("close", onClose);

    return () => {
      dialogRef.current?.removeEventListener("close", onClose);
    };
  }, []);

  return (
    <dialog ref={dialogRef} className="rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Удаление билета</h2>
        <button onClick={handleClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
          >
            <path
              fill="#333"
              d="M12.854 12.146a.5.5 0 1 1-.708.708L8 8.707l-4.146 4.147a.5.5 0 0 1-.708-.708L7.293 8 3.146 3.854a.5.5 0 1 1 .708-.708L8 7.293l4.146-4.147a.5.5 0 0 1 .708.708L8.707 8l4.147 4.146Z"
            />
          </svg>
        </button>
      </div>

      <p className="mb-6">Вы уверены, что хотите удалить билет?</p>
      <div className="flex gap-2">
        <button
          onClick={handleConfirm}
          className="px-4 py-2 border-orange border bg-orange text-white rounded-lg"
        >
          Да
        </button>
        <button
          onClick={handleClose}
          className="px-4 py-2 border-orange border bg-white text-black rounded-lg"
        >
          Нет
        </button>
      </div>
    </dialog>
  );
};

export default Modal;
