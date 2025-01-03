import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: inherit;
  gap: 8px;
  max-width: 312px;
`;

const ProductImg = styled.img`
  width: 100%;
  border-radius: 8px;
  background-color: white;
  object-fit: contain;
`;

const Name = styled.div`
  font-family: "Semibold";
  font-size: 20px;
  line-height: 28px;
  color: ${({ theme }) => (theme === "white" ? "var(--grey-600)" : "inherit")};

  @media (max-width: 1110px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

const PriceWrapper = styled.div`
  font-family: "Semibold";
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => (theme === "white" ? "var(--primary)" : "inherit")};

  @media (max-width: 1110px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

export function ProductCard({ theme = "primary", img = "", name = "Product", price = 0, salePrice }) {
  return (
    <Container>
      <ProductImg
        src={img}
        alt={name}
      />
      <Name>{name}</Name>
      <PriceWrapper theme={theme}>
        {salePrice ? (
          <>
            <div>{salePrice}</div>
            <div style={{ textDecoration: "line-through" }}>{price}</div>
          </>
        ) : (
          <div>{price}</div>
        )}
      </PriceWrapper>
    </Container>
  );
}
