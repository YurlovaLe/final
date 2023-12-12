import styled from "styled-components"

export const ModalOpen = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  align-items: center;
`

export const ModalHidden = styled.div`
  display: none;
`