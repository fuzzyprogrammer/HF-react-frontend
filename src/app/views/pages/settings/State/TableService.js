import axios from "axios";

export const getAllState = () => {
  return axios.get("/api/state");
};
export const getStateById = id => {
  return axios.get(`/api/state/${id}`); //, { data: id }
};
export const deleteState = State => {
  let {id} = State;
  return axios.delete(`/api/state/${id}`, State);
};
export const addNewState = State => {
  return axios.post("/api/state/", State);
};
export const updateState = State => {
  let {id} = State;
  return axios.put(`/api/state/${id}`, State);
};
