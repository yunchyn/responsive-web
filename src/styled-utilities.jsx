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

  @media (max-width: 1279px) {
    font-size: 16px;
    line-height: 24px;
  }
  @media (max-width: 1110px) {
    font-size: 14px;
    line-height: 20px;
  }
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

  @media (max-width: 1110px) {
    margin-left: 18px;
    margin-top: 118px;
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
`;
