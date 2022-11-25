import React from "react";
import '../style/navigatorItem.css'
import { AiOutlineArrowDown } from "react-icons/ai";
import { AiOutlineArrowUp } from "react-icons/ai";


function NavigatorItem({ filterState, sortByDate, isSorted, filter }) {

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
            <button className={filter === '' ? 'active' : undefined} onClick={onClickHandlerAll}>All</button>
            <button className={filter === 'done' ? 'active' : undefined} onClick={onClickHandlerDone}>Done</button>
            <button className={filter === 'undone' ? 'active' : undefined} onClick={onClickHandlerUnDone}>Undone</button>
            <span><button onClick={OnClickHandlerDate}>Sort</button> <span className={isSorted === true ? 'active' : undefined}><AiOutlineArrowDown></AiOutlineArrowDown></span> <span className={isSorted === false ? 'active' : undefined}><AiOutlineArrowUp></AiOutlineArrowUp></span> </span>
        </div>
    )
}

export default NavigatorItem


