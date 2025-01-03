import styled from "styled-components";
import { PrimaryButton, ProductList } from "../styled-utilities";
import { ProductCard } from "./product-card";

const Container = styled.div`
  padding: 80px 60px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const HeadWrapper = styled.div``;

const Heading = styled.div`
  color: var(--grey-600);
  font-family: "Heading";
  font-size: 40px;
  line-height: 50px;

  @media (max-width: 1110px) {
    font-size: 34px;
    line-height: 41px;
  }
`;

const SubHeading = styled.div`
  color: var(--grey-500);
  font-family: "Regular";
  font-size: 20px;
  line-height: 28px;

  @media (max-width: 1110px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const newArrivals = [
  {
    img: "/img/new-arrival-img1.png",
    name: "Lollygagger Recycled Lounge Chair",
    price: "Rp699.900",
  },
  {
    img: "/img/new-arrival-img2.png",
    name: "Lollygagger Recycled Lounge Chair",
    price: "Rp999.900",
  },
  {
    img: "/img/new-arrival-img3.png",
    name: "Nisswa Recycled Loveseat",
    price: "Rp1.399.900",
  },
  {
    img: "/img/new-arrival-img4.png",
    name: "Lollygagger Recycled Outdoor Chaise",
    price: "Rp1.199.900",
  },
];

export default function NewArrivalProducts() {
  return (
    <Container>
      <HeadWrapper>
        <Heading>New Arrival</Heading>
        <SubHeading>Be the first to have the first-class product</SubHeading>
      </HeadWrapper>
      <ProductList>
        {newArrivals.map((product, index) => (
          <ProductCard
            theme="white"
            key={index}
            img={product.img}
            name={product.name}
            salePrice={product.salePrice}
            price={product.price}
          />
        ))}
      </ProductList>
      <BtnWrapper>
        <PrimaryButton>See More</PrimaryButton>
      </BtnWrapper>
    </Container>
  );
}
