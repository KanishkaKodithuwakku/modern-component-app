import React from "react";
import styled from "styled-components";
import {Column} from "./Layout";

const ListWrapper = styled.ul`
  list-style: none;
  margin-top:20;
  padding:0;
`;

const ListItem = styled.li`
  padding: 2px;
  margin:1px;
  border: 1px solid #666
`;

const TodoList = ({ data }) => {
  return (
    <Column span={6}>
      <ListWrapper>
        {data &&
          data.map((d, index) => (
            <ListItem key={index}>{index + 1 + " " + d}</ListItem>
          ))}
      </ListWrapper>
    </Column>
  );
};

export default TodoList;
