import React from 'react'
import { Column, Row } from "./Layout";
import styled from 'styled-components';

const AlertBox = styled.div`
  border: 1px solid #bcbcbc;
  padding: 5px;
  border-radius: 4px;
  margin: 2px;
  background-color: ${(props) => {
    switch (props.type) {
      case "danger":
        return "#f8d7da";
      case "success":
        return "#d4edda";
      case "warning":
        return "#fff3cd";
      case "info":
        return "#d1e7dd";
      default:
        return "#e2e3e5"; 
    }
  }};
  color: ${(props) => {
    switch (props.type) {
      case "danger":
        return "#842029";
      case "success":
        return "#0f5132";
      case "warning":
        return "#664d03";
      case "info":
        return "#055160";
      default:
        return "#0c0c0d"; // default color for 'default' variant
    }
  }};
`;
const Alert = ({ message, type }) => {
  return (
    <Column span={6}>
      <AlertBox type={type}>{message}</AlertBox>
    </Column>
  );
};

export default Alert;
