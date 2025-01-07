import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  background-color: var(--grey-50);
  padding-top: 150px;
  position: relative;
`;

const FooterWrapper = styled.div`
  width: 100%;

  background-image: url("/img/footer-bg.png");
  background-size: cover;
`;

const LogoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const FooterLogo = styled.img`
  width: 120px;
  position: absolute;
  top: 100px;
`;

const CategoryWrapper = styled.div`
  padding-top: 120px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 24px;
  padding-bottom: 32px;
  border-bottom: 1px solid var(--grey-600);
`;

const CategorySection = styled.div`
  width: 312px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-family: "SemiBold";
`;

const CategoryTitle = styled.div`
  color: var(--primary);
  font-size: 20px;
  line-height: 28px;
  padding-bottom: 16px;
`;

const CategoryItem = styled(Link)`
  text-decoration: none;
  color: var(--grey-600);
`;

const PaymentImg = styled.img`
  width: 272px;
`;

const FooterBottom = styled.div``;

const BottomText = styled.div`
  font-size: 14px;
  line-height: 20px;
  color: var(--grey-600);
  padding: 20px 50px;
`;

const footerCategories = [
  {
    title: "Eco Shop",
    items: ["About Us", "Contact Us", "FAQs"],
  },
  {
    title: "Product Categories",
    items: ["New", "Clothing", "Bath & Bedding", "Home Goods", "Furniture", "Accesories", "Gift"],
  },
  {
    title: "Support",
    items: ["Shipping", "Returns", "Privacy Policy", "Terms of Use", "Affiliates"],
  },
];

export default function Footer() {
  return (
    <Container>
      <FooterWrapper>
        <LogoWrapper>
          <FooterLogo
            src="/img/footer-logo.png"
            alt="logo"
          />
        </LogoWrapper>
        <CategoryWrapper>
          {footerCategories.map((category, index) => (
            <CategorySection key={index}>
              <CategoryTitle>{category.title}</CategoryTitle>
              {category.items.map((item, itemIndex) => (
                <CategoryItem key={itemIndex}>{item}</CategoryItem>
              ))}
            </CategorySection>
          ))}
          <CategorySection>
            <CategoryTitle>Payment</CategoryTitle>
            <PaymentImg
              src="/img/payment-list.png"
              alt="payment"
            />
          </CategorySection>
        </CategoryWrapper>
        <FooterBottom>
          <BottomText>© 2023 Eco Shop Indonesia. All Rights Reserved.</BottomText>
        </FooterBottom>
      </FooterWrapper>
    </Container>
  );
}
