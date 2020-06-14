import { createReducer } from "./lib";
import {
  SET_LOADING,
  AUTHENTICATE_SUCCESS,
  AUTHENTICATE_FAILED
} from "./action";

const initialState = {
  loading: false,
  customerData: {},
};

const stateMachine = {
  [SET_LOADING]: payload => ({ loading: payload }),
  [AUTHENTICATE_SUCCESS]: payload => ({ customerData: payload }),
  [AUTHENTICATE_FAILED]: payload => ({ customerData: { error: payload } }),
};

export default createReducer(initialState, stateMachine);
