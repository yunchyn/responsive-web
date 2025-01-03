import styled from "styled-components";
import { PrimaryButton } from "../styled-utilities";

const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const HeadContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 24px;
`;

const TextWrapper = styled.div``;

const Heading = styled.div`
  font-family: "Heading";
  font-size: 56px;
  line-height: 69px;

  @media (max-width: 1279px) {
    font-size: 48px;
    line-height: 60px;
  }
  @media (max-width: 1110px) {
    font-size: 40px;
    line-height: 51px;
  }
`;

const SubHeading = styled.div`
  font-family: "Regular";
  font-size: 20px;
  line-height: 28px;
  color: var(--grey-500);

  @media (max-width: 1279px) {
    font-size: 16px;
    line-height: 24px;
  }
  @media (max-width: 1110px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

const BannerImg = styled.img`
  width: 50%;
  object-fit: contain;
  justify-content: auto;
`;

export default function Banner() {
  return (
    <Header>
      <HeadContainer>
        <TextWrapper>
          <Heading>Healthy cutlery,</Heading>
          <Heading>healthy body</Heading>
        </TextWrapper>
        <TextWrapper>
          <SubHeading>Upgrade your dining experience and</SubHeading>
          <SubHeading>begin your path to a healthy you right now.</SubHeading>
        </TextWrapper>
        <PrimaryButton>Learn More</PrimaryButton>
      </HeadContainer>
      <BannerImg
        src="/img/banner-img.png"
        alt="banner"
      />
    </Header>
  );
}
