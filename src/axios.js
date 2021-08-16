import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-v2-e3212.cloudfunctions.net/api", // THE API (cloud functions) URL
});

export default instance;
