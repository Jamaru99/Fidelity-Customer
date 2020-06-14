import { createAction } from "./lib";

export const [SET_LOADING, setLoading] = createAction(
  `SET_LOADING`
);

export const [REGISTER_CUSTOMER, registerCustomer] = createAction(
  `REGISTER_CUSTOMER`
);

export const [AUTHENTICATE_CUSTOMER, authenticateCustomer] = createAction(
  `AUTHENTICATE_CUSTOMER`
);

export const [AUTHENTICATE_SUCCESS, authenticateCustomerSuccess] = createAction(
  `AUTHENTICATE_SUCCESS`
);

export const [AUTHENTICATE_FAILED, authenticateCustomerFailed] = createAction(
  `AUTHENTICATE_FAILED`
);