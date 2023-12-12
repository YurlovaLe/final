import * as S from "./Modal.styles";

export const Modal = ({ children, isOpen }) => {
  return (
    isOpen ? 
      (<S.ModalOpen>{children}</S.ModalOpen>) : (<S.ModalHidden>{children}</S.ModalHidden>)
  );
};
