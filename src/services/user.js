import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export const loginUser = async (username, password) => {
  return instance.post("/user/login", {
    username,
    password,
  });
};

export const registerUser = async (username, password) => {
  return instance.post("/user/register", {
    username,
    password,
  });
};

export const deletAccauntUser = async (id) => {
  return instance.delete(`/user/delete/${id}`);
};
