import React from 'react';
import styled, { keyframes } from 'styled-components';


const fadeInScale = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.7);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;
const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 5px;
  width: 80%;
  max-width: 500px;
  position: relative; /* CloseButton will be positioned relative to this */
  animation: ${fadeInScale} 0.4s ease-out;  /* Apply animation to modal */
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0px;
  right: 0px; /* 10px from the right of the ModalContent */
  background-color: #ff4757;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: 20px;
    width: 40px;
  cursor: pointer;
  &:hover {
    background-color: #e84118;
  }
`;

const ItemImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px; /* Optional: for rounded corners on the image */
`;

const ItemName = styled.h2`
  text-align: center;  /* Center align text */
`;

const ItemInfo = styled.p`
  text-align: center;  /* Center align text */
    font-weight: bold;   /* Make text bold */
`;
const Label = styled.span`
  text-align: center;
  font-weight: normal; /* Ensure the font weight is normal */
`;

const ItemModal = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <ModalContainer>
      <ModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <ItemImage src={item.image_url} alt={item.name} />
        <ItemName>{item.name}</ItemName>
        <ItemInfo><Label>Category:</Label> {item.category}</ItemInfo>
        <ItemInfo><Label>Price:</Label> ${item.price}</ItemInfo>
        <ItemInfo><Label>Brand:</Label> {item.brand}</ItemInfo>
        <ItemInfo><Label>Quantity:</Label> {item.quantity}</ItemInfo>
      </ModalContent>
    </ModalContainer>
  );
};

export default ItemModal;
