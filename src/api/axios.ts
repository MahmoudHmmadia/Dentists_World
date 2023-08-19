import axios from "axios";
const SERVER_URL = "https://dentist-world-api.onrender.com";
const local = "http://localhost:3500";
const myAxios = axios.create({
  baseURL: SERVER_URL,
});
export default myAxios;
