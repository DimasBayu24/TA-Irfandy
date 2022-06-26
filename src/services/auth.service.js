import axios from "axios";

const API_URL = "http://localhost:8080/";

const register = (username, password, phone, fullname) => {
  const role = "user";
  return axios.post(API_URL + "register", {
    username,
    fullname,
    password,
    phone,
    role,
  });
};

const login = (username, password) => {
  return axios
    .post(
      API_URL + "login",
      {
        username,
        password,
      },
      { withCredentials: true }
    )
    .then((response) => {
      if (response.data) {
        axios
          .get(API_URL + "self/" + username, { withCredentials: true })
          .then((response) => {
            console.log("tes data", response.data);
            localStorage.setItem("user", JSON.stringify(response.data));
          });
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
  return axios.post(API_URL + "signout").then((response) => {
    return response.data;
  });
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default AuthService;
