import React from "react";
import '../style/navigatorItem.css'
import { AiOutlineArrowDown } from "react-icons/ai";
import { AiOutlineArrowUp } from "react-icons/ai";


function NavigatorItem({ activeSorted, filterState, sortByDate, isSorted, active }) {

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
        sortByDate(!isSorted, !activeSorted)
    }

    return (
        <div className='todo__navigator__items' >
            <button className={active === '' ? 'active' : undefined} onClick={onClickHandlerAll}>All</button>
            <button className={active === 'done' ? 'active' : undefined} onClick={onClickHandlerDone}>Done</button>
            <button className={active === 'undone' ? 'active' : undefined} onClick={onClickHandlerUnDone}>Undone</button>
            <button className={active === 'sort' ? 'active' : undefined} onClick={OnClickHandlerDate}>Sort</button>
            <span><button className={active === 'sort' && 'active'} onClick={OnClickHandlerDate}>Sort</button> <span className={activeSorted === true && 'active'}><AiOutlineArrowDown></AiOutlineArrowDown></span> <span className={activeSorted === false && 'active'}><AiOutlineArrowUp></AiOutlineArrowUp></span> </span>
        </div>
    )
}

export default NavigatorItem


