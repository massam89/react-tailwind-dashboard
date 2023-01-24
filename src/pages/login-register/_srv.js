import { ajax } from "../../utils/ajax";

export const registerUser = (body) => ajax('tokenJson', 'register', 'POST', true, body)
export const checkUniqueUser = (body) => ajax('tokenJson', 'user/IsUserNameInUse', 'POST', true, body)