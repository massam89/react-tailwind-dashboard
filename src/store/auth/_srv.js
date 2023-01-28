import { ajax } from "../../utils/ajax";

export const registerUser = (body) => ajax('tokenJson', 'User/CreateNewUser', 'POST', true, body)
export const loginUser = (body) => ajax('tokenJson', 'Authentication/Login', 'POST', true, body)
export const logoutRequest = (body) => ajax('tokenJson','Authentication/RevokeToken','POST',true, body)