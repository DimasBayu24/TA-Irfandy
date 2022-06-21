import axios from "axios";

const API_URL = "http://localhost:8080/";

const getPublicContent = () => {
  return axios.get(API_URL + "products", { withCredentials: true });
};

const getProducts = () => {
  return axios.get(API_URL + "products", { withCredentials: true });
};
const getProductByDay = (hari) => {
  return axios.get(API_URL + `product_by_day?day=${hari}`, {
    withCredentials: true,
  });
};

const getOrder = () => {
  return axios.get(API_URL + "products", { withCredentials: true });
};

const getAllOrderById = (id) => {
  return axios.get(API_URL + `orders_by_id?user_id=${id}`, {
    withCredentials: true,
  });
};

const orderFood = (id, price, quantity) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const user_id = user.ID;
  return axios.post(
    API_URL + "order_food",
    { id, quantity, user_id, price },
    { withCredentials: true }
  );
};

const getAvailableById = (id) => {
  return axios.get(API_URL + `available_product?product_id=${id}`, {
    withCredentials: true,
  });
};

const getUserBoard = () => {
  return axios.get(API_URL + "user");
};

const getModeratorBoard = () => {
  return axios.get(API_URL + "mod");
};

const getAdminBoard = () => {
  return axios.get(API_URL + "admin");
};

const UserService = {
  getProducts,
  getAllOrderById,
  getProductByDay,
  getOrder,
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
  getAvailableById,
  orderFood,
};

export default UserService;
