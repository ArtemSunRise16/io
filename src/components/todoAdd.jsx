import {
  Button,
  Input,
  Box,
  FormControl,
  FormHelperText,
  FormErrorMessage,
} from "@chakra-ui/react";
import React, { useState, useRef } from "react";
import { useEffect } from "react";

function TodoAdd({ createTodo }) {
  const [name, setName] = useState("");

  const onChangeHandler = (event) => {
    setName(event.target.value);
  };

  const [isError, setIsError] = useState(false);

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, [name]);

  function addNewTodo() {
    if (name.trim() === "") {
      setIsError(true);
    }

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

  function onHandlerBlur() {
    setIsError(false);
  }

  return (
    <Box display="flex" mb="16px" alignItems="start">
      <FormControl flexDirection="column" display="flex" isInvalid={isError}>
        <Input
          ref={inputRef}
          onBlur={onHandlerBlur}
          display="flex"
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
