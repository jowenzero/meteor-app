import { GET_USER } from "../constants/action-types";
import { API, setAuthToken } from "../config/api";

export const getUser = () => {
  return {
    type: GET_USER,
    async payload() {
      try {
        const token = localStorage.getItem('userToken');
        setAuthToken(token);
        const user = await API.get("/auth-user/profile");
        return user.value;
      } catch (error) {
        console.log(error);
      }
    },
  };
};