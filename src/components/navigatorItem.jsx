import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import { AiOutlineArrowUp } from "react-icons/ai";
import { Box, Button, Stack, useMediaQuery } from "@chakra-ui/react";
import { constants } from "../constants/constants";

function NavigatorItem({ filterState, sortByDate, isSorted, filter }) {
  function onClickHandlerDone() {
    filterState(constants.done);
  }

  function onClickHandlerUnDone() {
    filterState(constants.undone);
  }

  function onClickHandlerAll() {
    filterState("");
  }

  function OnClickHandlerDate() {
    isSorted === constants.asc
      ? sortByDate(constants.desc)
      : sortByDate(constants.asc);
  }

  const [isSmallThan850] = useMediaQuery("(max-width: 930px)");

  return (
    <Stack
      bg="none"
      _hover={{ bg: "none" }}
      spacing={isSmallThan850 ? 0 : 10}
      flexDirection={isSmallThan850 ? "row" : "column"}
      justifyContent={isSmallThan850 ? "end" : "center"}
      alignItems={isSmallThan850 ? "center" : "center"}
    >
      <Button
        bg="none"
        _hover={{ bg: "none" }}
        fontSize="20px"
        color={filter === "" ? "#EA5959" : null}
        onClick={onClickHandlerAll}
      >
        All
      </Button>
      <Button
        bg="none"
        _hover={{ bg: "none" }}
        fontSize="20px"
        color={filter === constants.done ? "#EA5959" : null}
        onClick={onClickHandlerDone}
      >
        Done
      </Button>
      <Button
        bg="none"
        _hover={{ bg: "none" }}
        fontSize="20px"
        color={filter === constants.undone ? "#EA5959" : null}
        onClick={onClickHandlerUnDone}
      >
        Undone
      </Button>
      <Box display={isSmallThan850 ? "flex" : "inline"}>
        <Button
          bg="none"
          _hover={{ bg: "none" }}
          fontSize="20px"
          onClick={OnClickHandlerDate}
        >
          Sort
        </Button>
        <Button
          bg="none"
          _hover={{ bg: "none" }}
          color={isSorted === constants.asc ? "#EA5959" : null}
        >
          <AiOutlineArrowDown></AiOutlineArrowDown>
        </Button>
        <Button
          bg="none"
          _hover={{ bg: "none" }}
          color={isSorted === constants.desc ? "#EA5959" : null}
        >
          <AiOutlineArrowUp></AiOutlineArrowUp>
        </Button>
      </Box>
    </Stack>
  );
}

export default NavigatorItem;
