import { ajax } from "../../utils/ajax";

export const registerUser = (body) => ajax('tokenJson', 'auth/register', 'POST', true, body)
export const loginUser    = (body) => ajax('tokenJson', 'auth/login', 'POST', true, body)
export const revokeToken  = (body) => ajax('tokenJson', 'auth/logout', 'POST', false, body)
export const refreshToken = (body) => ajax('tokenJson', 'auth/refresh', 'POST', false, body)