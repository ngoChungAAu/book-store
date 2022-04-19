import { Box, Typography } from '@mui/material';
import { OneColumnLayout } from 'app/components/Layout';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  BottomBuy,
  BuyListItem,
  FormBuy,
  InputBuy,
  LabelBuy,
  TopBuy,
} from './style';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import ItemBuy from 'app/components/ItemBuy';
import ButtonCustom from 'app/components/ButtonCustom';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

interface InforForm {
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
}

export function BuyPage() {
  const schema = yup.object().shape({
    firstName: yup
      .string()
      .required('Không thể bỏ trống!')
      .max(50, 'Không vượt quá 50 kí tự!'),
    lastName: yup
      .string()
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

  const form = useForm<InforForm>({
    mode: 'all',
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: InforForm) => {};

  return (
    <>
      <Helmet>
        <title>Đặt hàng</title>
      </Helmet>
      <OneColumnLayout>
        <Box sx={{ mt: '50px', mb: '50px', minHeight: 'calc(100vh - 260px)' }}>
          <TopBuy>
            <ReceiptLongIcon />
            <Typography component="h2">Thông tin đơn hàng</Typography>
          </TopBuy>

          <BottomBuy>
            <Box
              sx={{
                mb: '20px',
                width: '600px',
                fontSize: '29px',
                lineHeight: '36px',
                fontWeight: 700,
                textTransform: 'capitalize',
              }}
            >
              Danh sách sản phẩm
            </Box>
            <BuyListItem>
              <Box className="inner_list">
                <ItemBuy />
                <ItemBuy />
                <ItemBuy />
                <ItemBuy />
                <ItemBuy />
                <ItemBuy />
                <ItemBuy />
                <ItemBuy />
                <ItemBuy />
                <ItemBuy />
                <ItemBuy />
              </Box>
            </BuyListItem>

            <FormBuy onSubmit={form.handleSubmit(onSubmit)}>
              <Box
                sx={{
                  fontSize: '29px',
                  lineHeight: '36px',
                  fontWeight: 700,
                  textTransform: 'capitalize',
                }}
              >
                Thông tin người mua
              </Box>
              <Box>
                <LabelBuy>Họ</LabelBuy>
                <InputBuy
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
                <LabelBuy>Tên</LabelBuy>
                <InputBuy
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
                <LabelBuy>SĐT</LabelBuy>
                <InputBuy
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
                <LabelBuy>Địa chỉ</LabelBuy>
                <InputBuy
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
                    Đặt hàng thất bại!
                  </Typography>
                )}

                <ButtonCustom
                  type="submit"
                  variant="contained"
                  // loading={registerSelect.loading}
                >
                  {false ? '' : 'Đặt hàng'}
                </ButtonCustom>
              </Box>
            </FormBuy>
          </BottomBuy>
        </Box>
      </OneColumnLayout>
    </>
  );
}
