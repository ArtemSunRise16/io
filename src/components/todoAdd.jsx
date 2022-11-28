import { Button, Input, Box } from "@chakra-ui/react";
import React, { useState } from "react";

function TodoAdd({ createTodo }) {
  // const { loading } = useContext(Context);

  const [name, setName] = useState("");

  const onChangeHandler = (event) => {
    setName(event.target.value);
  };

  function addNewTodo() {
    if (name.trim() === "") return null;

    const d = new Date();

    const newTodo = {
      name: name,
      done: false,
      createdAt: d.toLocaleString(),
      updatedAt: d.getTime(),
    };
    createTodo(newTodo);
    setName("");
  }

  function submitHandler(event) {
    event.preventDefault();
  }

  return (
    <Box
      display="flex"
      mb="16px"
      alignItems="center"
      className="todo__new"
      onSubmit={submitHandler}
    >
      <Input
        fontSize="16px"
        mr="16px"
        p="8px 10px"
        type="text"
        borderRadius="5px"
        placeholder="Add a new tasks"
        value={name}
        onChange={onChangeHandler}
      ></Input>
      <Button
        fontSize="30px"
        textAlign="center"
        maxH="50px"
        maxW="50px"
        color="#EA5959"
        onClick={addNewTodo}
      >
        +
      </Button>
    </Box>
  );
}

export default TodoAdd;
