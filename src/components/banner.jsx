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
`;

const SubHeading = styled.div`
  font-family: "Regular";
  font-size: 20px;
  line-height: 28px;
  color: var(--grey-500);
`;

const BannerImg = styled.img`
  width: 50%;
  object-fit: contain;
  justify-content: auto;
`;

const RecommendCategory = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
`;

const RecommendHeading = styled.div`
  width: 200px;
  font-family: "Heading";
  font-size: 40px;
  line-height: 50px;
  color: var(--primary);
`;

const CatergoryImg = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 8px;
`;

export default function Banner() {
  return (
    <>
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
      <RecommendCategory>
        <RecommendHeading>Category for you</RecommendHeading>
        <CatergoryImg
          src="/img/clothing.png"
          alt="clothing"
        />
        <CatergoryImg
          src="/img/home-goods.png"
          alt="home goods"
        />
        <CatergoryImg
          src="/img/bedding.png"
          alt="bedding"
        />
        <CatergoryImg
          src="/img/furniture.png"
          alt="furniture"
        />
        <CatergoryImg
          src="/img/accesories.png"
          alt="accesories"
        />
      </RecommendCategory>
    </>
  );
}
