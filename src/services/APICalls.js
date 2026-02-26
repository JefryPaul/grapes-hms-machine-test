import axios from "axios";

export const preLogin = (phone) => {
  return axios.post(`http://machinetest.grapesonline.net/api/Login/PreloginAuthentication?Phonenumber=${phone}`);
};

export const userLogin = (data) => {
  return axios.post(`http://machinetest.grapesonline.net/api/Login/UserLogin`, data);
};