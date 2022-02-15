import { Container, Button, Form, Stack, ListGroup } from "react-bootstrap";
import { MdDelete, MdCheck } from "react-icons/md";
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
          id: todos.length,
          text: todo.trim(),
          done: false,
        },
      ]);
    }
    setTodo("");
  };

  const handleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].done = true;
    setTodos(newTodos);
  };

  const handleDelete = (index) => {
    const newTodos = todos.filter((elem) => {
      return index !== elem.id;
    });
    setTodos(newTodos);
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
          {/* <ToDoList todos={todos} /> */}
          <div className="list-todo">
            <ListGroup>
              {todos.map((item, id) => (
                <>
                  <ListGroup.Item key={id}>
                    <Stack direction="horizontal" gap={2}>
                      <span
                        style={{
                          textDecoration: item.done ? "line-through" : "",
                        }}>
                        {item.text}
                      </span>
                      <Button
                        className="ms-auto"
                        variant="primary"
                        onClick={() => handleComplete(item.id)}>
                        <MdCheck />
                      </Button>
                      <div className="vr"></div>
                      <Button
                        variant="outline-danger"
                        onClick={() => handleDelete(item.id)}>
                        <MdDelete />
                      </Button>
                    </Stack>
                  </ListGroup.Item>
                </>
              ))}
            </ListGroup>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default App;
