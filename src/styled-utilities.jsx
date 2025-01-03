import { Link } from "react-router-dom";
import styled from "styled-components";

export const PrimaryButton = styled(Link)`
  text-decoration: none;
  background-color: var(--primary);
  color: white;
  font-family: "SemiBold";
  font-size: 20px;
  line-height: 28px;
  border-radius: 40px;
  padding: 12px 24px;
  transition: color 0.3s ease, background-color 0.3s ease;
  &:hover {
    color: var(--primary);
    background-color: var(--secondary);
  }
`;
