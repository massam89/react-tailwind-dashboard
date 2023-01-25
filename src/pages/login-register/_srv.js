import { ajax } from "../../utils/ajax";

export const registerUser = (body) => ajax('tokenJson', 'User/CreateNewUser', 'POST', true, body)
export const checkUniqueUser = (body) => ajax('tokenJson', 'User/IsUserNameInUse', 'POST', true, body)