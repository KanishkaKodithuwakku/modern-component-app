import React, { useState } from "react";
import { Column, Row } from "./Layout";
import styled from "styled-components";

const Button = styled.button`
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  padding:5px;
  font-size: .9rem;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  color: #fff;
  border: 1px solid transparent;

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }

  &:hover {
    text-decoration: none;
  }

  &:disabled {
    opacity: 0.65;
    box-shadow: none;
  }

  ${(props) =>
    props.primary &&
    `
      background-color: #007bff;
      &:hover {
        background-color: #0056b3;
      }
    `}

  ${(props) =>
    props.secondary &&
    `
      color: #383d41;
      background-color: #ffd500;
      border-color: #ffd500;

      &:hover {
        color: #212529;
        background-color: #ffcc00;
        border-color: #ffc200;
      }
    `}
`;

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 2px;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:focus {
    color: #495057;
    background-color: #fff;
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
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
        <Button secondary>Secondary Button</Button>
      </Column>
    </Column>
  );
};

export default TaskForm;
