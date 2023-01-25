import { ajax } from "../../utils/ajax";

export const checkUniqueUser = (body) => ajax('tokenJson', 'User/IsUserNameInUse', 'POST', true, body)