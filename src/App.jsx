import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import styled from "styled-components";

const InputWrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: end;
gap: 24px;
padding: 32px;
`;

const TodoElement = styled.li`
cursor: pointer;
`;

function App() {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState(['Videoları izlemek', 'Proje yapmak']);

  return (
    <div>
      <InputWrapper>
        <Form style={{ flex: 1 }}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Hedef</Form.Label>
            <Form.Control
              value={todoInput}
              onChange={(e) => setTodoInput(e.target.value)}
              type="text"
              placeholder="Yapılacak iş..." // changed placeholder text
            />
          </Form.Group>
        </Form>
        <Button
          onClick={() => {
            if (todos.includes(todoInput)) {
              alert("Zaten " + todoInput + " eklenmiş.");
              return;
            }
            setTodos((prevTodos) => [...prevTodos, todoInput]);
            setTodoInput("");
          }}
          variant="success"
        >
          Ekle
        </Button>
      </InputWrapper>
      <ul>
        {todos.map((todo, index) => (
          <TodoElement
            onClick={() => {
              setTodos((prevTodos) => prevTodos.filter((oldTodo) => oldTodo !== todo));
            }}
            key={index}
          >
            {todo}
          </TodoElement>
        ))}
      </ul>
    </div>
  );
}

export default App;
