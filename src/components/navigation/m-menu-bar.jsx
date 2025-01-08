import { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { menuItems } from "./menu-bar";

const slideDown = keyframes`
  from {
    max-height: 0;
    opacity: 0;
  }
  to {
    max-height: 500px; 
    opacity: 1;
  }
`;

const slideUp = keyframes`
  from {
    max-height: 500px;
    opacity: 1;
  }
  to {
    max-height: 0;
    opacity: 0;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 0px;
  gap: 24px;
  overflow: hidden;

  display: none;
  @media (max-width: 500px) {
    display: flex;
  }
`;

const SearchInputWrapper = styled.div`
  width: 80%;
  position: relative;
  display: flex;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 8px 16px 8px 50px;
  font-family: "Regular";
  font-size: 16px;
  line-height: 24px;
  border-radius: 40px;
  border: 1px solid var(--grey-200);
  ::placeholder {
    color: var(--grey-400);
  }

  @media (max-width: 500px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

const SearchIcon = styled.svg`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  fill: var(--grey-400);
`;

const IconSvg = styled.svg`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const Menu = styled.div`
  overflow: hidden;
  max-height: ${(props) => (props.isOpen ? "500px" : "0")};
  background-color: var(--white);
  border-top: 1px solid var(--primary);
  width: 100%;
  animation: ${(props) => (props.shouldAnimate ? (props.isOpen ? slideDown : slideUp) : "none")} 0.5s ease-in-out;
`;

const MenuItem = styled.div`
  padding: 12px 20px;
  font-family: "SemiBold";
  font-size: 12px;
  line-height: 16px;
  color: var(--black);
  border-bottom: 1px solid var(--grey-200);
  cursor: pointer;

  transition: background-color 0.2s ease;
  &:hover {
    background-color: var(--grey-100);
  }
`;

export default function MobileMenuBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isInitialRender = useRef(true);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
    }
  }, []);

  return (
    <>
      <Container>
        <SearchInputWrapper>
          <SearchIcon
            width="24"
            height="24"
            viewBox="0 0 48 48"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20.2791 4C11.2884 4 4 11.2884 4 20.2791C4 29.2698 11.2884 36.5581 20.2791 36.5581C24.2721 36.5581 27.9293 35.1205 30.7613 32.7347L41.618 43.5913C42.1629 44.1362 43.0464 44.1362 43.5913 43.5913C44.1362 43.0464 44.1362 42.1629 43.5913 41.618L32.7347 30.7613C35.1205 27.9293 36.5581 24.2721 36.5581 20.2791C36.5581 11.2884 29.2698 4 20.2791 4ZM6.7907 20.2791C6.7907 12.8296 12.8296 6.7907 20.2791 6.7907C27.7285 6.7907 33.7674 12.8296 33.7674 20.2791C33.7674 27.7285 27.7285 33.7674 20.2791 33.7674C12.8296 33.7674 6.7907 27.7285 6.7907 20.2791Z"
            />
          </SearchIcon>
          <SearchInput
            type="text"
            placeholder="Search here..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </SearchInputWrapper>
        <IconSvg onClick={toggleMenu}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.25 7C2.25 6.58579 2.58579 6.25 3 6.25H21C21.4142 6.25 21.75 6.58579 21.75 7C21.75 7.41421 21.4142 7.75 21 7.75H3C2.58579 7.75 2.25 7.41421 2.25 7Z"
              fill="#333333"
            />
            <path
              d="M2.25 12C2.25 11.5858 2.58579 11.25 3 11.25H21C21.4142 11.25 21.75 11.5858 21.75 12C21.75 12.4142 21.4142 12.75 21 12.75H3C2.58579 12.75 2.25 12.4142 2.25 12Z"
              fill="#333333"
            />
            <path
              d="M3 16.25C2.58579 16.25 2.25 16.5858 2.25 17C2.25 17.4142 2.58579 17.75 3 17.75H21C21.4142 17.75 21.75 17.4142 21.75 17C21.75 16.5858 21.4142 16.25 21 16.25H3Z"
              fill="#333333"
            />
          </svg>
        </IconSvg>
      </Container>
      <Menu
        isOpen={isMenuOpen}
        shouldAnimate={!isInitialRender.current}
      >
        {menuItems.map((item, index) => (
          <MenuItem key={index}>{item}</MenuItem>
        ))}
      </Menu>
    </>
  );
}
