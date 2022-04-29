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
import { useDispatch, useSelector } from 'react-redux';
import { useCartSlice } from 'app/pages/CartPage/slice';
import { useHistory } from 'react-router-dom';
import { selectCart } from 'app/pages/CartPage/slice/selector';

interface Props {
  order_id: number;
  product_id: number;
  image: string;
  title: string;
  price: number;
  numb: number;
}

export default function CartItem(props: Props) {
  const { order_id, product_id, image, title, price, numb } = props;

  const history = useHistory();

  const dispatch = useDispatch();

  const { actions } = useCartSlice();

  const { quantity } = useSelector(selectCart);

  const handleAdd = () => {
    dispatch(actions.setQuantity(quantity + 1));
    dispatch(
      actions.addToCartRequest({
        productId: product_id,
        quantity: 1,
      }),
    );
  };

  const handleRemove = () => {
    if (quantity > 1) {
      dispatch(actions.setQuantity(quantity - 1));
      dispatch(
        actions.removeFromCartRequest({
          productId: product_id,
          quantity: 1,
        }),
      );
    }
  };

  const handleDeleteItem = () => {
    dispatch(
      actions.removeFromCartRequest({
        productId: product_id,
        quantity,
      }),
    );
  };

  const handleOnClick = () => {
    history.push(`/product-detail/${product_id}`);
  };

  React.useEffect(() => {
    dispatch(actions.setQuantity(numb));
  }, []);

  return (
    <ItemCartWrapper>
      <ItemCartImage onClick={handleOnClick}>
        <img src={image} alt="Ảnh" />
      </ItemCartImage>
      <ItemCartName onClick={handleOnClick}>{title}</ItemCartName>
      <ItemCartPrice>{price.toLocaleString('en-US')}</ItemCartPrice>
      <ItemCartNumber>
        <Box
          onClick={handleRemove}
          className={quantity > 1 ? 'active' : 'disable'}
        >
          <RemoveIcon fontSize="small" />
        </Box>
        <Box>{quantity}</Box>
        <Box onClick={handleAdd} className="active">
          <AddIcon fontSize="small" />
        </Box>
      </ItemCartNumber>
      <CloseIcon
        onClick={handleDeleteItem}
        sx={{ color: 'red', cursor: 'pointer' }}
      />
    </ItemCartWrapper>
  );
}
