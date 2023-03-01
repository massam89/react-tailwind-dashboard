import { ajax } from "../../utils/ajax"

export const getCustomersData = (body) => ajax('tokenJson', 'auth/customer-data', 'GET', false, body)
export const getCurrencyData = (body) => ajax('tokenJson', 'auth/currency-data/20', 'GET', false, body)