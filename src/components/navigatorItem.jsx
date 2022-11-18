import React from "react";
import '../style/navigatorItem.css'

function NavigatorItem({ filterState, sortByDate, isSorted }) {


    function onClickHandlerDone() {
        filterState(true)
    }

    function onClickHandlerUnDone() {
        filterState(false)
    }

    function onClickHandlerAll() {
        filterState('all')
    }

    function OnClickHandlerDate() {
        sortByDate(!isSorted)
    }

    return (
        <div className = 'todo__navigator__items' >
            <button onClick={onClickHandlerAll}>All</button>
            <button onClick={onClickHandlerDone}>Done</button>
            <button onClick={onClickHandlerUnDone}>Undone</button>
            <button onClick={OnClickHandlerDate}>Sort</button>
        </div>
    )
}

export default NavigatorItem