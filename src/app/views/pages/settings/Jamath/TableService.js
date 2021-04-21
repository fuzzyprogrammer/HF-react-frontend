import axios from "axios";

export const getAllJamath = (id) => {
  if (id) {
    return axios.get(`/api/taluk-jamath/${id}`);
  }
};
export const getJamathById = (id) => {
  return axios.get(`/api/hfJamaths/${id}`); //, { data: id }
};
export const deleteJamath = (Jamath) => {
  let { id } = Jamath;
  return axios.delete(`/api/hfJamaths/${id}`, Jamath);
};
export const addNewJamath = (Jamath) => {
  return axios.post("/api/hfJamaths/", Jamath);
};
export const updateJamath = (Jamath) => {
  let { id } = Jamath;
  if (id) {
    return axios.put(`/api/hfJamaths/${id}`, Jamath);
  }
};
