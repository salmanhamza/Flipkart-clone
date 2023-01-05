import axios from "axios";

const URL = "http://localhost:8000";

export const createSignup = async (data) => {
  console.log("data: ", data);
  try {
    return await axios.post(`${URL}/signup`, data);
  } catch (error) {
    console.log("error while calling signup api", error);
  }
};
export const createLogin = async (data) => {
  console.log("data: ", data);
  try {
    return await axios.post(`${URL}/login`, data);
  } catch (error) {
    console.log("error while calling login api", error);
    return error.response;
  }
};
