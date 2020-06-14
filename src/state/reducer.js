import { createReducer } from "./lib";
import {
  SET_LOADING,
  AUTHENTICATE_SUCCESS,
  AUTHENTICATE_FAILED
} from "./action";

const initialState = {
  loading: false,
  companyData: {},
};

const stateMachine = {
  [SET_LOADING]: payload => ({ loading: payload }),
  [AUTHENTICATE_SUCCESS]: payload => ({ companyData: payload }),
  [AUTHENTICATE_FAILED]: payload => ({ companyData: { error: payload } }),
};

export default createReducer(initialState, stateMachine);
