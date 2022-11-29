import {
  Button,
  Input,
  Box,
  FormControl,
  FormHelperText,
  FormErrorMessage,
} from "@chakra-ui/react";
import React, { useState } from "react";

function TodoAdd({ createTodo }) {
  // const { loading } = useContext(Context);

  const [name, setName] = useState("");

  const onChangeHandler = (event) => {
    setName(event.target.value);
  };

  const isError = name === "";

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
    <Box display="flex" mb="16px" alignItems="start " className="todo__new">
      <FormControl isInvalid={isError}>
        <Input
          onKeyUp={(e) => e.code === "Enter" && addNewTodo()}
          fontSize="16px"
          p="8px 10px"
          type="text"
          placeholder="Add a new tasks"
          value={name}
          onChange={onChangeHandler}
        />
        {!isError ? (
          <FormHelperText>Enter to create task</FormHelperText>
        ) : (
          <FormErrorMessage>Task name is required.</FormErrorMessage>
        )}
      </FormControl>
      <Button
        bg="none"
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

// {/* <Input */}
// fontSize="16px"
// mr="16px"
// p="8px 10px"
// type="text"
// borderRadius="5px"
// placeholder="Add a new tasks"
// // value={name}
// onKeyUp={(e) => e.code === "Enter" && addNewTodo()}
// onChange={onChangeHandler}
// {/* />; */}
