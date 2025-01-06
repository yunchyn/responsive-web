import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 16px;

  @media (max-width: 500px) {
    display: none;
  }
`;

const SearchInputWrapper = styled.div`
  width: 80%;
  position: relative;
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
`;

const SearchIcon = styled.svg`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  fill: var(--grey-400);
`;

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
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
    </Container>
  );
}
