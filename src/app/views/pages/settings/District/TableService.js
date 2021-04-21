import axios from "axios";

export const getAllDistrict = id => {
  return axios.get(`/api/state-district/${id}`);
};
export const getDistrictById = id => {
  return axios.get(`/api/district/${id}`); //, { data: id }
};
export const deleteDistrict = District => {
  let {id} = District;
  return axios.delete(`/api/district/${id}`, District);
};
export const addNewDistrict = District => {
  return axios.post("/api/district/", District);
};
export const updateDistrict = District => {
  let {id} = District;
  return axios.put(`/api/district/${id}`, District);
};
