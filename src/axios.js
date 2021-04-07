import axios from "axios";


axios.defaults.baseURL = "http://phplaravel-310793-951903.cloudwaysapps.com"; //deployment
// axios.defaults.baseURL = 'http://127.0.0.1:8000';  // For local development
// axios.defaults.headers.post['Content-Type'] = "application/json"

const axiosInstance = axios.create();

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || "Something went wrong!"
    )
);

const accessToken = window.localStorage.getItem("accessToken");
if(accessToken){
  axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
}

export default axiosInstance;
  
