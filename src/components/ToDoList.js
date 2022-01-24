import React, { useState } from "react";
import { Button, Stack, Form, ListGroup, Modal } from "react-bootstrap";
import { MdDelete, MdCheck } from "react-icons/md";

const ToDoList = (props) => {
  // console.log(props);
  return (
    <div className="list-todo">
      <ListGroup>
        {props.todos.map((item, id) => (
          <>
            <ListGroup.Item key={id}>
              <Stack direction="horizontal" gap={2}>
                {item.text}
                <Button className="ms-auto" variant="primary">
                  <MdCheck />
                </Button>
                <div className="vr"></div>
                <Button variant="outline-danger">
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
