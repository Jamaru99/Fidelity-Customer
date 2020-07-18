import { get, post, put, CUSTOMER_BASE_URL } from '@utils';

export const authenticateCustomer = (data) => post(`${CUSTOMER_BASE_URL}/login`, data);
export const registerCustomer = (data) => post(`${CUSTOMER_BASE_URL}/create`, data);
export const updateCustomer = (id, data) => put(`${CUSTOMER_BASE_URL}/update/${id}`, data);
export const isValidUsername = (username) => get(`${CUSTOMER_BASE_URL}/isvalid/${username}`);