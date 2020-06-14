import axios from 'axios';

export const BASE_URL = "http://192.168.100.10:3000"
export const COMPANY_BASE_URL = `${BASE_URL}/company`
export const CUSTOMER_BASE_URL = `${BASE_URL}/customer`
export const get = axios.get
export const post = axios.post
