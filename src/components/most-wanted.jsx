import styled from "styled-components";
import { ProductCard } from "./product-card";
import { ProductList } from "../styled-utilities";

const Container = styled.div`
  /* width: 100%;
  background-color: var(--primary);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  padding: 80px 0px;
  color: white; */
  padding: 80px 60px;
  background-color: var(--primary);
  color: white;
  gap: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
`;

const HeadWrapper = styled.div``;

const Heading = styled.div`
  color: white;
  font-family: "Heading";
  font-size: 48px;
  line-height: 60px;
  text-align: center;

  @media (max-width: 1110px) {
    font-size: 40px;
    line-height: 51px;
  }
`;

const SubHeading = styled.div`
  color: white;
  font-family: "Regular";
  font-size: 20px;
  line-height: 28px;
  text-align: center;

  @media (max-width: 1110px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

const products = [
  {
    img: "/img/product-img1.png",
    name: "Alpine Provisions | Cedar + Sandalwood Hand Soap",
    salePrice: "Rp99.900",
    price: "Rp259.000",
  },
  {
    img: "/img/product-img2.png",
    name: "Women's Classic Sole Low Back Wool Slippers",
    salePrice: "Rp79.900",
    price: "Rp159.000",
  },
  {
    img: "/img/product-img3.png",
    name: "Large Patterned Hamper Basket",
    salePrice: "Rp199.900",
    price: "Rp329.900",
  },
  {
    img: "/img/product-img4.png",
    name: "Meliora | Eco Laundry Powder",
    salePrice: "Rp159.900",
    price: "Rp259.000",
  },
];

export default function MostWantedProducts() {
  return (
    <Container>
      <HeadWrapper>
        <Heading>Our Most Wanted Products</Heading>
        <SubHeading>Good for environment, good for you</SubHeading>
      </HeadWrapper>
      <ProductList>
        {products.map((product, index) => (
          <ProductCard
            theme="primary"
            key={index}
            img={product.img}
            name={product.name}
            salePrice={product.salePrice}
            price={product.price}
          />
        ))}
      </ProductList>
    </Container>
  );
}
