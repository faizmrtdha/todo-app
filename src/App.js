import { Container, Button, Form, Stack } from "react-bootstrap";
import ToDoList from "./components/ToDoList";
import { useEffect, useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo !== "") {
      setTodos([
        ...todos,
        {
          id: todos.length + 1,
          text: todo.trim(),
        },
      ]);
    }
    setTodo("");
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="app">
      <Container>
        <div className="todo-app mx-auto">
          <div className="add-todo">
            <h2 className="text-center mb-3">Todo-App</h2>
            <Form onSubmit={handleSubmit} className="mb-3">
              <Stack direction="horizontal" gap={3}>
                <Form.Control
                  className="input me-auto"
                  type="text"
                  onChange={(e) => setTodo(e.target.value)}
                  value={todo}
                />
                <Button type="submit" variant="success">
                  Add
                </Button>
              </Stack>
            </Form>
          </div>
          <ToDoList todos={todos} />
        </div>
      </Container>
    </div>
  );
}

export default App;
