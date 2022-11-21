import React from "react";
import '../style/navigatorItem.css'

function NavigatorItem({ filterState, sortByDate, isSorted, active }) {

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
            <button className={active === 'all' && 'active'} onClick={onClickHandlerAll}>All</button>
            <button className={active === true && 'active'} onClick={onClickHandlerDone}>Done</button>
            <button className={active === false && 'active'} onClick={onClickHandlerUnDone}>Undone</button>
            <button className={active === 'sort' && 'active'} onClick={OnClickHandlerDate}>Sort</button>
        </div>
    )
}

export default NavigatorItem