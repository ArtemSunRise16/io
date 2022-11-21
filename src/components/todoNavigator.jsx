import React from "react";
import '../style/todoNavigator.css'
import NavigatorItem from "./navigatorItem";

function TodoNavigator( {filterState, sortByDate, isSorted, active, setActive} ) {
    return (
        <div className="todo__navigator">
        <NavigatorItem 
        filterState={filterState} 
        sortByDate={sortByDate} 
        isSorted={isSorted} 
        active={active}
        setActive={setActive} />
        </div>
    )
}

export default TodoNavigator;