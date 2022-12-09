import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

const loginUser = async () => {
  return instance.post("/user/login", {
    username,
    password,
  });
};

const registerUser = async () => {
  return instance.post("/user/register", {
    username,
    password,
  });
};

const logout = async (id) => {
  return instance.post(`/user/delete/${id}`, {
    username,
    password,
  });
};
