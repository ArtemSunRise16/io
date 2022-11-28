import React from "react";
import "../style/todoNavigator.css";
import NavigatorItem from "./navigatorItem";
// function TodoNavigator( {filterState, sortByDate, isSorted, active, setActive} )
function TodoNavigator({ filterState, sortByDate, isSorted, filter }) {
  return (
    <div className="todo__navigator">
      <NavigatorItem
        filterState={filterState}
        sortByDate={sortByDate}
        isSorted={isSorted}
        filter={filter}
      />
    </div>
  );
}

export default TodoNavigator;

// filterState={filterState}
// sortByDate={sortByDate}
// isSorted={isSorted}
// active={active}
// setActive={setActive}
