import { Menu, MenuItem } from '@mui/material';
import { styled } from '@mui/system';

export const MenuUserStyle = styled(Menu)(({ theme }) => ({
  zIndex: 0,
}));

export const MenuUserItemStyle = styled('li')(({ theme }) => ({
  display: 'flex',
  gap: '8px',
  fontSize: '14px',
  lineHeight: '24px',
  fontWeight: 400,
  color: 'red',
  padding: '0px',
  marginBottom: '28px',

  '&:hover': {
    color: theme.palette.primary.main,
    backgroundColor: 'unset',
  },

  '& > img': { width: '24px', height: '24px' },
}));
