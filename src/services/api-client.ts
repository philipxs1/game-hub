import axios from "axios";

const clientSecret = import.meta.env.VITE_SECRET_KEY as string;

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: clientSecret,
  },
});
