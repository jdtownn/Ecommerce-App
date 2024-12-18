import axios from "axios";

const axioss = axios.create({
  baseURL: "http://localhost:5000",
});

export default axioss;
