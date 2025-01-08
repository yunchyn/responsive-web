import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { SecondaryButton } from "../styled-utilities";

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
  pointer-events: ${(props) => (props.visible ? "auto" : "none")};
`;

const PopupContent = styled.div`
  width: 872px;
  height: auto;
  position: relative;
  display: flex;
  flex-direction: row;
  background-color: white;
  border-radius: 16px;
  text-align: center;
  margin: 15px;
`;

const PopupImg = styled.img`
  width: 50%;
  object-fit: contain;
  border-radius: 16px 0px 0px 16px;
`;

const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
`;

const IconSvg = styled.svg`
  width: 24px;
  height: 24px;

  @media (max-width: 500px) {
    width: 16px;
    height: 16px;
  }
`;

const TextWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const Heading = styled.div`
  font-family: "Heading";
  font-size: 24px;

  @media (max-width: 500px) {
    font-size: 20px;
  }
`;

const Desc = styled.div`
  font-family: "Regular";
  font-size: 20px;
  line-height: 28px;

  @media (max-width: 500px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

const ShopButton = styled(SecondaryButton)`
  @media (max-width: 1200px) {
    font-size: 20px;
    line-height: 28px;
  }
  @media (max-width: 1000px) {
    font-size: 20px;
    line-height: 28px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

export const Popup = ({ show, onClose }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (show) {
      setTimeout(() => setVisible(true), 10); // 약간의 지연을 주어 애니메이션 활성화
    } else {
      setVisible(false);
    }
  }, [show]);

  return (
    <PopupOverlay visible={visible}>
      <PopupContent>
        <PopupImg
          src="/img/popup-img.png"
          alt="Popup"
        />
        <CloseButton onClick={onClose}>
          <IconSvg>
            <svg
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M39.296 12.1031C40.2347 11.1645 40.2347 9.64262 39.296 8.70398C38.3574 7.76534 36.8355 7.76534 35.8969 8.70398L24 20.6009L12.1031 8.70398C11.1645 7.76534 9.64262 7.76534 8.70398 8.70398C7.76534 9.64262 7.76534 11.1645 8.70398 12.1031L20.6009 24L8.70398 35.8969C7.76534 36.8355 7.76534 38.3574 8.70398 39.296C9.64262 40.2347 11.1645 40.2347 12.1031 39.296L24 27.3991L35.8969 39.296C36.8355 40.2347 38.3574 40.2347 39.296 39.296C40.2347 38.3574 40.2347 36.8355 39.296 35.8969L27.3991 24L39.296 12.1031Z"
                fill="#333333"
              />
            </svg>
          </IconSvg>
        </CloseButton>
        <TextWrapper>
          <Heading>Get 15% Off</Heading>
          <Desc>on your initial purchase of our chosen products</Desc>
          <ShopButton onClick={onClose}>Shop Now</ShopButton>
        </TextWrapper>
      </PopupContent>
    </PopupOverlay>
  );
};
