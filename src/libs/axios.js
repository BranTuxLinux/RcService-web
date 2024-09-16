import axios from "axios";
const render = "https://rcservice-back.onrender.com/api";
const localhost = "http://localhost:3000/api";
const baseURL = import.meta.env.BACKEND_URL === "Production" ? render : localhost;
console.log(baseURL)
const instance = axios.create({
  baseURL,
  withCredentials: true,
});
export default instance;
