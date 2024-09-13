import axios from "axios";
import { isTokenValid } from "./utils";

export const axiosInstance =axios.create({
    baseURL:"http://localhost:3001/",
})




axiosInstance.interceptors.request.use((req)=>{
    const token = localStorage.getItem("token");
    const refreshToken = localStorage.getItem("refreshToken");

    if(!token || !refreshToken) return req;

    const isExpired = isTokenValid(token);

    if(!isExpired) {
        req.headers.Authorization = `"bearer" ${token}`;
        return req;
    }

    const { data } = await axios.post("http://localhost:3001/users/refresh",{
        refresh_token: refreshToken,
    });

    const newToken = data.token;

    localStorage.setItem("token", newToken);
    req.headers.Authorization = `"bearer" ${newToken}`;

    return req;
})