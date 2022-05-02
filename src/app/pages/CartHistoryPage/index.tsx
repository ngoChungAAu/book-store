import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { styled } from '@mui/system';
import { OneColumnLayout } from 'app/components/Layout';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import TableCollapse from './TableCollapse';
import { useCartSlice } from '../CartPage/slice';
import { useDispatch, useSelector } from 'react-redux';
import { selectCart } from '../CartPage/slice/selector';

export function CartHistoryPage() {
  const dispatch = useDispatch();

  const { actions: cartActions } = useCartSlice();

  const { listCart, page, size, total_page } = useSelector(selectCart);

  React.useEffect(() => {
    dispatch(cartActions.getListCart({ page, size }));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Helmet>
        <title>Lịch sử đặt hàng</title>
      </Helmet>
      <OneColumnLayout>
        <Box sx={{ minHeight: 'calc(100vh - 240px)' }}>
          <TitleCustom>
            <FormatListBulletedIcon />
            <Typography component="h2">Lịch sử đặt hàng</Typography>
          </TitleCustom>
          {listCart.length > 0 ? (
            <>
              <TableContainer component={Paper} sx={{ mb: '40px !important' }}>
                <Table aria-label="collapsible table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell />
                      <StyledTableCell component="th" scope="row">
                        ID
                      </StyledTableCell>
                      <StyledTableCell>Người nhận</StyledTableCell>
                      <StyledTableCell>Địa chỉ</StyledTableCell>
                      <StyledTableCell>Ngày tạo</StyledTableCell>
                      <StyledTableCell>Tổng tiền</StyledTableCell>
                      <StyledTableCell>Trạng thái</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {listCart.map((e, i) => (
                      <TableCollapse data={e} key={i} />
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>

              <PaginationCustom>
                <Box>
                  <Box
                    onClick={
                      page === 1
                        ? () => {}
                        : () => dispatch(cartActions.setPage(page - 1))
                    }
                    className={page === 1 ? 'disable' : 'active'}
                  >
                    <ArrowBackIosNewIcon fontSize="small" />
                  </Box>
                  <Box>{page}</Box>
                  <Box
                    onClick={
                      page === total_page
                        ? () => {}
                        : () => dispatch(cartActions.setPage(page + 1))
                    }
                    className={page === total_page ? 'disable' : 'active'}
                  >
                    <ArrowForwardIosIcon fontSize="small" />
                  </Box>
                </Box>
              </PaginationCustom>
            </>
          ) : (
            <Typography
              component="p"
              sx={{
                textAlign: 'center',
                fontSize: '16px',
                lineHeight: '22px',
                fontWeight: 700,
              }}
            >
              Bạn chưa đặt hàng tại cửa hàng của chúng tôi! Hãy đặt hàng ngay!
            </Typography>
          )}
        </Box>
      </OneColumnLayout>
    </>
  );
}

const TitleCustom = styled(Box)(({ theme }) => ({
  marginTop: '50px',
  marginBottom: '70px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '20px',

  '& .MuiSvgIcon-root': {
    width: '50px',
    height: '50px',
    color: '#51BF29',
  },

  '& h2': {
    fontSize: '29px',
    lineHeight: '36px',
    fontWeight: 700,
  },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  '&.MuiTableCell-head': {
    backgroundColor: '#00E5FF',
    color: '#000',
  },
}));

const PaginationCustom = styled(Box)(({ theme }) => ({
  marginTop: '40px',
  paddingBottom: '30px',

  display: 'flex',
  justifyContent: 'center',

  '& > div': {
    height: '30px',
    display: 'flex',

    '& > div': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '30px',
      width: '30px',
      padding: '0px',
      border: '1px solid #000',
      color: '#000',
      cursor: 'pointer',

      '&.active': {
        '&:hover': {
          background: 'rgba(0,239,255,0.55)',
        },
      },

      '&.disable': {
        background: 'rgba(234,231,231,0.9)',
        border: '1px solid rgba(234,231,231,0.9)',
        cursor: 'unset',

        '& .MuiSvgIcon-root': {
          color: '#FFF',
        },
      },
    },
  },
}));
