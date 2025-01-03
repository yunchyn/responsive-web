import styled from "styled-components";
import MenuBar from "./menu-bar";
import LogoHeader from "./logo-header";

const Conatiner = styled.nav`
  width: 100%;
  border-bottom: 1px solid var(--primary);
  position: fixed;
  background-color: white;
`;

const SaleBar = styled.div`
  background-color: #658c4a;
  color: white;
  height: 56px;
  font-family: "Semibold";
  font-size: 16px;
  line-height: 24px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Navigation() {
  return (
    <Conatiner>
      <SaleBar>Free Shipping with minimum purchase Rp250.000</SaleBar>
      <LogoHeader />
      <MenuBar />
    </Conatiner>
  );
}
