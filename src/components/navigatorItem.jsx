import React from "react";
import '../style/navigatorItem.css'

function NavigatorItem() {

    return (
        <div className="todo__navigator__items">
            <button>All</button>
            <button>Done</button>
            <button>Undone</button>
            <button>Sort By Date</button>
        </div>
    )
}

export default NavigatorItem