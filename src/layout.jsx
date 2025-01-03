import { Outlet } from "react-router-dom";
import Navigation from "./components/navigation";
import styled from "styled-components";

const ChildrenWrapper = styled.div`
  padding-top: 233.71px;
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
