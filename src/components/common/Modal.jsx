import { useEffect, useRef } from "react";

import ModalContainer from "./ModalContainer";
import Button from "../ui/Button";

export default function Modal({ children, onClick }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleModalClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        console.log(modalRef.current && !modalRef.current.contains(e.target));
        return onClick();
      }
    };

    document.addEventListener("click", handleModalClick);

    return () => document.removeEventListener("click", handleModalClick);
  }, [onClick]);

  return (
    <ModalContainer>
      <div className="fixed inset-0 text-white bg-black bg-opacity-50">
        <div className="fixed inset-0 flex items-center justify-center select-none">
          <div
            ref={modalRef}
            className="w-10/12 p-6 text-black bg-white rounded-lg shadow-xl lg:w-6/12 drop-shadow-2xl"
          >
            <div>{children}</div>
            <div className="flex justify-end space-x-4">
              <Button active onClick={onClick}>
                Okay
              </Button>
            </div>
          </div>
        </div>
      </div>
    </ModalContainer>
  );
}
