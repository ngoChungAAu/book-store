// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

import { LoginState } from 'app/pages/LoginPage/slice/types';
import { RegisterState } from 'app/pages/RegisterPage/slice/types';

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  register: RegisterState;
  login: LoginState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
