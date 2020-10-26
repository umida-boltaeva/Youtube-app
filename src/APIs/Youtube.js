import axios from "axios";
require("dotenv").config();

const KEY = process.env.YOUTUBE_API;

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 10,
    key: KEY,
  },
});
