import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

// instance.interceptors.request.use((config) => {
//   config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
//   return config;
// });

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

// export const logout = async (id) => {
//   return instance.post(`/user/delete/${id}`, {
//     username,
//     password,
//   });
// };
