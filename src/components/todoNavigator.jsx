import React from "react";
import NavigatorItem from "./navigatorItem";
import { Flex } from "@chakra-ui/react";

function TodoNavigator({ filterState, sortByDate, isSorted, filter }) {
  return (
    <Flex borderRight="1px solid #EA5959" justifyContent="center">
      <NavigatorItem
        filterState={filterState}
        sortByDate={sortByDate}
        isSorted={isSorted}
        filter={filter}
      />
    </Flex>
  );
}

export default TodoNavigator;
