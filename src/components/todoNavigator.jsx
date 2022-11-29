import React from "react";
import NavigatorItem from "./navigatorItem";
import { Box, useMediaQuery } from "@chakra-ui/react";

function TodoNavigator({ filterState, sortByDate, isSorted, filter }) {
  const [isSmallThan850] = useMediaQuery("(max-width: 850px)");

  return (
    <Box
      borderRight={isSmallThan850 ? "none" : "1px solid #EA5959"}
      display="flex"
      justifyContent="center"
    >
      <NavigatorItem
        filterState={filterState}
        sortByDate={sortByDate}
        isSorted={isSorted}
        filter={filter}
      />
    </Box>
  );
}

export default TodoNavigator;
