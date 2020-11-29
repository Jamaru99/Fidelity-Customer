import { createAction } from "./lib";

export const [SET_LOADING, setLoading] = createAction(`SET_LOADING`);

// Customer
export const [REGISTER_CUSTOMER, registerCustomer] = createAction(`REGISTER_CUSTOMER`);
export const [UPDATE_CUSTOMER, updateCustomer] = createAction(`UPDATE_CUSTOMER`);
export const [AUTHENTICATE_CUSTOMER, authenticateCustomer] = createAction(`AUTHENTICATE_CUSTOMER`);
export const [GET_SESSION, getSession] = createAction(`GET_SESSION`);
export const [SET_CHECKED_SESSION, setCheckedSession] = createAction(`SET_CHECKED_SESSION`);
export const [DO_LOGOUT, doLogout] = createAction(`DO_LOGOUT`);

export const [SET_CUSTOMER_DATA_SUCCESS, setCustomerDataSuccess] = createAction(`SET_CUSTOMER_DATA_SUCCESS`);
export const [SET_CUSTOMER_DATA_FAILED, setCustomerDataFailed] = createAction(`SET_CUSTOMER_DATA_FAILED`);

export const [SET_IS_VALID_USERNAME, setIsValidUsername] = createAction(`SET_IS_VALID_USERNAME`);
export const [SET_IS_VALID_USERNAME_SUCCESS, setIsValidUsernameSuccess] = createAction(`SET_IS_VALID_USERNAME_SUCCESS`);
export const [SET_IS_VALID_USERNAME_FAILED, setIsValidUsernameFailed] = createAction(`SET_IS_VALID_USERNAME_FAILED`);

// Card
export const [GET_CARD_LIST, getCardList] = createAction(`GET_CARD_LIST`);
export const [GET_CARD_LIST_SUCCESS, getCardListSuccess] = createAction(`GET_CARD_LIST_SUCCESS`);
export const [GET_CARD_LIST_FAILED, getCardListFailed] = createAction(`GET_CARD_LIST_FAILED`);

export const [INCREMENT_CARD, incrementCard] = createAction(`INCREMENT_CARD`);