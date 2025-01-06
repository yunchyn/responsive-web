import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
  justify-content: center;
  padding: 16px;

  @media (max-width: 900px) {
    gap: 0px;
  }

  @media (max-width: 500px) {
    display: none;
  }
`;

const MenuIcon = styled(Link)`
  text-decoration: none;
  color: var(--grey-600);
  font-family: "SemiBold";
  font-size: 16px;
  line-height: 24px;
  padding: 8px 16px;
  transition: color 0.3s ease, background-color 0.3s ease;
  &:hover {
    color: white;
    background-color: var(--primary);
  }

  @media (max-width: 1000px) {
    padding: 8px 6px;
  }
`;

export const menuItems = ["NEW!", "Clothing", "Bath", "Bedding", "Home Goods", "Furniture", "Footwear", "Accessories"];

export default function MenuBar() {
  return (
    <Container>
      {menuItems.map((item, index) => (
        <MenuIcon
          key={index}
          // to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
        >
          {item}
        </MenuIcon>
      ))}
    </Container>
  );
}
