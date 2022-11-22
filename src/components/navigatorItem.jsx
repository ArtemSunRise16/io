import React from "react";
import '../style/navigatorItem.css'
// function NavigatorItem({ filterState, sortByDate, isSorted, active })
function NavigatorItem({filterState, sortByDate, isSorted, active, setActive}) {

    function onClickHandlerDone() {
        filterState('done')
    }

    function onClickHandlerUnDone() {
        filterState('undone')
    }

    function onClickHandlerAll() {
        filterState('')
    }

    function OnClickHandlerDate() {
        sortByDate(!isSorted)
    }

    return (
        <div className='todo__navigator__items' >
            <button className={active === '' ? 'active' : undefined} onClick={onClickHandlerAll}>All</button>
            <button className={active === 'done' ? 'active' : undefined} onClick={onClickHandlerDone}>Done</button>
            <button className={active === 'undone' ? 'active' : undefined} onClick={onClickHandlerUnDone}>Undone</button>
            <button className={active === 'sort' ? 'active' : undefined} onClick={OnClickHandlerDate}>Sort</button>
        </div>
    )
}

export default NavigatorItem


