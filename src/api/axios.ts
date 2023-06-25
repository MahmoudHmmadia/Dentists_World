import axios from "axios";
const SERVER_URL = "http://localhost:3003/";
const myAxios = axios.create({
  baseURL: SERVER_URL,
});
export default myAxios;
