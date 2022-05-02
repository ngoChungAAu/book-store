import {
  Box,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import React from 'react';
import { ICart } from 'app/pages/CartPage/slice/types';
import moment from 'moment';
import { styled } from '@mui/system';

const configDelivery = value => {
  switch (value) {
    case 1:
      return { text: 'Đặt hàng', color: '#000' };
    case 2:
      return { text: 'Chờ xác nhận', color: '#ff9800' };
    case 3:
      return { text: 'Đang giao hàng', color: '#03a9f4' };
    case 4:
      return { text: 'Hoàn thành', color: '#4caf50' };

    default:
      return { text: 'Mới', color: '#000' };
  }
};

interface Props {
  data: ICart;
}

export default function TableCollapse(props: Props) {
  const {
    orderItems,
    delivery,
    createAt,
    id,
    name,
    customerAddress,
    totalPrice,
  } = props.data;

  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {id}
        </TableCell>
        <TableCell>{name}</TableCell>
        <TableCell>{customerAddress}</TableCell>
        <TableCell>
          {moment(createAt).format('DD/MM/YYYY').toString()}
        </TableCell>
        <TableCell>{totalPrice.toLocaleString('en-US')}</TableCell>
        <TableCell sx={{ color: `${configDelivery(delivery.id).color}` }}>
          {configDelivery(delivery.id).text}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell
          style={{
            paddingBottom: 0,
            paddingTop: 0,
          }}
          colSpan={12}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h4" gutterBottom component="div">
                Chi tiết
              </Typography>
              <Table
                size="small"
                aria-label="purchases"
                sx={{
                  border: '0.2px solid #000',
                }}
              >
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Sản phẩm</StyledTableCell>
                    <StyledTableCell>Số lượng</StyledTableCell>
                    <StyledTableCell>Giá tiền (VNĐ)</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {/* list */}
                  {orderItems.map((e, i) => (
                    <TableRow key={i}>
                      <TableCell>{e.product.title}</TableCell>
                      <TableCell>{e.quantity}</TableCell>
                      <TableCell>
                        {e.product.price.toLocaleString('en-US')}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  '&.MuiTableCell-head': {
    backgroundColor: '#00E5FF',
    color: '#000',
  },
}));
