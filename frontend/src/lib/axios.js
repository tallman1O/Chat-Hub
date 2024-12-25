import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://chathub-backend.vercel.app/api",
    withCredentials: true,
    
});
