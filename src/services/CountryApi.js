import axios from "axios";

const http = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    "Content-type": "application/json"
  }
});

class CountryApi {
  getAll() {
    return http.get("/all");
  }

  getRegion(code) {
    return http.get(`/region/${code}`);
  }

  getByNameWildcard(name) {
    return http.get(`/name/${name}?fullText=false`);
  }

  get(code) {
    return http.get(`/alpha/${code}`);
  }

  getBorder(codes) {
    return http.get(`/alpha?codes=${codes.join(",")}`);
  } 
}

export default new CountryApi();
