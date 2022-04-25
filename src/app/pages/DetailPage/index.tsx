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

export function DetailPage() {
  const { id } = useParams<{ id: string }>();

  const history = useHistory();

  const dispatch = useDispatch();

  const { actions: globalActions } = useGlobalSlice();

  const { product } = useSelector(selectGlobal);

  React.useEffect(() => {
    dispatch(globalActions.getProductDetailRequest(id));

    dispatch(
      globalActions.getProductListRequest({
        categoryId: product.detail.categoryId,
      }),
    );
  }, [id]);

  return (
    <>
      <Helmet>
        <title>Truyện tranh</title>
      </Helmet>
      <OneColumnLayout>
        <DetailPageWrapper>
          <Box sx={{ pt: '30px', pb: '50px' }}>
            <BreadcumbItem onClick={() => history.push('/')}>
              Trang chủ
            </BreadcumbItem>{' '}
            / <BreadcumbItem>Truyện tranh</BreadcumbItem> /{' '}
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
                      startIcon={<AddShoppingCartIcon fontSize="large" />}
                      sx={{
                        fontWeight: 'bold',
                        color: '#000',
                        padding: '10px 20px',
                      }}
                    >
                      Thêm vào giỏ hàng
                    </Button>
                  </Grid>
                </Grid>
                <hr />
                <Box className="description">
                  <Typography component="p">Giới thiệu sách</Typography>
                  <Typography component="p">
                    {product.detail.longDescription}
                  </Typography>
                </Box>
              </InforBox>
            </Grid>
          </Grid>

          <List title="Sách cùng chủ đề" list={product.list} />
        </DetailPageWrapper>
      </OneColumnLayout>
    </>
  );
}
