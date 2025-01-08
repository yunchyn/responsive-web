import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SubscribeContainer = styled.div`
  width: 100%;
  height: 600px;
  background-image: url("/img/subscribe-bg.png");
  background-size: cover;
  background-position: center;

  @media (max-width: 500px) {
    display: flex;
    justify-content: center;
  }
`;

const SubscribeCard = styled.div`
  background-color: white;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
  width: 40%;
  max-width: 500px;

  padding: 40px;
  font-family: "Semibold";
  font-size: 20px;
  line-height: 28px;

  margin-left: 70px;
  margin-top: 280px;
  position: absolute;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 1000px) {
    font-size: 16px;
    line-height: 24px;
  }

  @media (max-width: 500px) {
    margin-left: 0;
    width: 75%;
    padding: 24px;
    gap: 16px;
    border-radius: 24px;
    margin-top: 340px;
  }
`;

const SubscribeDesc = styled.div`
  color: var(--grey-500);
  font-family: "Regular";
`;

const InputWrapper = styled.div`
  width: 99%;
  position: relative;
`;

const SubscribeInput = styled.input`
  width: 100%;
  height: 60px;
  text-indent: 24px;
  font-family: "Regular";
  font-size: 16px;
  line-height: 24px;
  border-radius: 40px;
  border: 1px solid var(--grey-200);
  ::placeholder {
    color: var(--grey-400);
  }

  @media (max-width: 1000px) {
    font-size: 14px;
    line-height: 20px;
    height: 52px;
  }

  @media (max-width: 500px) {
    text-indent: 12px;
  }
`;

const SubscribeButton = styled(Link)`
  position: absolute;
  top: 0;
  right: 0;
  margin: 5.5px;

  text-decoration: none;
  background-color: var(--primary);
  color: white;
  font-family: "SemiBold";
  border-radius: 40px;
  font-size: 20px;
  line-height: 28px;
  padding: 12px 24px;
  transition: color 0.3s ease, background-color 0.3s ease;
  &:hover {
    color: var(--primary);
    background-color: var(--secondary);
  }

  @media (max-width: 1000px) {
    font-size: 14px;
    line-height: 20px;
  }

  @media (max-width: 500px) {
    padding: 12px;
  }
`;

export default function Subscribe() {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    setEmail(event.target.value);
  };
  return (
    <SubscribeContainer>
      <SubscribeCard>
        Subscribe to our newsletter
        <SubscribeDesc>Be the first to know about exclusive offers, eco-tips, and new arrivals!</SubscribeDesc>
        <InputWrapper>
          <SubscribeInput
            type="text"
            placeholder="Your email"
            value={email}
            onChange={handleSubmit}
          />
          <SubscribeButton>Subscribe</SubscribeButton>
        </InputWrapper>
      </SubscribeCard>
    </SubscribeContainer>
  );
}
