import { call, takeLatest, put, all } from 'redux-saga/effects';
import { authService } from 'services/api/authService';
import { actions } from '.';

function* handleGetUserProfile() {
  try {
    const response = yield call(authService.getCurrentProfile);

    yield put(actions.setUser(response.data.item));
  } catch (error: any) {
    yield put(actions.outUser());
    window.location.href = '/login';
  }
}

export function* watchHandleGetUserProfile() {
  yield takeLatest(actions.getUserProfileRequest.type, handleGetUserProfile);
}

export default function* globalSaga() {
  yield all([watchHandleGetUserProfile()]);
}
