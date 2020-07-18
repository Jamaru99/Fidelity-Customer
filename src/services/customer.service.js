import { get, post, CUSTOMER_BASE_URL } from '@utils';

export const authenticateCustomer = (data) => post(`${CUSTOMER_BASE_URL}/login`, data);
export const registerCustomer = (data) => post(`${CUSTOMER_BASE_URL}/create`, data);
export const isValidUsername = (username) => get(`${CUSTOMER_BASE_URL}/isvalid/${username}`);