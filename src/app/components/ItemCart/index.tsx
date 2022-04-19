import React from 'react';
import {
  ItemCartImage,
  ItemCartName,
  ItemCartNumber,
  ItemCartPrice,
  ItemCartWrapper,
} from './style';
import { Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CloseIcon from '@mui/icons-material/Close';
import image from './assets/ImageDetail.png';

export default function CartItem() {
  const [count, setCount] = React.useState(1);

  return (
    <ItemCartWrapper>
      <ItemCartImage>
        <img src={image} alt="img" />
      </ItemCartImage>
      <ItemCartName>
        Tranh truyện dân gian Việt Nam - Lý Ông Trọng Tranh truyện dân gian Việt
        Nam - Lý Ông Trọngs
      </ItemCartName>
      <ItemCartPrice>
        {Number('18000000').toLocaleString('en-US')}
      </ItemCartPrice>
      <ItemCartNumber>
        <Box
          onClick={() => {
            setCount(Math.max(count - 1, 0));
          }}
        >
          <RemoveIcon fontSize="small" />
        </Box>
        <Box>{count}</Box>
        <Box
          onClick={() => {
            setCount(count + 1);
          }}
        >
          <AddIcon fontSize="small" />
        </Box>
      </ItemCartNumber>
      <CloseIcon sx={{ color: 'red', cursor: 'pointer' }} />
    </ItemCartWrapper>
  );
}
