import { call, takeLatest, put, all, delay } from 'redux-saga/effects';
import { authService } from 'services/api/authService';
import { loginActions as actions } from '.';
import { isEmpty } from 'lodash';

function* handleLogin(action) {
  try {
    const response = yield call(authService.login, action.payload);

    localStorage.setItem(
      'cyber8_dapp_access_token',
      response.data.access_token,
    );

    localStorage.setItem(
      'cyber8_dapp_refresh_token',
      response.data.refresh_token,
    );

    localStorage.setItem('cyber8_dapp_jti', response.data.jti);

    // const res = yield call(authService.getProfile, response.data.access_token);

    // if (!isEmpty(res.data.data)) {
    //   yield put(globalActions.setUser(res.data.data));
    // }

    yield put(actions.loginSuccess());
  } catch (error: any) {
    yield put(
      actions.loginFailure(
        isEmpty(error.response.data.message)
          ? 'error'
          : error.response.data.message,
      ),
    );

    // yield put(globalActions.outUser());
  }
}

export function* watchHandleLogin() {
  yield takeLatest(actions.loginRequest.type, handleLogin);
}

export default function* loginSaga() {
  yield all([watchHandleLogin()]);
}
