import React from "react";
import '../style/navigatorItem.css'
import { AiOutlineArrowDown } from "react-icons/ai";
import { AiOutlineArrowUp } from "react-icons/ai";


function NavigatorItem({ activeSorted, filterState, sortByDate, isSorted, active }) {

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
        sortByDate(!isSorted, !activeSorted)
    }

    return (
        <div className = 'todo__navigator__items' >
            <button className={active === 'all' && 'active'} onClick={onClickHandlerAll}>All</button>
            <button className={active === true && 'active'} onClick={onClickHandlerDone}>Done</button>
            <button className={active === false && 'active'} onClick={onClickHandlerUnDone}>Undone</button>
            <span><button className={active === 'sort' && 'active'} onClick={OnClickHandlerDate}>Sort</button> <span className={activeSorted === true && 'active'}><AiOutlineArrowDown></AiOutlineArrowDown></span> <span className={activeSorted === false && 'active'}><AiOutlineArrowUp></AiOutlineArrowUp></span> </span>
            

        </div>
    )
}

export default NavigatorItem