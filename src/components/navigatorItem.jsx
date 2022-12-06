import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import { AiOutlineArrowUp } from "react-icons/ai";
import { Box, Button, Stack, useMediaQuery } from "@chakra-ui/react";

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

  const [isSmallThan850] = useMediaQuery("(max-width: 850px)");

  return (
    <Stack
      spacing={isSmallThan850 ? 0 : 10}
      flexDirection={isSmallThan850 ? "row" : "column"}
      justifyContent={isSmallThan850 ? "end" : "center"}
      alignItems={isSmallThan850 ? "center" : "center"}
    >
      <Button
        fontSize="20px"
        color={filter === "" ? "#EA5959" : null}
        onClick={onClickHandlerAll}
      >
        All
      </Button>
      <Button
        fontSize="20px"
        color={filter === "done" ? "#EA5959" : null}
        onClick={onClickHandlerDone}
      >
        Done
      </Button>
      <Button
        fontSize="20px"
        color={filter === "undone" ? "#EA5959" : null}
        onClick={onClickHandlerUnDone}
      >
        Undone
      </Button>
      <Box display={isSmallThan850 ? "flex" : "inline"}>
        <Button fontSize="20px" onClick={OnClickHandlerDate}>
          Sort
        </Button>
        <Button color={isSorted === "asc" ? "#EA5959" : null}>
          <AiOutlineArrowDown></AiOutlineArrowDown>
        </Button>
        <Button color={isSorted === "desc" ? "#EA5959" : null}>
          <AiOutlineArrowUp></AiOutlineArrowUp>
        </Button>
      </Box>
    </Stack>
  );
}

export default NavigatorItem;
