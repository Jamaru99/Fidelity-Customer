import { call, put, select, takeLatest } from "@redux-saga/core/effects";
import {
  AUTHENTICATE_CUSTOMER,
  setCustomerDataSuccess,
  setCustomerDataFailed,
  SET_IS_VALID_USERNAME,
  setIsValidUsernameSuccess,
  setIsValidUsernameFailed,
  GET_CARD_LIST,
  getCardListSuccess,
  getCardListFailed,
  INCREMENT_CARD,
  setLoading,
  setCheckedSession,
  REGISTER_CUSTOMER,
  UPDATE_CUSTOMER,
  GET_SESSION,
  DO_LOGOUT,
} from "./action";

import {
  authenticateCustomer as authenticateCustomerService,
  registerCustomer as registerCustomerService,
  updateCustomer as updateCustomerService,
  isValidUsername as isValidUsernameService,
  getCardList as getCardListService,
  incrementCard as incrementCardService,
  createCard as createCardService,
  setUserDataInStorage as setUserDataInStorageService,
  getUserDataFromStorage as getUserDataFromStorageService,
  deleteUserDataFromStorage as deleteUserDataFromStorageService
} from "@services";
import { texts } from '@utils';
import { BOTTOM_TAB_NAVIGATOR, CARD_DETAIL_SCREEN, LOGIN_NAVIGATOR } from '@navigation';

function* authenticateCustomer(action) {
  try {
    yield put(setLoading(true))
    const { data } = yield call(authenticateCustomerService, action.payload)
    yield put(setCustomerDataSuccess(data))
    yield setUserDataInStorageService(data)
    action.payload.navigation.replace(BOTTOM_TAB_NAVIGATOR)
  } catch (err) {
    if (err.message.includes("401"))
      yield put(setCustomerDataFailed(texts["login:error:incorrect_password"]))
    else if (err.message.includes("404"))
      yield put(setCustomerDataFailed(texts["login:error:user_not_found"]))
    else
      yield put(setCustomerDataFailed(texts.generic_error))
  } finally {
    yield put(setLoading(false))
  }
}

function* getSession(action) {
  const user = yield getUserDataFromStorageService()
  if (!!user) {
    yield put(setCustomerDataSuccess(user))
    action.payload.navigation.replace(BOTTOM_TAB_NAVIGATOR)
  }
  yield put(setCheckedSession())
}

function* doLogout(action) {
  yield deleteUserDataFromStorageService()
  action.payload.navigation.replace(LOGIN_NAVIGATOR)
}

function* registerCustomer(action) {
  try {
    yield put(setLoading(true))
    const { data } = yield call(registerCustomerService, action.payload.form)
    yield put(setCustomerDataSuccess(data))
    yield setUserDataInStorageService(data)
    action.payload.navigation.replace(BOTTOM_TAB_NAVIGATOR)
  } catch {
    yield put(setCustomerDataFailed(texts.generic_error))
  } finally {
    yield put(setLoading(false))
  }
}

function* updateCustomer(action) {
  try {
    yield put(setLoading(true))
    const { customerData, newCustomerData } = action.payload
    if (customerData.username === newCustomerData.username)
      delete newCustomerData.username;
    const { data } = yield call(updateCustomerService, customerData._id, newCustomerData)
    yield put(setCustomerDataSuccess({ ...customerData, ...data }))
    yield setUserDataInStorageService({ ...customerData, ...data })
    action.payload.callbackSuccess()
  } catch {
    yield put(setCustomerDataFailed(texts.generic_error))
    action.payload.callbackFailure()
  } finally {
    yield put(setLoading(false))
  }
}

function* setIsValidUsername(action) {
  try {
    const { username, newUsername } = action.payload
    if (username === newUsername) {
      yield put(setIsValidUsernameSuccess(true))
      return
    }
    const { data } = yield call(isValidUsernameService, newUsername)
    yield put(setIsValidUsernameSuccess(data))
  } catch {
    yield put(setIsValidUsernameFailed())
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
    if (!!card) {
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
      yield put(getCardListSuccess([...cards, data]))
      action.payload.navigation.navigate(CARD_DETAIL_SCREEN, { card: data })
    }
  } catch {

  }
}

export default function* saga() {
  yield takeLatest(AUTHENTICATE_CUSTOMER, authenticateCustomer)
  yield takeLatest(REGISTER_CUSTOMER, registerCustomer)
  yield takeLatest(GET_SESSION, getSession)
  yield takeLatest(DO_LOGOUT, doLogout)
  yield takeLatest(UPDATE_CUSTOMER, updateCustomer)
  yield takeLatest(SET_IS_VALID_USERNAME, setIsValidUsername)
  yield takeLatest(GET_CARD_LIST, getCardList)
  yield takeLatest(INCREMENT_CARD, incrementCard)
}
