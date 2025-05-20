import React from "react";
import ModalContainer from "./ModalContainer";
export default function Modal({
  children,
  onClose = () => {},
  isOpen = false,
}) {
  const modalRef = React.useRef(null);

  React.useEffect(() => {
    if (modalRef.current && !modalRef.current.contains(this)) onClose();
  }, [onClose]);

  if (!isOpen) return null;
  return (
    <ModalContainer>
      <div className="fixed inset-0 z-50 bg-white/20">
        <div ref={modalRef} className="fixed">
          {children}
        </div>
      </div>
    </ModalContainer>
  );
}
