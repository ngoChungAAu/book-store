import { Box } from '@mui/material';
import { styled } from '@mui/system';
import Sach1 from './images/sach2.png';
import React from 'react';
import { useHistory } from 'react-router-dom';

interface Props {
  id: number;
  image: string;
  title: string;
  author: string;
  price: number;
}

export default function Item(props: Props) {
  const history = useHistory();

  const handleToDo = () => history.push(`/detail/${props.id}`);

  return (
    <ItemWrapper onClick={handleToDo}>
      <Box className="image">
        <img src={props.image} alt={props.title} />
      </Box>
      <Box className="title">{props.title}</Box>

      <Box className="author">{props.price}</Box>

      <Box className="price">{props.price.toLocaleString('en-US')} VNĐ</Box>
    </ItemWrapper>
  );
}

const ItemWrapper = styled(Box)(({ theme }) => ({
  minHeight: '400px',
  width: '280px',
  padding: '18px',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',

  '&:hover': {
    cursor: 'pointer',
    transform: 'translateY(-15px)',
    transition: '0.5s',
  },

  '& .image': {
    width: '100%',
    height: '250px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    '& img': {
      maxWidth: '100%',
      maxHeight: '100%',
      height: 'auto',
    },
  },

  '& .title': {
    marginTop: '15px',
    fontSize: '16px',
    lineHeight: '20px',
    fontWeight: 700,
    display: '-webkit-box',
    '-webkit-line-clamp': '2',
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    wordBreak: 'break-word',
  },

  '& .author': {
    marginTop: '10px',
    display: '-webkit-box',
    '-webkit-line-clamp': '1',
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    wordBreak: 'break-word',
    fontSize: '12px',
    lineHeight: '16px',
    fontWeight: 700,
    color: 'rgba(0,0,0,0.7)',
  },

  '& .price': {
    marginTop: '10px',
    display: 'flex',
    justifyContent: 'flex-end',
    fontSize: '18px',
    lineHeight: '24px',
    fontWeight: 'bold',
    color: '#FF2222',
  },
}));
