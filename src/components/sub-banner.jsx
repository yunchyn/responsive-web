import styled from "styled-components";

const SubBannerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url("/img/sub-banner-bg.png");
  background-size: cover;
  background-position: center;
  gap: 80px;
  width: 100%;
  height: 500px;
`;

const Desc = styled.div`
  font-family: "Heading";
  font-size: 32px;
  line-height: 40px;
  text-align: center;
  color: white;
`;

const RibbonImg = styled.img`
  height: 60px;
`;

const WhyUsWrapper = styled.div`
  background-color: white;
`;

const Heading = styled.div`
  font-family: "Heading";
  font-size: 48px;
  line-height: 60px;
  text-align: center;
  color: var(--primary);
`;

export default function SubBanner() {
  return (
    <>
      <SubBannerWrapper>
        <Desc>
          Shop guilt-free knowing that our eco-friendly e-commerce platform is committed to reducing environmental
          impact and promoting sustainable practices in every step of the shopping process
        </Desc>
        <RibbonImg src="/img/sub-banner-ribbon.png" />
      </SubBannerWrapper>
      <WhyUsWrapper>
        <Heading>Why Bought From Us?</Heading>
      </WhyUsWrapper>
    </>
  );
}
