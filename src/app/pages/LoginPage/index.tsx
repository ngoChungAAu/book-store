import React from 'react';
import { Box, IconButton, InputAdornment, Typography } from '@mui/material';
import { OneColumnLayout } from 'app/components/Layout';
import {
  InputLogin,
  LabelLogin,
  LoginBox,
  LoginFormStyle,
  LoginPageWrapper,
  TitleLogin,
} from './style';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useLoginSlice } from './slice';
import { useDispatch, useSelector } from 'react-redux';
import { selectLogin } from './slice/selector';
import ButtonCustom from 'app/components/ButtonCustom';
import { useHistory } from 'react-router-dom';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Helmet } from 'react-helmet-async';

interface LoginForm {
  email: string;
  password: string;
}

export function LoginPage() {
  const schema = yup.object().shape({
    email: yup
      .string()
      .required('This field is required')
      .max(50, 'Invalid format email')
      .email('Invalid format email'),

    password: yup
      .string()
      .required('This field is required')
      .max(50, 'Invalid format password'),
  });

  const form = useForm<LoginForm>({
    mode: 'all',
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const [messageError, setMessageError] = React.useState('');
  const [show, setShow] = React.useState<boolean>(false);

  const { loginActions } = useLoginSlice();
  const loginSelect = useSelector(selectLogin);

  const onSubmit = (data: LoginForm) => {
    setMessageError('');
    dispatch(
      loginActions.loginRequest({
        grant_type: 'password',
        username: data.email,
        password: data.password,
      }),
    );
  };

  const handleBackToRegister = () => {
    history.push('/register');
  };

  React.useEffect(() => {
    if (loginSelect.success) {
      history.push('/');
    }
    switch (loginSelect.errorMessage) {
      case 'account.not.verified':
        setMessageError('Please activate your email before login!');
        break;

      case 'username.or.password.incorrect':
        setMessageError('Username or password is incorrect!');
        break;

      default:
        setMessageError('Đăng nhập thất bại!');
        break;
    }
  }, [loginSelect.success, loginSelect.fail, loginSelect.errorMessage]);

  return (
    <>
      <Helmet>
        <title>Đăng nhập</title>
      </Helmet>
      <OneColumnLayout>
        <LoginPageWrapper>
          <LoginBox>
            <TitleLogin>Đăng nhập</TitleLogin>
            <LoginFormStyle onSubmit={form.handleSubmit(onSubmit)}>
              <Box sx={{ width: '100%' }}>
                <LabelLogin>Email</LabelLogin>
                <InputLogin
                  {...form.register('email')}
                  type="text"
                  autoComplete="off"
                  error={Boolean(form.formState.errors.email)}
                  helperText={form.formState.errors.email?.message}
                  sx={{ width: '100%' }}
                />
              </Box>
              <Box sx={{ width: '100%' }}>
                <LabelLogin>Password</LabelLogin>
                <InputLogin
                  {...form.register('password')}
                  type={show ? 'text' : 'password'}
                  autoComplete="off"
                  error={Boolean(form.formState.errors.password)}
                  helperText={form.formState.errors.password?.message}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <IconButton
                          onClick={() => {
                            setShow(!show);
                          }}
                          tabIndex={-1}
                        >
                          {show ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>

              <Box
                sx={{
                  marginTop: '30px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                }}
              >
                {loginSelect.errorMessage !== '' && (
                  <Typography
                    sx={{
                      color: theme => theme.palette.error.main,
                      textAlign: 'center',
                    }}
                  >
                    {messageError}
                  </Typography>
                )}

                <ButtonCustom
                  type="submit"
                  variant="contained"
                  loading={loginSelect.loading}
                >
                  {loginSelect.loading ? '' : 'Đăng nhập'}
                </ButtonCustom>
              </Box>
            </LoginFormStyle>

            <Typography
              onClick={handleBackToRegister}
              sx={{
                paddingTop: '50px',
                color: theme => theme.palette.black.main,
                fontSize: '16px',
                lineHeight: '21px',
                fontWeight: 700,
                textDecoration: 'none',
                textAlign: 'center',
                cursor: 'pointer',
                width: '110px',
                margin: '0px auto',

                '&:hover': {
                  color: theme => theme.palette.primary.main,
                },
              }}
            >
              Đăng ký
            </Typography>
          </LoginBox>
        </LoginPageWrapper>
      </OneColumnLayout>
    </>
  );
}
