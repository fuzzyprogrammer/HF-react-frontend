import axios from "axios";

export const getAllTaluk = id => {
  return axios.get(`/api/taluk-jamath/${id}`);
};
export const getTalukById = id => {
  return axios.get(`/api/taluk/${id}`); //, { data: id }
};
export const deleteTaluk = Taluk => {
  let {id} = Taluk;
  return axios.delete(`/api/taluk/${id}`, Taluk);
};
export const addNewTaluk = Taluk => {
  return axios.post("/api/taluk/", Taluk);
};
export const updateTaluk = Taluk => {
  let {id} = Taluk;
  return axios.put(`/api/taluk/${id}`, Taluk);
};
