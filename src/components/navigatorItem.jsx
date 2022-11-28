import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import { AiOutlineArrowUp } from "react-icons/ai";
import { Box, Button, Flex, VStack } from "@chakra-ui/react";

function NavigatorItem({ filterState, sortByDate, isSorted, filter }) {
  function onClickHandlerDone() {
    filterState("done");
  }

  function onClickHandlerUnDone() {
    filterState("undone");
  }

  function onClickHandlerAll() {
    filterState("");
  }

  function OnClickHandlerDate() {
    console.log(isSorted);
    isSorted === "asc" ? sortByDate("desc") : sortByDate("asc");
  }

  return (
    <VStack spacing={10} direction={["row", "column"]} justifyContent="center">
      <Button
        bg="none"
        fontSize="20px"
        color={filter === "" ? "#EA5959" : undefined}
        onClick={onClickHandlerAll}
      >
        All
      </Button>
      <Button
        fontSize="20px"
        bg="none"
        color={filter === "done" ? "#EA5959" : undefined}
        onClick={onClickHandlerDone}
      >
        Done
      </Button>
      <Button
        fontSize="20px"
        bg="none"
        color={filter === "undone" ? "#EA5959" : undefined}
        onClick={onClickHandlerUnDone}
      >
        Undone
      </Button>
      <Box>
        <Button fontSize="20px" bg="none" onClick={OnClickHandlerDate}>
          Sort
        </Button>
        <Button bg="none" color={isSorted === "asc" ? "#EA5959" : undefined}>
          <AiOutlineArrowDown></AiOutlineArrowDown>
        </Button>
        <Button bg="none" color={isSorted === "desc" ? "#EA5959" : undefined}>
          <AiOutlineArrowUp></AiOutlineArrowUp>
        </Button>
      </Box>
    </VStack>
  );
}

export default NavigatorItem;
