import { Outlet } from "react-router-dom";

import styled from "styled-components";
import Navigation from "./components/navigation/navigation";

const ChildrenWrapper = styled.div`
  padding-top: 233.71px;
  @media (max-width: 500px) {
    padding-top: 186.43px;
  }
`;

export default function Layout() {
  return (
    <>
      <Navigation />
      <ChildrenWrapper>
        <Outlet />
      </ChildrenWrapper>
    </>
  );
}
