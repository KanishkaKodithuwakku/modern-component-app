import Alert from "./Alert";
import "./App.css";
import Layout, { Column, Row } from "./Layout";
import TaskForm from "./TaskForm";
import Title from "./Title";
import { useState } from "react";
import TodoList from "./TodoList";



function App() {

  const [todos, settodos] = useState([]);
  const [error, setError] = useState(null);

  const handleAddTodos = (task) => { 
    const updatedArray = [...todos, task];
    settodos(updatedArray);
    setError("");
  }

   const handleError = (errorMsg) => {
     setError(errorMsg);
   };
   

  return (
    <Layout>
      <Column>
        <Title
          title={`Todo App`}
          subtitle={`Organize, Track, and Conquer Your Daily Tasks.`}
        />
      </Column>

      {error && <Alert message={error} type={`danger`}/>}
      {!todos.length ? (
        <Alert message={`No todos yet!`} type={`warning`} />
      ) : null}

      <TaskForm handleAddTodos={handleAddTodos} handleError={handleError} />

      <TodoList data={todos} />
    </Layout>
  );
}

export default App;
