import React from "react";
import styled, { keyframes } from "styled-components";

const Modal = ({ isOpen, onClose, children }) => {
    return (
        <ModalWrapper isOpen={isOpen} onClick={onClose}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <ModalCloseButton onClick={onClose}>&times;</ModalCloseButton>
                {children}
            </ModalContent>
        </ModalWrapper>
    );
};

export default Modal;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const ModalWrapper = styled.div`
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.5);
    animation: ${({ isClosing }) => (isClosing ? fadeOut : fadeIn)} 0.3s
        ease-out;
    z-index: ${({ isOpen }) =>
        isOpen ? 1 : -1}; /* Set z-index to 1 when open, -1 when closed */
`;

const ModalContent = styled.div`
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    width: 60%;
    height: 50%;
`;

const ModalCloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 20px;
    cursor: pointer;
`;
