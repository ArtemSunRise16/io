import React from "react";
import '../style/todoNavigator.css'
import NavigatorItem from "./navigatorItem";

function TodoNavigator( {filterState, sortByDate, isSorted} ) {
    return (
        <div className="todo__navigator">
        <NavigatorItem filterState={filterState} sortByDate={sortByDate} isSorted={isSorted}  />
        </div>
    )
}

export default TodoNavigator;