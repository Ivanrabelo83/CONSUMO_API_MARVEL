import axios from "axios";

const request = axios.create({
  baseURL: "https://gateway.marvel.com/v1/public",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
});

export default request;
