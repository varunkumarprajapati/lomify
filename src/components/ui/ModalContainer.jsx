import { createPortal } from "react-dom";
export default function ModalContainer({ children }) {
  return createPortal(
    <div className="font-poppins">{children}</div>,
    document.querySelector("#modal-container")
  );
}
