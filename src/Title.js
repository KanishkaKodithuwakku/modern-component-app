import React from "react";
import { Column, Row } from "./Layout";
import styled from "styled-components";

const MainTitle = styled.h1`
  color: #211f1f;
  padding: 2px;
  margin: 0;
`;

const Subtitle = styled.p`
  color: #211f1f;
  padding: 2px;
  margin: 0;
`;

const Title = ({ title, subtitle, tag }) => {
  return (
    <Row>
      <Column>
        <MainTitle>{title}</MainTitle>
        <Subtitle as={tag}>{subtitle}</Subtitle>
      </Column>
    </Row>
  );
};

Title.defaultProps = {
  title: "Title",
  subtitle: "SubTitle",
  tag: "p",
};

export default Title;
