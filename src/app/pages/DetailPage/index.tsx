import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import { OneColumnLayout } from 'app/components/Layout';
import { Helmet } from 'react-helmet-async';
import { BreadcumbItem, DetailPageWrapper, ImageBox, InforBox } from './style';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import image from './assets/ImageDetail.png';
import List from 'app/components/List';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useGlobalSlice } from 'app/components/GlobalState';
import { selectGlobal } from 'app/components/GlobalState/selector';
import _ from 'lodash';
import { useCartSlice } from '../CartPage/slice';
import { selectCart } from '../CartPage/slice/selector';

export function DetailPage() {
  const { id } = useParams<{ id: string }>();

  const history = useHistory();

  const dispatch = useDispatch();

  const { actions: globalActions } = useGlobalSlice();

  const { actions: cartActions } = useCartSlice();

  const { product } = useSelector(selectGlobal);

  const { addStatus } = useSelector(selectCart);

  const handleAddCart = () => {
    if (product.detail.id > -1) {
      dispatch(
        cartActions.addToCartRequest({
          productId: product.detail.id,
          quantity: 1,
        }),
      );
    }
  };

  React.useEffect(() => {
    dispatch(
      globalActions.setDetailProduct({
        id: -1,
        title: '',
        longDescription: '',
        categoryId: -1,
        category: '',
        price: 0,
        author: '',
        currentNumber: 0,
        numberOfPage: 0,
        quantitySelled: 0,
        images: [{ link: '' }],
      }),
    );

    dispatch(globalActions.getProductDetailRequest(id));

    window.scrollTo(0, 0);
  }, [id]);

  return (
    <>
      <Helmet>
        <title>{product.detail.title}</title>
      </Helmet>
      <OneColumnLayout>
        <DetailPageWrapper>
          <Box sx={{ pt: '30px', pb: '50px' }}>
            <BreadcumbItem onClick={() => history.push('/')}>
              Trang chủ
            </BreadcumbItem>{' '}
            /{' '}
            <BreadcumbItem
              onClick={() =>
                history.push(`/product/${product.detail.categoryId}`)
              }
            >
              {product.detail.category}
            </BreadcumbItem>{' '}
            /{' '}
            <BreadcumbItem className="selected">
              {product.detail.title}
            </BreadcumbItem>
          </Box>

          <Grid container spacing={4}>
            <Grid item xs={12} md={5}>
              <ImageBox>
                <img
                  src={
                    !_.isEmpty(product.detail.images[0])
                      ? product.detail.images[0].link
                      : ''
                  }
                  alt={product.detail.title}
                />
              </ImageBox>
            </Grid>
            <Grid item xs={12} md={7}>
              <InforBox>
                <Box className="title">{product.detail.title}</Box>
                <hr />
                <Grid container rowSpacing={2} className="infor">
                  <Grid item md={6} className="left">
                    <Typography component="p">
                      <FiberManualRecordIcon />
                      Giá bán:{' '}
                      <span className="price">
                        {Number(product.detail.price).toLocaleString('en-US')}{' '}
                        VNĐ
                      </span>
                    </Typography>
                    <Typography component="p">
                      <FiberManualRecordIcon />
                      Tác giả: <span>{product.detail.author}</span>
                    </Typography>
                    <Typography component="p">
                      <FiberManualRecordIcon />
                      Số trang: <span>{product.detail.numberOfPage}</span>
                    </Typography>
                    <Typography component="p">
                      <FiberManualRecordIcon />
                      Số lượng:{' '}
                      <span>
                        {product.detail.currentNumber -
                          product.detail.quantitySelled}
                      </span>
                    </Typography>
                  </Grid>
                  <Grid item md={6} className="right">
                    <Button
                      variant="contained"
                      disabled={product.detail.id === -1}
                      startIcon={<AddShoppingCartIcon fontSize="large" />}
                      onClick={handleAddCart}
                      sx={{
                        fontWeight: 'bold',
                        color: '#000',
                        padding: '10px 20px',
                      }}
                    >
                      Thêm vào giỏ hàng
                    </Button>
                    {addStatus !== '' && (
                      <Typography component="p" sx={{ mt: '10px' }}>
                        {addStatus === 'success'
                          ? 'Thêm vào giỏ hàng thành công!'
                          : 'Thêm vào giỏ hàng thất bại!'}
                      </Typography>
                    )}
                  </Grid>
                </Grid>
                <hr />
                <Box className="description">
                  <Typography component="p" className="descTitle">
                    Giới thiệu sách
                  </Typography>
                  <Typography component="p" className="descContent">
                    {product.detail.longDescription}
                  </Typography>
                </Box>
              </InforBox>
            </Grid>
          </Grid>

          {product.detail.categoryId > -1 && (
            <List
              title="Sách cùng chủ đề"
              categoryId={product.detail.categoryId}
            />
          )}
        </DetailPageWrapper>
      </OneColumnLayout>
    </>
  );
}
