import React from "react";
import '../style/todoNavigator.css'
import NavigatorItem from "./navigatorItem";
// function TodoNavigator( {filterState, sortByDate, isSorted, active, setActive} )
function TodoNavigator( {filterState, sortByDate, isSorted, active, setActive}  ) {
    return (
        <div className="todo__navigator">
        <NavigatorItem active={active} setActive={setActive} filterState={filterState} sortByDate={sortByDate} isSorted={isSorted}/>
        </div>
    )
}

export default TodoNavigator;

        // filterState={filterState} 
        // sortByDate={sortByDate} 
        // isSorted={isSorted} 
        // active={active}
        // setActive={setActive}