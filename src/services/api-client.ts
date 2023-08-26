import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "a8f439ed73c74edcbb797183988ab557",
  },
});
