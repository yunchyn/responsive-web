import styled from "styled-components";
import { PrimaryButton, ProductList } from "../styled-utilities";
import { useState } from "react";
import { Link } from "react-router-dom";
import Subscribe from "./subscribe";

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

  @media (max-width: 1000px) {
    padding: 10px 0px;
  }

  @media (max-width: 500px) {
    padding: 20px 0px;
  }
`;

const Desc = styled.div`
  font-family: "Heading";
  font-size: 32px;
  line-height: 40px;
  text-align: center;
  color: white;
  padding: 0px 60px;

  @media (max-width: 1000px) {
    font-size: 28px;
  }

  @media (max-width: 500px) {
    font-size: 20px;
    line-height: 30px;
    padding: 0px 16px;
  }
`;

const RibbonImg = styled.img`
  height: 60px;

  @media (max-width: 1000px) {
    height: 50px;
  }

  @media (max-width: 500px) {
    height: 40px;
  }
`;

const WhyUsWrapper = styled.div`
  background-color: white;
  padding: 160px 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  gap: 40px;

  @media (max-width: 500px) {
    padding: 80px 16px;
  }
`;

const Heading = styled.div`
  font-family: "Heading";
  font-size: 48px;
  line-height: 60px;
  text-align: center;
  color: var(--primary);

  @media (max-width: 500px) {
    font-size: 28px;
    line-height: auto;
  }
