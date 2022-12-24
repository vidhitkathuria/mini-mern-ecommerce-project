import axios from "axios";

const instance = axios.create({
  baseURL: "www.google.com/",
  headers: {
    "Content-Type": "application/json",
    "Acess-Control-Allow-Origin": "*",
    Authorization: `Bearer ${token}`,
    Accept: "application/json",
  },
});

export default instance;
