import styled from "styled-components";
import MenuBar from "./menu-bar";
import MobileMenuBar from "./m-menu-bar";
import LogoHeader from "./logo-header";

const Conatiner = styled.nav`
  width: 100%;
  border-bottom: 1px solid var(--primary);
  position: fixed;
  z-index: 10;
  background-color: white;
`;

const SaleBar = styled.div`
  background-color: var(--primary);
  color: white;
  padding: 16px 0px;
  font-family: "Semibold";
  font-size: 16px;
  line-height: 24px;
  text-align: center;

  @media (max-width: 500px) {
    font-size: 14px;
    line-height: 20px;
  }

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
      <MobileMenuBar />
    </Conatiner>
  );
}
