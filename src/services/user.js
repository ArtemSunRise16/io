import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

const loginUser = () => {
  instance.post("/user/login", {
    username: username,
    password: password,
  });
};
