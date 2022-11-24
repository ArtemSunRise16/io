import React, { useContext } from "react";
import '../style/todoContent.css'
import { Context } from "./context";

function Pagination({ todosPrePage, totalTodo, todoPagination }) {


    const { nextPage, pastPage, pageActive, currentPage } = useContext(Context)

    const pageNumber = []

    for (let i = 1; i <= Math.ceil(totalTodo / todosPrePage); i++) {
        pageNumber.push(i)
    }


    return (
        <div className="todo__pagination">
            {currentPage >= 2 && <button className="todo__pagination__button" onClick={() => pastPage()}>{'<<'}</button>}
            {currentPage >= 3 && <button className="todo__pagination__button" onClick={() => pastPage()}>{'...'}</button>}
            {pageNumber.length === 1 ? null : pageNumber.map(page => {
                if (page === currentPage || page === currentPage + 1 || page === currentPage - 1 ) {

                    return <button className={`todo__pagination__button ${pageActive === page && 'pageActive'}`} onClick={() => todoPagination(page)} key={page}>{page}</button>

                }
                return null
            })}
            {currentPage < Math.ceil(totalTodo / todosPrePage) - 1 && <button className="todo__pagination__button" onClick={() => nextPage()}>{'...'}</button>}
            {currentPage < pageNumber.length && <button className="todo__pagination__button" onClick={() => nextPage()}>{'>>'}</button>}
        </div>
    )
}

export default Pagination;