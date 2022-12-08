import {
  Box,
  Checkbox,
  IconButton,
  Input,
  Text,
  useMediaQuery,
  FormControl,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BsTrash } from "react-icons/bs";

function TodoItem({ saveTodo, todo, completeTask, removeTodo }) {
  const data = new Date(todo.createdAt);

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
    removeTodo(todo.uuid);
  };

  const handlerBlur = () => {
    setEdit(false);
  };

  const handleEcsPress = (e) => {
    if (e.keyCode === 27) handlerBlur();
  };

  const [isSmallThan850] = useMediaQuery("(max-width: 930px)");

  return (
    <Box>
      {edit ? (
        <FormControl>
          <Input
            autoFocus
            onKeyUp={(e) => e.code === "Enter" && saveHandler(e)}
            onBlur={handlerBlur}
            value={value}
            onChange={(e) => {
              onChangeHandler(e);
            }}
            onKeyDown={handleEcsPress}
          />
        </FormControl>
      ) : (
        <Box
          display="flex"
          fontSize={isSmallThan850 ? "14px" : "20px"}
          alignItems="center"
          mb="10px"
          wordBreak="break-all"
        >
          <Checkbox
            size="lg"
            colorScheme="red"
            borderRadius="100px"
            defaultChecked={todo.done ? true : false}
            onChange={() => completeTask(todo)}
          />
          <Box
            display="flex"
            justifyContent="space-between"
            w="85%"
            alignItems="center"
          >
            <Text ml="10px" onClick={() => editTodo(todo.uuid, todo.name)}>
              {todo.name}
            </Text>

            {isSmallThan850 ? null : (
              <Box ml="20px" fontSize="15px">
                {`${data.getDate()}/${
                  data.getMonth() + 1
                }/${data.getFullYear()}`}
              </Box>
            )}
          </Box>

          <IconButton
            bg="none"
            color="#EA5959"
            ml="auto"
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
