import { Box, Typography } from '@mui/material';
import { OneColumnLayout } from 'app/components/Layout';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BottomCart, CartButton, CartTableWrapper, TopCart } from './style';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import ItemCart from '../../components/ItemCart';
import ButtonCustom from 'app/components/ButtonCustom';
import { useDispatch, useSelector } from 'react-redux';
import { useCartSlice } from './slice';
import { selectCart } from './slice/selector';

export function CartPage() {
  const dispatch = useDispatch();

  const { actions } = useCartSlice();

  const { detailCart } = useSelector(selectCart);

  React.useEffect(() => {
    dispatch(actions.getCurrentCart());
  }, []);

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
            {detailCart.orderItems.length === 0 ? (
              <>
                <Typography component="p" className="no_data">
                  Không có sản phẩm nào trong giỏ hàng của bạn!
                </Typography>
              </>
            ) : (
              <Box>
                <CartTableWrapper>
                  {detailCart.orderItems.map((e, i) => (
                    <ItemCart
                      order_id={e.id}
                      product_id={e.product.id}
                      image={e.product.product_images[0].imageUrl}
                      title={e.product.title}
                      price={e.product.price}
                      numb={e.quantity}
                      key={i}
                    />
                  ))}
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
