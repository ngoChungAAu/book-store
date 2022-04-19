import React from 'react';
import {
  ItemBuyImage,
  ItemBuyName,
  ItemBuyPrice,
  ItemBuyWrapper,
} from './style';
import { Box, Typography } from '@mui/material';
import image from './assets/ImageDetail.png';

export default function ItemBuy() {
  return (
    <ItemBuyWrapper>
      <ItemBuyImage>
        <img src={image} alt="img" />
      </ItemBuyImage>
      <Box>
        <ItemBuyName>
          Tranh truyện dân gian Việt Nam - Lý Ông Trọng Tranh truyện dân gian
          height: '100%'
        </ItemBuyName>
        <Box sx={{ display: 'flex', gap: '10px' }}>
          <ItemBuyPrice>
            {Number('18000000').toLocaleString('en-US')} VNĐ
          </ItemBuyPrice>
          <Typography component="p">x3</Typography>
        </Box>
      </Box>
    </ItemBuyWrapper>
  );
}
