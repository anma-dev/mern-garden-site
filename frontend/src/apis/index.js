import axios, { AxiosHeaders } from "axios";

const API = axios.create({
  // baseURL: process.env.REACT_APP_SERVER_URL,
  baseURL: "http://localhost:5000",
});

API.interceptors.request.use((config) => {
  try {
    let token = null;
    token = localStorage.getItem("token");

    if (token) {
      const mHeaders = AxiosHeaders.from({
        Authorization: `${token}`,
      });

      if (mHeaders) {
        config.headers = mHeaders;
      }
    }
  } catch (error) {
    console.log(error)
  }

  return config;
});

API.interceptors.response.use(
  (response) => {
    return response.data;
  },
  async (error) => {
    try {
      if (error.response.status === 401 && error.response.data.auth === true) {
        window.location.href = "/";
      } else {
        return Promise.reject(error);
      }
    } catch (e) {
      console.log(error);
    }
  }
);

// Auth
const UserLogin = (data) => API.post("/api/v1/auth/user-login", data);
const UserRegister = (data) => API.post("/api/v1/auth/user-register", data);
const GetCurrentUser = () => API.get("/api/v1/auth/current-user");

export const apis = {
  // Auth
  UserLogin,
  UserRegister,
  GetCurrentUser,
};
