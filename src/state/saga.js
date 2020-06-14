import { call, put, select, takeLatest } from "@redux-saga/core/effects";
import {
  AUTHENTICATE_CUSTOMER,
  authenticateCustomerSuccess,
  authenticateCustomerFailed,
  setLoading,
  REGISTER_CUSTOMER
} from "./action";

import { 
  authenticateCustomer as authenticateCustomerService,
  registerCustomer as registerCustomerService
} from "@services";

import { texts } from '@utils';

function* authenticateCustomer(action){
  try {
    const { data } = yield call(authenticateCustomerService, action.payload);
    yield put(authenticateCustomerSuccess(data));
    action.payload.navigation.navigate("BottomTabNavigator");
  } catch(err) {
    if(err.message.includes("401"))
      yield put(authenticateCustomerFailed(texts.login["error:incorrect_password"]));
    else if(err.message.includes("404"))
      yield put(authenticateCustomerFailed(texts.login["error:user_not_found"]));
    else
      yield put(authenticateCustomerFailed(texts.generic_error));
  }
}

function* registerCustomer(action){
  try {
    const { data } = yield call(registerCustomerService, action.payload.form);
    yield put(authenticateCustomerSuccess(data));
    action.payload.navigation.navigate("BottomTabNavigator");
  } catch(err) {
    yield put(authenticateCustomerFailed(texts.generic_error));
  }
}

// SAGA
export default function* saga() {
  yield takeLatest(AUTHENTICATE_CUSTOMER, authenticateCustomer);
  yield takeLatest(REGISTER_CUSTOMER, registerCustomer);
}
