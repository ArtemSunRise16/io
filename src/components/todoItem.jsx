import { Box, Checkbox, IconButton, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { BsTrash } from "react-icons/bs";

function TodoItem({ saveTodo, todo, completeTask, removeTodo }) {
  const [isLoader, setIsLoader] = useState(false);

  const [value, setValue] = useState("");
  const [edit, setEdit] = useState(null);

  function editTodo(id, value) {
    setEdit(id);
    setValue(value);
  }

  function saveHandler(event) {
    event.preventDefault();
    saveTodo(todo.uuid, value, todo);
    setEdit(null);
  }

  const onChangeHandler = (event) => {
    setValue(event.target.value);
  };

  const onClickHandler = () => {
    setIsLoader(true);
    console.log(isLoader);
    removeTodo(todo.uuid);
  };

  const handlerBlur = () => {
    setEdit(false);
  };

  const handleEcsPress = (e) => {
    if (e.keyCode === 27) handlerBlur();
  };

  return (
    <Box>
      {edit ? (
        <form onSubmit={saveHandler} className="todo__list__edit">
          <Checkbox
            checked={todo.done ? true : false}
            onChange={() => completeTask(todo.uuid)}
          ></Checkbox>
          <Input
            className="edit__todo"
            autoFocus
            onBlur={handlerBlur}
            value={value}
            onChange={(e) => {
              onChangeHandler(e);
            }}
            onKeyDown={handleEcsPress}
          />
        </form>
      ) : (
        <Box
          display="flex"
          fontSize="20px"
          alignItems="center"
          mb="10px"
          wordBreak="break-all"
          className="todo__list"
        >
          <Checkbox
            size="lg"
            colorScheme="red"
            borderRadius="100px"
            defaultChecked={todo.done ? true : false}
            className="todo__task__checkbox"
            onChange={() => completeTask(todo)}
          />

          <Text
            ml="10px"
            onClick={() => editTodo(todo.uuid, todo.name)}
            className="todo__task__text"
          >
            {todo.name}
          </Text>

          <Box ml="20px" fontSize="5px" className="todo__task__date">
            {todo.createdAt}
          </Box>

          <IconButton
            bg="none"
            ml="auto"
            color="#EA5959"
            fontSize="25px"
            disabled={isLoader}
            onClick={onClickHandler}
            icon={<BsTrash />}
          ></IconButton>
        </Box>
      )}
    </Box>
  );
}

export default TodoItem;
