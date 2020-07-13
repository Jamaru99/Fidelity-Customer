import { call, put, select, takeLatest } from "@redux-saga/core/effects";
import {
  AUTHENTICATE_CUSTOMER,
  authenticateCustomerSuccess,
  authenticateCustomerFailed,
  GET_CARD_LIST,
  getCardListSuccess,
  getCardListFailed,
  INCREMENT_CARD,
  setLoading,
  REGISTER_CUSTOMER
} from "./action";

import { 
  authenticateCustomer as authenticateCustomerService,
  registerCustomer as registerCustomerService,
  getCardList as getCardListService,
  incrementCard as incrementCardService,
  createCard as createCardService
} from "@services";

import { texts } from '@utils';

import { BOTTOM_TAB_NAVIGATOR, CARD_DETAIL_SCREEN } from '@navigation';

function* authenticateCustomer(action) {
  try {
    const { data } = yield call(authenticateCustomerService, action.payload)
    yield put(authenticateCustomerSuccess(data))
    action.payload.navigation.navigate(BOTTOM_TAB_NAVIGATOR)
  } catch(err) {
    if(err.message.includes("401"))
      yield put(authenticateCustomerFailed(texts["login:error:incorrect_password"]))
    else if(err.message.includes("404"))
      yield put(authenticateCustomerFailed(texts["login:error:user_not_found"]))
    else
      yield put(authenticateCustomerFailed(texts.generic_error))
  }
}

function* registerCustomer(action) {
  try {
    const { data } = yield call(registerCustomerService, action.payload.form)
    yield put(authenticateCustomerSuccess(data))
    action.payload.navigation.navigate(BOTTOM_TAB_NAVIGATOR)
  } catch(err) {
    yield put(authenticateCustomerFailed(texts.generic_error))
  }
}

function* getCardList(action) {
  try {
    const { data } = yield call(getCardListService, action.payload)
    yield put(getCardListSuccess(data))
  } catch {
    yield put(getCardListFailed())
  }
}

function* incrementCard(action) {
  try {
    const { cards, customerData } = yield select(state => state)
    const card = cards.find((card) => card.companyId == action.payload.companyId)
    if(!!card) {
      const { data } = yield call(incrementCardService, card._id)
      action.payload.navigation.navigate(CARD_DETAIL_SCREEN, { card: data })
      const newCards = cards.map((item) => {
        return item._id !== data._id ? item : { ...item, points: data.points }
      })
      yield put(getCardListSuccess(newCards))
    } else {
      const { data } = yield call(createCardService, {
        customerId: customerData._id,
        companyId: action.payload.companyId,
        points: 1
      })
      yield put(getCardListSuccess([ ...cards, data ]))
      action.payload.navigation.navigate(CARD_DETAIL_SCREEN, { card: data })
    }
  } catch {

  }
}

export default function* saga() {
  yield takeLatest(AUTHENTICATE_CUSTOMER, authenticateCustomer)
  yield takeLatest(REGISTER_CUSTOMER, registerCustomer)
  yield takeLatest(GET_CARD_LIST, getCardList)
  yield takeLatest(INCREMENT_CARD, incrementCard)
}
