import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
  justify-content: center;
  padding: 16px;
`;

const MenuIcon = styled(Link)`
  text-decoration: none;
  color: var(--grey-600);
  font-family: "SemiBold";
  line-height: 24px;
  padding: 8px 16px;
  transition: color 0.3s ease, background-color 0.3s ease;
  &:hover {
    color: white;
    background-color: var(--primary);
  }
`;

export default function MenuBar() {
  const menuItems = ["NEW!", "Clothing", "Bath", "Bedding", "Home Goods", "Furniture", "Footwear", "Accessories"];

  return (
    <Container>
      {menuItems.map((item, index) => (
        <MenuIcon
          key={index}
          to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
        >
          {item}
        </MenuIcon>
      ))}
    </Container>
  );
}
