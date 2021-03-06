import React from 'react';
import { OneColumnLayout } from 'app/components/Layout';
import { Box, Grid, Typography } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { PaginationCustom, TitleList, WrapperList } from './style';
import SearchList from './components/SearchList';
import SelectList from './components/SelectList';
import Item from 'app/components/Item';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useGlobalSlice } from 'app/components/GlobalState';
import { selectGlobal } from 'app/components/GlobalState/selector';
import _ from 'lodash';

const listSelect = [
  { value: 'new', label: 'Mới nhất' },
  { value: 'old', label: 'Cũ nhất' },
  { value: 'cheap', label: 'Giá tăng dần' },
  { value: 'expensive', label: 'Giá giảm dần' },
];

export function ListPage() {
  const { id } = useParams<{ id: string }>();

  const dispatch = useDispatch();

  const { actions: globalActions } = useGlobalSlice();

  const { product, errorMessage } = useSelector(selectGlobal);

  const [sort, setSort] = React.useState('new');
  const [search, setSearch] = React.useState('');

  React.useEffect(() => {
    dispatch(
      globalActions.getProductListRequest({
        categoryId: id,
        key: search.trim().length > 0 ? 'title' : 'filter',
        value: search.trim().length > 0 ? `${search}___${sort}` : `${sort}`,
        page: product.page,
        size: product.size,
      }),
    );
  }, [id, product.page, sort, search]); // eslint-disable-line react-hooks/exhaustive-deps

  React.useEffect(() => {
    dispatch(
      globalActions.setProductData({
        data: [],
        category: '',
        total_item: 0,
        total_page: 0,
        current_page: 1,
      }),
    );
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Helmet>
        <title>{product.category}</title>
      </Helmet>
      <OneColumnLayout>
        <Box sx={{ mt: '50px' }}>
          <TitleList>{product.category}</TitleList>
          <WrapperList>
            <Box
              sx={{
                display: 'flex',
                gap: '30px',
                justifyContent: 'flex-end',
                mb: '70px',
              }}
            >
              <SearchList setValue={setSearch} />
              <SelectList list={listSelect} setValue={setSort} />
            </Box>

            {product.list.length === 0 &&
            errorMessage === 'Lỗi! Không hiển thị danh sách!' ? (
              <Typography
                component="p"
                sx={{
                  textAlign: 'center',
                  fontSize: '24px',
                  lineHeight: '27px',
                }}
              >
                {errorMessage}
              </Typography>
            ) : product.list.length > 0 ? (
              <Grid container spacing={8}>
                {product.list.map((e, i) => (
                  <Grid
                    key={i}
                    item
                    xs={6}
                    sm={4}
                    lg={3}
                    sx={{ display: 'flex', justifyContent: 'center' }}
                  >
                    <Item
                      id={e.id}
                      image={
                        !_.isEmpty(e.images[e.images.length - 1]?.link)
                          ? e.images[e.images.length - 1].link
                          : ''
                      }
                      title={e.title}
                      author={e.author}
                      price={e.price}
                    />
                  </Grid>
                ))}
              </Grid>
            ) : (
              <Typography
                component="p"
                sx={{
                  textAlign: 'center',
                  fontSize: '24px',
                  lineHeight: '27px',
                }}
              >
                Không có sản phẩm nào ở danh mục này!
              </Typography>
            )}
          </WrapperList>
          <PaginationCustom>
            <Box>
              <Box
                onClick={
                  product.page === 1
                    ? () => {}
                    : () =>
                        dispatch(globalActions.setProductPage(product.page - 1))
                }
                className={product.page === 1 ? 'disable' : 'active'}
              >
                <ArrowBackIosNewIcon fontSize="small" />
              </Box>
              <Box>{product.page}</Box>
              <Box
                onClick={
                  product.page === product.total_page
                    ? () => {}
                    : () =>
                        dispatch(globalActions.setProductPage(product.page + 1))
                }
                className={
                  product.page === product.total_page ? 'disable' : 'active'
                }
              >
                <ArrowForwardIosIcon fontSize="small" />
              </Box>
            </Box>
          </PaginationCustom>
        </Box>
      </OneColumnLayout>
    </>
  );
}
