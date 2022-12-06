import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export const getTasks = (response) =>
  instance.get(`/api/tasks`, {
    params: {
      filterBy: response.filter,
      order: response.sort,
      pp: response.todosPrePage,
      page: response.currentPage,
    },
  });

export const postCreateTodo = (newTodo) =>
  instance.post(`/api/task`, {
    name: newTodo.name,
    done: newTodo.done,
    createdAt: newTodo.createdAt,
  });

export const deletTask = (id) => instance.delete(`/api/task/${id}`);

export const patchCompleteTask = (todo) =>
  instance.patch(`/api/task/${todo.uuid}`, {
    name: todo.name,
    done: !todo.done,
    createdAt: todo.createdAt,
  });

export const patchSaveTask = (id, value, todo) =>
  instance.patch(`/api/task/${id}`, {
    name: value,
    done: todo.done,
    createdAt: todo.createdAt,
  });
