import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/e-clone-ceb8c/us-central1/api", // the api(cloud function) URL
});

export default instance;
