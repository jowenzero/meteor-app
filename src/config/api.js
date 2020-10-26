import axios from "axios";

// set config defaults while creating instance
export const API = axios.create({
    baseURL: "https://dev.svcgateway.meteor.asia",
});

// alter config after instance is set
export const setAuthToken = (token) => {
    API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

