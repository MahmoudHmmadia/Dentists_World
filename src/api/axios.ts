import axios from "axios";
const SERVER_URL = "https://dentist-world-api.onrender.com";
const myAxios = axios.create({
  baseURL: SERVER_URL,
});
export default myAxios;
