import { get, post, COMPANY_BASE_URL } from '@utils';

export const authenticateCompany = (data) => post(`${COMPANY_BASE_URL}/login`, data);
export const registerComapny = (data) => post(`${COMPANY_BASE_URL}/create`, data);