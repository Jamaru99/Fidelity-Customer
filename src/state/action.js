import { createAction } from "./lib";

export const [SET_LOADING, setLoading] = createAction(
  `SET_LOADING`
);

export const [SET_CAN_READ_QR, setCanReadQR] = createAction(
  `SET_CAN_READ_QR`
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

export const [GET_CARD_LIST, getCardList] = createAction(
  `GET_CARD_LIST`
);

export const [GET_CARD_LIST_SUCCESS, getCardListSuccess] = createAction(
  `GET_CARD_LIST_SUCCESS`
);

export const [GET_CARD_LIST_FAILED, getCardListFailed] = createAction(
  `GET_CARD_LIST_FAILED`
);

export const [INCREMENT_CARD, incrementCard] = createAction(
  `INCREMENT_CARD`
)