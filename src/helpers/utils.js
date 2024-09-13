import {jwtDecode} from "jwt-decode"


export const isUserAdmin = (user) => {
    if (!user) return false;
    
    return user.role.includes("admin");
}


export const isTokenValid = (token) => {
    const expirationData = jwtDecode(token)?.exp;

    const isExpired = expirationData *1000 < new Date().getTime();

    return isExpired;
}