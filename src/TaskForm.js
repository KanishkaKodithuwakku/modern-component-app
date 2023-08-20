import React, { useState } from "react";
import { Column, Row } from "./Layout";
import styled from "styled-components";

const Button = styled.button`
  padding: 5px;
  border: 1px sold #ccc;
  border-radius: 4px;
  margin-top: 2px;
  background-color: ${(props) => (props.primary ? "blue" : "yellow")};
  color: #fff;
`;

const Input = styled.input`
  padding: 2px;
  border-radius: 4px;
`;

const TaskForm = ({ handleAddTodos, handleError }) => {
  const [task, setTask] = useState("");

  const handleInputChange = (value) => {
    setTask(value);
  };

  const handleSubmit = () => {
    if (task.trim().length === 0) {
      handleError("Task cannot be empty");
    } else {
      handleAddTodos(task);
      setTask("");
    }
  };

  return (
    <Column span={6}>
      <Input
        type="text"
        value={task}
        onChange={(e) => handleInputChange(e.target.value)}
      />
      <Column span={3}>
        <Button primary onClick={handleSubmit}>
          Add Task
        </Button>
      </Column>
    </Column>
  );
};

export default TaskForm;
