import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

export const getTasks =  (response) =>  instance.get(`/tasks/${process.env.REACT_APP_USER_ID}`, {
        params: {
            filterBy: response.filter,
            order: response.sort,
            pp: response.todosPrePage,
            page: response.currentPage,
        }
    })

export const postCreateTodo = (newTodo) =>  instance.post(`/task/${process.env.REACT_APP_USER_ID}`, {
        name: newTodo.name,
        done: newTodo.done,
        createdAt: newTodo.createdAt,
        updatedAt: newTodo.updatedAt,
    })


export const deletTask = (id) => instance.delete(`/task/${process.env.REACT_APP_USER_ID}/${id}`)


export const patchCompleteTask = (todo) => 
 instance.patch(`/task/${process.env.REACT_APP_USER_ID}/${todo.uuid}`, {
        name: todo.name,
        done: !todo.done,
        createdAt: todo.createdAt,
        updatedAt: todo.updatedAt,
    })


export const patchSaveTask = (id, value, todo) => instance.patch(`/task/${process.env.REACT_APP_USER_ID}/${id}`, {
        name: value,
        done: todo.done,
        createdAt: todo.createdAt,
        updatedAt: todo.updatedAt,
    })
