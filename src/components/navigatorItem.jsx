import React from "react";
import '../style/navigatorItem.css'

function NavigatorItem({filterState, sortByDate}) {

function onClickHandlerDone() {
    filterState(true)
}

function onClickHandlerUnDone() {
    filterState(false)
}

function onClickHandlerAll() {
    filterState('all')
}

function OnClickHandlerDateUp() {
    sortByDate('up')
}

function OnClickHandlerDateDown() {
    sortByDate('down')
}



    return (
        <div className="todo__navigator__items">
            <button onClick={onClickHandlerAll}>All</button>
            <button onClick={onClickHandlerDone}>Done</button>
            <button onClick={onClickHandlerUnDone}>Undone</button>
            <button onClick={OnClickHandlerDateUp}>Sort By Date Up</button>
            <button onClick={OnClickHandlerDateDown}>Sort By Date Down</button>
        </div>
    )
}

export default NavigatorItem