import { ajax } from "../../utils/ajax"

export const getCustomersData = (body) => ajax('tokenJson', 'auth/customer-data', 'GET', false, body)