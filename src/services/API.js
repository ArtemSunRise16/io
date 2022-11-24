import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

export const getTasks = (filter, paramsSort, todosPrePage, currentPage) => {
    return instance.get(`/tasks/${process.env.REACT_APP_USER_ID}`, {
        params: {
            filterBy: filter,
            order: paramsSort,
            pp: todosPrePage,
            page: currentPage,
        }
    }).then(res => {
        return res.data
    })
}

export const postCreateTodo = (newTodo) => {
    return instance.post(`/task/${process.env.REACT_APP_USER_ID}`, {
        name: newTodo.name,
        done: newTodo.done,
        createdAt: newTodo.createdAt,
        updatedAt: newTodo.updatedAt,
    })
}

export const deletTask = (id) => {
    return instance.delete(`/task/${process.env.REACT_APP_USER_ID}/${id}`)
}

export const patchCompleteTask = (todo) => {
    return instance.patch(`/task/${process.env.REACT_APP_USER_ID}/${todo.uuid}`, {
        name: todo.name,
        done: !todo.done,
        createdAt: todo.createdAt,
        updatedAt: todo.updatedAt,
    })
}

export const patchSaveTask = (id, value, todo) => {
    return instance.patch(`/task/${process.env.REACT_APP_USER_ID}/${id}`, {
        name: value,
        done: todo.done,
        createdAt: todo.createdAt,
        updatedAt: todo.updatedAt,
    })
}