`;

const ContentWrapper = styled.div`
  max-width: 280px;
  font-size: 20px;
  line-height: 28px;

  @media (max-width: 500px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

const IconSvg = styled.svg`
  width: 60px;
  height: 60px;
  margin-bottom: 16px;

  @media (max-width: 500px) {
    width: 40px;
    height: 40px;
  }
`;

const ContentTitle = styled.div`
  font-family: "SemiBold";
  color: var(--grey-600);
`;

const ContentDesc = styled.div`
  font-family: "Regular";
  color: var(--grey-500);
`;

const WeAreExistWrapper = styled.div`
  width: 100%;
  height: 310px;
  background-image: url("/img/media-bg.png");
  background-size: cover;
  padding-bottom: 20px;

  display: flex;
  flex-direction: row;

  @media (max-width: 500px) {
    flex-direction: column;
    height: auto;
  }
`;

const MediaHeadWrapper = styled.div`
  font-family: "Heading";
  color: var(--primary);
  font-size: 40px;
  line-height: 50px;
  width: 17%;
  height: 100%;
  background-color: var(--secondary);
  display: flex;
  justify-content: end;
  align-items: center;
  text-align: right;

  @media (max-width: 500px) {
    font-size: 24px;
    line-height: 30px;
    width: 202px;
    padding: 40px 0px;
    text-align: center;
    margin: 0px 20px;
  }
`;

const MediaHeading = styled.div`
  width: 150px;
  padding-right: 40px;

  @media (max-width: 500px) {
    width: 100%;
    padding: 0px;
  }
`;

const ListWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const MediaList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  max-width: calc((220px + 24px) * 4 - 24px); /* 100px은 최소 크기, 24px은 gap */

  gap: 24px;
  justify-content: center;
  align-content: center;
  /* padding: 0px 80px; */

  @media (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 24px 15px;
    gap: 16px;
  }
`;

const MediaItem = styled.img`
  height: 60px;
  border-radius: 8px;
  justify-self: center;
  align-self: center;

  @media (max-width: 1000px) {
    height: 50px;
  }

  @media (max-width: 500px) {
    height: 40px;
  }
`;

const mediaImages = [
  "/img/media1.png",
  "/img/media2.png",
  "/img/media3.png",
  "/img/media4.png",
  "/img/media5.png",
  "/img/media6.png",
  "/img/media7.png",
  "/img/media8.png",
];

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

        <ProductList>
          <ContentWrapper>
            <IconSvg>
              <svg
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 50C12.9167 50 11.1459 49.2708 9.68752 47.8125C8.22919 46.3542 7.50002 44.5833 7.50002 42.5C6.12502 42.5 4.94752 42.01 3.96752 41.03C2.98752 40.05 2.49835 38.8733 2.50002 37.5V15C2.50002 13.625 2.99002 12.4475 3.97002 11.4675C4.95002 10.4875 6.12669 9.99834 7.50002 10H37.5C38.875 10 40.0525 10.49 41.0325 11.47C42.0125 12.45 42.5017 13.6267 42.5 15V20H48.75C49.1667 20 49.5417 20.0833 49.875 20.25C50.2084 20.4167 50.5 20.6667 50.75 21L57 29.3125C57.1667 29.5208 57.2917 29.75 57.375 30C57.4584 30.25 57.5 30.5208 57.5 30.8125V40C57.5 40.7083 57.26 41.3025 56.78 41.7825C56.3 42.2625 55.7067 42.5017 55 42.5H52.5C52.5 44.5833 51.7708 46.3542 50.3125 47.8125C48.8542 49.2708 47.0833 50 45 50C42.9167 50 41.1459 49.2708 39.6875 47.8125C38.2292 46.3542 37.5 44.5833 37.5 42.5H22.5C22.5 44.5833 21.7709 46.3542 20.3125 47.8125C18.8542 49.2708 17.0834 50 15 50ZM15 45C15.7084 45 16.3025 44.76 16.7825 44.28C17.2625 43.8 17.5017 43.2067 17.5 42.5C17.5 41.7917 17.26 41.1975 16.78 40.7175C16.3 40.2375 15.7067 39.9983 15 40C14.2917 40 13.6975 40.24 13.2175 40.72C12.7375 41.2 12.4984 41.7933 12.5 42.5C12.5 43.2083 12.74 43.8025 13.22 44.2825C13.7 44.7625 14.2934 45.0017 15 45ZM45 45C45.7084 45 46.3025 44.76 46.7825 44.28C47.2625 43.8 47.5017 43.2067 47.5 42.5C47.5 41.7917 47.26 41.1975 46.78 40.7175C46.3 40.2375 45.7067 39.9983 45 40C44.2917 40 43.6975 40.24 43.2175 40.72C42.7375 41.2 42.4983 41.7933 42.5 42.5C42.5 43.2083 42.74 43.8025 43.22 44.2825C43.7 44.7625 44.2934 45.0017 45 45ZM42.5 32.5H53.125L47.5 25H42.5V32.5Z"
                  fill="var(--grey-400)"
                />
              </svg>
            </IconSvg>
            <ContentTitle>Free Shipping</ContentTitle>
            <ContentDesc>Shop now and enjoy free shipping on all orders</ContentDesc>
          </ContentWrapper>

          <ContentWrapper>
            <IconSvg>
              <svg
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M30 55C43.8075 55 55 43.8075 55 30C55 16.1925 43.8075 5 30 5C16.1925 5 5 16.1925 5 30C5 43.8075 16.1925 55 30 55ZM20.9925 38.8825C21.1393 38.6846 21.3237 38.5175 21.5351 38.3909C21.7466 38.2643 21.9809 38.1806 22.2247 38.1446C22.4685 38.1086 22.717 38.121 22.956 38.1811C23.195 38.2413 23.4198 38.3479 23.6175 38.495C25.4375 39.845 27.635 40.625 30 40.625C32.365 40.625 34.5625 39.8425 36.3825 38.495C36.5796 38.3416 36.8054 38.2291 37.0466 38.1642C37.2879 38.0993 37.5396 38.0832 37.7871 38.1169C38.0346 38.1506 38.2729 38.2335 38.4879 38.3606C38.703 38.4876 38.8905 38.6564 39.0394 38.857C39.1883 39.0575 39.2956 39.2858 39.3551 39.5284C39.4146 39.771 39.425 40.0231 39.3857 40.2698C39.3463 40.5164 39.2582 40.7528 39.1262 40.9649C38.9943 41.177 38.8214 41.3607 38.6175 41.505C36.1293 43.3653 33.1067 44.372 30 44.375C26.8933 44.372 23.8707 43.3653 21.3825 41.505C20.9831 41.2089 20.7176 40.7663 20.6445 40.2745C20.5713 39.7827 20.6965 39.282 20.9925 38.8825ZM40 26.25C40 28.32 38.88 30 37.5 30C36.12 30 35 28.32 35 26.25C35 24.18 36.12 22.5 37.5 22.5C38.88 22.5 40 24.18 40 26.25ZM22.5 30C23.88 30 25 28.32 25 26.25C25 24.18 23.88 22.5 22.5 22.5C21.12 22.5 20 24.18 20 26.25C20 28.32 21.12 30 22.5 30Z"
                  fill="var(--grey-400)"
                />
              </svg>
            </IconSvg>
            <ContentTitle>Satisfaction Guaranteed</ContentTitle>
            <ContentDesc>Our satisfaction guarantee ensures quality products</ContentDesc>
          </ContentWrapper>

          <ContentWrapper>
            <IconSvg>
              <svg
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28.125 55C26.75 55 25.3642 54.8433 23.9675 54.53C22.5708 54.2167 21.1442 53.7692 19.6875 53.1875C20.1875 48.1458 21.6458 43.4375 24.0625 39.0625C26.4792 34.6875 29.5833 30.8333 33.375 27.5C28.7917 29.8333 24.8225 32.9167 21.4675 36.75C18.1125 40.5833 15.7692 44.9583 14.4375 49.875C14.2708 49.75 14.1142 49.615 13.9675 49.47L13.5 49C11.5417 47.0417 10.0517 44.8542 9.03 42.4375C8.00834 40.0208 7.49834 37.5 7.5 34.875C7.5 32.0417 8.0625 29.3333 9.1875 26.75C10.3125 24.1667 11.875 21.875 13.875 19.875C17.25 16.5 21.625 14.3025 27 13.2825C32.375 12.2625 39.9167 12.1683 49.625 13C50.375 22.9583 50.25 30.5525 49.25 35.7825C48.25 41.0125 46.0833 45.2933 42.75 48.625C40.7083 50.6667 38.4267 52.24 35.905 53.345C33.3833 54.45 30.79 55.0017 28.125 55Z"
                  fill="var(--grey-400)"
                />
              </svg>
            </IconSvg>
            <ContentTitle>Eco Friendly Packaging</ContentTitle>
            <ContentDesc>Using eco-friendly materials, sustainable and biodegradable.</ContentDesc>
          </ContentWrapper>

          <ContentWrapper>
            <IconSvg>
              <svg
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M52.5 20C53.8261 20 55.0979 20.5268 56.0355 21.4645C56.9732 22.4021 57.5 23.6739 57.5 25V35C57.5 36.3261 56.9732 37.5978 56.0355 38.5355C55.0979 39.4732 53.8261 40 52.5 40H49.845C49.2355 44.8332 46.8832 49.2779 43.2294 52.5C39.5756 55.722 34.8715 57.4999 30 57.5V52.5C33.9782 52.5 37.7936 50.9197 40.6066 48.1066C43.4196 45.2936 45 41.4782 45 37.5V22.5C45 18.5217 43.4196 14.7064 40.6066 11.8934C37.7936 9.08035 33.9782 7.5 30 7.5C26.0218 7.5 22.2064 9.08035 19.3934 11.8934C16.5804 14.7064 15 18.5217 15 22.5V40H7.5C6.17392 40 4.90215 39.4732 3.96447 38.5355C3.02678 37.5978 2.5 36.3261 2.5 35V25C2.5 23.6739 3.02678 22.4021 3.96447 21.4645C4.90215 20.5268 6.17392 20 7.5 20H10.155C10.7651 15.1672 13.1177 10.7232 16.7714 7.50168C20.4252 4.28019 25.1289 2.50269 30 2.50269C34.8711 2.50269 39.5748 4.28019 43.2286 7.50168C46.8823 10.7232 49.2349 15.1672 49.845 20H52.5ZM19.4 39.4625L22.05 35.2225C24.4327 36.7151 27.1884 37.5045 30 37.5C32.8116 37.5045 35.5673 36.7151 37.95 35.2225L40.6 39.4625C37.4231 41.4529 33.7489 42.5058 30 42.5C26.2511 42.5059 22.5768 41.453 19.4 39.4625Z"
                  fill="var(--grey-400)"
                />
              </svg>
            </IconSvg>
            <ContentTitle>Fast Response</ContentTitle>
            <ContentDesc>24/7 fast and reliable assistance whenever you need it</ContentDesc>
          </ContentWrapper>
        </ProductList>
      </WhyUsWrapper>
      <WeAreExistWrapper>
        <MediaHeadWrapper>
          <MediaHeading>We Are Exist</MediaHeading>
        </MediaHeadWrapper>
        <ListWrapper>
          <MediaList>
            {mediaImages.map((image, index) => (
              <MediaItem
                key={index}
                src={image}
                alt={`Media ${index + 1}`}
              />
            ))}
          </MediaList>
        </ListWrapper>
      </WeAreExistWrapper>
      <Subscribe />
    </>
  );
}
