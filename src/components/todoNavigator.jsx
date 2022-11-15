import React from "react";
import '../style/todoNavigator.css'
import NavigatorItem from "./navigatorItem";

function TodoNavigator() {
    return (
        <div className="todo__navigator">
            <NavigatorItem/>
        </div>
    )
}

export default TodoNavigator;