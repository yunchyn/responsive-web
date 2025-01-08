import { Link } from "react-router-dom";
import styled from "styled-components";

export const PrimaryButton = styled(Link)`
  text-decoration: none;
  background-color: var(--primary);
  color: white;
  font-family: "SemiBold";
  border-radius: 40px;
  font-size: 20px;
  line-height: 28px;
  padding: 12px 24px;
  transition: color 0.3s ease, background-color 0.3s ease;
  &:hover {
    color: var(--primary);
    background-color: var(--secondary);
  }

  @media (max-width: 1200px) {
    font-size: 16px;
    line-height: 24px;
  }
  @media (max-width: 1000px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

export const SecondaryButton = styled(PrimaryButton)`
  background-color: var(--secondary);
  color: var(--primary);
`;

export const Grey600Button = styled(Link)`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  margin-left: 24px;
  margin-top: 140px;

  @media (max-width: 1000px) {
    margin-left: 18px;
    margin-top: 118px;
  }

  @media (max-width: 500px) {
    margin-left: 22px;
    margin-top: 204px;
  }

  text-decoration: none;
  background-color: var(--grey-600);
  color: white;
  font-family: "SemiBold";
  font-size: 14px;
  line-height: 20px;
  border-radius: 40px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: var(--primary);
  }
`;

export const ProductList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  justify-content: center;
  padding: 0px 20px;
  /* display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 24px;
  justify-items: center;
  padding: 0px 20px; */

  /* @media (max-width: 1100px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    justify-items: center;
    padding: 0px;
  } */

  @media (max-width: 500px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    justify-items: center;
    padding: 0px;
  }
`;
