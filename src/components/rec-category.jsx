import styled from "styled-components";
import { Grey600Button } from "../styled-utilities";

const RecommendCategory = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1.8%;
  padding: 80px 60px;
`;

const RecommendHeading = styled.div`
  width: 200px;
  font-family: "Heading";
  font-size: 40px;
  line-height: 50px;
  color: var(--primary);
`;

const RecHeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1330px) {
    display: none;
  }
`;

const CategoryWrapper = styled.div``;

const CatergoryImg = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 8px;

  @media (max-width: 1110px) {
    width: 170px;
    height: 170px;
  }
`;

export default function RecommendedCategory() {
  return (
    <RecommendCategory>
      <RecHeadingWrapper>
        <RecommendHeading>Category</RecommendHeading>
        <RecommendHeading>For</RecommendHeading>
        <RecommendHeading>You</RecommendHeading>
      </RecHeadingWrapper>
      <CategoryWrapper>
        <Grey600Button>Clothing</Grey600Button>
        <CatergoryImg
          src="/img/clothing.png"
          alt="clothing"
        />
      </CategoryWrapper>
      <CategoryWrapper>
        <Grey600Button>Home Goods</Grey600Button>
        <CatergoryImg
          src="/img/home-goods.png"
          alt="home goods"
        />
      </CategoryWrapper>
      <CategoryWrapper>
        <Grey600Button>Bedding</Grey600Button>
        <CatergoryImg
          src="/img/bedding.png"
          alt="bedding"
        />
      </CategoryWrapper>
      <CategoryWrapper>
        <Grey600Button>Furniture</Grey600Button>
        <CatergoryImg
          src="/img/furniture.png"
          alt="furniture"
        />
      </CategoryWrapper>
      <CategoryWrapper>
        <Grey600Button>Accesories</Grey600Button>
        <CatergoryImg
          src="/img/accesories.png"
          alt="accesories"
        />
      </CategoryWrapper>
    </RecommendCategory>
  );
}
