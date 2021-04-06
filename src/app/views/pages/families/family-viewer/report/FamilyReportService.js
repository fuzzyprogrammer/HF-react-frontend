import axios from 'axios';

export const getFamilyData = (id) => {
  let res = axios.get(`api/family-reports/${id}`);
  return res;
}