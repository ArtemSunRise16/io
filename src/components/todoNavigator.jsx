import React from "react";
import '../style/todoNavigator.css'
import NavigatorItem from "./navigatorItem";

function TodoNavigator( {filterState, sortByDate} ) {
    return (
        <div className="todo__navigator">
        <NavigatorItem filterState={filterState} sortByDate={sortByDate}  />
        </div>
    )
}

export default TodoNavigator;