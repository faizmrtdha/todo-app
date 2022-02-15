import React, { useState } from "react";
import { Button, Stack, ListGroup } from "react-bootstrap";
import { MdDelete, MdCheck } from "react-icons/md";

const ToDoList = (props) => {
  const [complete, setComplete] = useState(false);
  const handleComplete = () => {
    console.log();
  };

  const handleDelete = (index) => {
    const updatedItems = props.todos.filter((elem) => {
      return index !== elem.id;
    });
  };
  return (
    <div className="list-todo">
      <ListGroup>
        {props.todos.map((item, id) => (
          <>
            <ListGroup.Item>
              <Stack direction="horizontal" gap={2}>
                <span key={id}>{item.text}</span>
                <Button className="ms-auto" variant="primary">
                  <MdCheck />
                </Button>
                <div className="vr"></div>
                <Button
                  variant="outline-danger"
                  onClick={handleDelete(item.id)}>
                  <MdDelete />
                </Button>
              </Stack>
            </ListGroup.Item>
          </>
        ))}
      </ListGroup>
    </div>
  );
};

export default ToDoList;
