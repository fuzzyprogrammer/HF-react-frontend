
import axios from "axios";

const upload = (file, onUploadProgress) => {
  let formData = new FormData();
  formData.append("file", file);
  console.log(formData);
  return axios.post("api/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      // 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      "Access-Control-Allow-Origin": "*",
    },
    onUploadProgress,
  }).then((res) => {
    console.log('res:',res)
  }).catch((err) => {
    console.log('err:',err)
  });
};

const getFiles = () => {
  return axios.get("api/files");
};

export default {
  upload,
  getFiles,
};