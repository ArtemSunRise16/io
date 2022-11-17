import React, { useContext } from "react";
import '../style/todoContent.css'
import { Context } from "./context";

function Pagination({ todosPrePage, totalTodo, todoPagination }) {
    const { nextPage, pastPage } = useContext(Context)
    const pageNumber = []

    for (let i = 1; i <= Math.ceil(totalTodo / todosPrePage); i++) {
        pageNumber.push(i)
    }


    return (
        <div className="todo__pagination">
            <button onClick={() => pastPage()}>{'<<'}</button>
            {pageNumber.map(page => (
                <button onClick={() => todoPagination(page)} key={page}>{page}</button>
            ))}
            <button onClick={() => nextPage()}>{'>>'}</button>
        </div>
    )
}

export default Pagination;