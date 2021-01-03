import axios from "axios";

export default axios.create({
  baseURL: "http://proovitoo.twn.ee/api/",
  headers: {
    "Content-type": "application/json"
  }
});