import { ajax } from "../../utils/ajax";

export const checkUniqueUser = (body) => ajax('tokenJson', 'auth/check-username', 'POST', true, body)