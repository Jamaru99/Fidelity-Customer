import { createReducer } from "./lib";
import {
  SET_LOADING,
  SET_CAN_READ_QR,
  AUTHENTICATE_SUCCESS,
  AUTHENTICATE_FAILED,
  GET_CARD_LIST_SUCCESS,
  GET_CARD_LIST_FAILED
} from "./action";

const initialState = {
  loading: false,
  canReadQR: true,
  customerData: {},
  cards: [],
};

const stateMachine = {
  [SET_LOADING]: payload => ({ loading: payload }),
  [SET_CAN_READ_QR]: payload => ({ canReadQR: payload }),
  [AUTHENTICATE_SUCCESS]: payload => ({ customerData: payload }),
  [AUTHENTICATE_FAILED]: payload => ({ customerData: { error: payload } }),
  [GET_CARD_LIST_SUCCESS]: payload => ({ cards: payload }),
  [GET_CARD_LIST_FAILED]: () => ({ cards: [] })
};

export default createReducer(initialState, stateMachine);
