import { Box, Typography, IconButton } from '@mui/material';
import { OneColumnLayout } from 'app/components/Layout';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  BottomProfile,
  FormProfile,
  InputProfile,
  LabelProfile,
  TopProfile,
} from './style';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import EditIcon from '@mui/icons-material/Edit';
import ButtonCustom from 'app/components/ButtonCustom';

interface ProfileForm {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  phone: string;
  address: string;
}

export function UserProfilePage() {
  const schema = yup.object().shape({
    firstName: yup
      .string()
      .required('Không thể bỏ trống!')
      .max(50, 'Không vượt quá 50 kí tự!'),
    lastName: yup
      .string()
      .required('Không thể bỏ trống!')
      .max(50, 'Không vượt quá 50 kí tự!'),
    username: yup
      .string()
      .required('Không thể bỏ trống!')
      .max(50, 'Không vượt quá 50 kí tự!'),
    email: yup
      .string()
      .email('Sai định dạng email!')
      .required('Không thể bỏ trống!')
      .max(50, 'Không vượt quá 50 kí tự!'),
    phone: yup
      .string()
      .required('Không thể bỏ trống!')
      .matches(
        /(03|05|07|08|09|01[2|6|8|9])+([0-9]{7})\b/,
        'Sai định dạng SĐT!',
      ),
    address: yup.string().required('Không thể bỏ trống!'),
  });

  const form = useForm<ProfileForm>({
    mode: 'all',
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: ProfileForm) => {};

  return (
    <>
      <Helmet>
        <title>Thông tin tài khoản</title>
      </Helmet>
      <OneColumnLayout>
        <Box sx={{ mt: '50px', mb: '50px' }}>
          <TopProfile>
            <AccountCircleIcon />
          </TopProfile>
          <BottomProfile>
            <FormProfile onSubmit={form.handleSubmit(onSubmit)}>
              <Box
                sx={{
                  fontSize: '29px',
                  lineHeight: '36px',
                  fontWeight: 700,
                  textTransform: 'capitalize',
                }}
              >
                Thông tin tài khoản
              </Box>
              <Box>
                <LabelProfile>Họ</LabelProfile>
                <InputProfile
                  {...form.register('lastName')}
                  type="text"
                  defaultValue="Âu"
                  fullWidth
                  autoComplete="off"
                  error={Boolean(form.formState.errors.lastName)}
                  helperText={form.formState.errors.lastName?.message}
                />
              </Box>
              <Box>
                <LabelProfile>Tên</LabelProfile>
                <InputProfile
                  {...form.register('firstName')}
                  type="text"
                  defaultValue="Ngô"
                  fullWidth
                  autoComplete="off"
                  error={Boolean(form.formState.errors.firstName)}
                  helperText={form.formState.errors.firstName?.message}
                />
              </Box>
              <Box>
                <LabelProfile>Email</LabelProfile>
                <InputProfile
                  {...form.register('email')}
                  type="text"
                  defaultValue="audavn@gmail.com"
                  fullWidth
                  autoComplete="off"
                  error={Boolean(form.formState.errors.email)}
                  helperText={form.formState.errors.email?.message}
                />
              </Box>
              <Box>
                <LabelProfile>SĐT</LabelProfile>
                <InputProfile
                  {...form.register('phone')}
                  type="text"
                  defaultValue="033454578"
                  fullWidth
                  autoComplete="off"
                  error={Boolean(form.formState.errors.phone)}
                  helperText={form.formState.errors.phone?.message}
                />
              </Box>

              <Box>
                <LabelProfile>Địa chỉ</LabelProfile>
                <InputProfile
                  {...form.register('address')}
                  type="text"
                  defaultValue="Hà Nội"
                  fullWidth
                  autoComplete="off"
                  error={Boolean(form.formState.errors.address)}
                  helperText={form.formState.errors.address?.message}
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
                {true && (
                  <Typography
                    sx={{
                      color: '#F04F5B',
                      textAlign: 'center',
                    }}
                  >
                    Cập nhật thông tin thất bại!
                  </Typography>
                )}

                <ButtonCustom
                  type="submit"
                  variant="contained"
                  // loading={registerSelect.loading}
                >
                  {false ? '' : 'Cập nhật'}
                </ButtonCustom>
              </Box>
            </FormProfile>
          </BottomProfile>
        </Box>
      </OneColumnLayout>
    </>
  );
}
