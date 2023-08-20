import React from "react";
import { styled } from "styled-components";

const Title = styled.h1`
  color: ${(props) => (props.main ? "blue" : "green")};
`;

const Header = () => {
    return (
      <>
        <Title main="main">Main Title</Title>
        <Title as="h3">Sub Title</Title>
      </>
    );
};

export default Header;
