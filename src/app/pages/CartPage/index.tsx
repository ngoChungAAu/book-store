import { Box, Typography } from '@mui/material';
import { OneColumnLayout } from 'app/components/Layout';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BottomCart, CartButton, CartTableWrapper, TopCart } from './style';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import ItemCart from '../../components/ItemCart';
import ButtonCustom from 'app/components/ButtonCustom';

export function CartPage() {
  return (
    <>
      <Helmet>
        <title>Giỏ hàng</title>
      </Helmet>
      <OneColumnLayout>
        <Box sx={{ mt: '50px', mb: '50px', minHeight: 'calc(100vh - 260px)' }}>
          <TopCart>
            <ShoppingBasketOutlinedIcon />
            <Typography component="h2">Giỏ hàng</Typography>
          </TopCart>
          <BottomCart>
            {false ? (
              <>
                <Typography component="p" className="no_data">
                  Không có sản phẩm nào trong giỏ hàng của bạn!
                </Typography>
              </>
            ) : (
              <Box>
                <CartTableWrapper>
                  <ItemCart />
                  <ItemCart />
                  <ItemCart />
                </CartTableWrapper>
                <CartButton>
                  <ButtonCustom variant="contained">Mua hàng</ButtonCustom>
                </CartButton>
              </Box>
            )}
          </BottomCart>
        </Box>
      </OneColumnLayout>
    </>
  );
}
