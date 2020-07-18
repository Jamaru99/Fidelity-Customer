import { createReducer } from "./lib";
import {
  SET_LOADING,
  AUTHENTICATE_SUCCESS,
  AUTHENTICATE_FAILED,
  SET_IS_VALID_USERNAME_SUCCESS,
  SET_IS_VALID_USERNAME_FAILED,
  GET_CARD_LIST_SUCCESS,
  GET_CARD_LIST_FAILED
} from "./action";

const initialState = {
  loading: false,
  isValidUsername: true,
  customerData: {},
  cards: [],
};

const stateMachine = {
  [SET_LOADING]: payload => ({ loading: payload }),
  [AUTHENTICATE_SUCCESS]: payload => ({ customerData: payload }),
  [AUTHENTICATE_FAILED]: payload => ({ customerData: { error: payload } }),
  [SET_IS_VALID_USERNAME_SUCCESS]: payload => ({ isValidUsername: payload }),
  [SET_IS_VALID_USERNAME_FAILED]: () => ({ isValidUsername: false }),
  [GET_CARD_LIST_SUCCESS]: payload => ({ cards: payload }),
  [GET_CARD_LIST_FAILED]: () => ({ cards: [] })
};

export default createReducer(initialState, stateMachine);
