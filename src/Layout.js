import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body, #root {
    height: 100%;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Container = styled.div`
  width: 600px;
  display: flex;
  padding: 10px;
  flex-direction: column; // Change here
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex: ${(props) =>
    props.span
      ? props.span / 12
      : "1"}; // If you want to mimic Bootstrap's span
  width: ${(props) => (props.span ? (props.span / 12) * 100 : "100")}%;
`;

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Container>{children}</Container>
    </>
  );
};
export default Layout;
