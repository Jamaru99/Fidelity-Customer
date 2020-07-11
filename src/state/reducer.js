import { createReducer } from "./lib";
import {
  SET_LOADING,
  AUTHENTICATE_SUCCESS,
  AUTHENTICATE_FAILED,
  GET_CARD_LIST_SUCCESS,
  GET_CARD_LIST_FAILED
} from "./action";

const initialState = {
  loading: false,
  customerData: {},
  cards: [],
};

const stateMachine = {
  [SET_LOADING]: payload => ({ loading: payload }),
  [AUTHENTICATE_SUCCESS]: payload => ({ customerData: payload }),
  [AUTHENTICATE_FAILED]: payload => ({ customerData: { error: payload } }),
  [GET_CARD_LIST_SUCCESS]: payload => ({ cards: payload }),
  [GET_CARD_LIST_FAILED]: () => ({ cards: [] })
};

export default createReducer(initialState, stateMachine);
