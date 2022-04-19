import { Box } from '@mui/material';
import { styled } from '@mui/system';

export const ItemBuyWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  minHeight: '100px',
  padding: '10px 20px',
  borderRadius: '10px',
  boxShadow: '0 3px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)',
  display: 'flex',
  gap: '10px',
}));

export const ItemBuyImage = styled(Box)(({ theme }) => ({
  height: '100%',
  width: '100px',
  display: 'flex',
  alignItems: 'center',

  img: {
    maxWidth: '100%',
    maxHeight: '100%',
    height: 'auto',
  },
}));

export const ItemBuyName = styled(Box)(({ theme }) => ({
  margin: '15px 0px',
  width: '450px',
  fontSize: '14px',
  lineHeight: '18px',
  fontWeight: 600,
}));

export const ItemBuyPrice = styled(Box)(({ theme }) => ({
  width: '130px',
  display: 'flex',
  alignItems: 'center',
  fontSize: '14px',
  lineHeight: '18px',
  fontWeight: 600,
  color: '#F04F5B',
}));
