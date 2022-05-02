import { Box, IconButton, Menu, Typography } from '@mui/material';
import { useState } from 'react';
import UserIMG from '../../assets/User.svg';
import UserProfile from '../../assets/UserProfile.svg';
import History from '../../assets/History.svg';
import Logout from '../../assets/Logout.svg';
import { useHistory } from 'react-router-dom';
import { styled } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { useGlobalSlice } from 'app/components/GlobalState';
import { useCartSlice } from 'app/pages/CartPage/slice';
import { selectGlobal } from 'app/components/GlobalState/selector';

export default function UserMenu() {
  const history = useHistory();

  const dispatch = useDispatch();

  const { actions } = useGlobalSlice();

  const { actions: cartActions } = useCartSlice();

  const { user } = useSelector(selectGlobal);

  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(actions.outUser());
    window.location.href = '/login';
  };

  return (
    <>
      <Box
        onClick={handleClick}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          cursor: 'pointer',
        }}
      >
        <IconButton
          size="small"
          sx={{
            height: '32px',
            width: '32px',
            backgroundImage: `url(${UserIMG})`,
            backgroundSize: 'cover',
          }}
        />
        <Typography component="p">{user?.username}</Typography>
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            mt: '5px',
            width: '220px',
            borderRadius: '16px 0px 16px 16px',
            backgroundColor: theme => theme.palette.white.main,
            '& ul': {
              padding: '24px 0px 24px 24px',
              '& li:last-child': {
                marginBottom: '0px',
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuUserItemStyle onClick={() => history.push('/profile')}>
          <img src={UserProfile} alt="User Profile" />
          <Box>Tài khoản</Box>
        </MenuUserItemStyle>

        <MenuUserItemStyle
          onClick={() => {
            dispatch(cartActions.setPage(1));
            history.push('/cart-list');
          }}
        >
          <img src={History} alt="History" />
          <Box>Lịch sử đặt hàng</Box>
        </MenuUserItemStyle>

        <MenuUserItemStyle onClick={handleLogout}>
          <img src={Logout} alt="Logout" />
          <Box>Đăng xuất</Box>
        </MenuUserItemStyle>
      </Menu>
    </>
  );
}

const MenuUserItemStyle = styled('li')(({ theme }) => ({
  display: 'flex',
  gap: '8px',
  fontSize: '14px',
  lineHeight: '24px',
  fontWeight: 400,
  color: '#000',
  padding: '0px',
  marginBottom: '28px',

  '&:hover': {
    color: theme.palette.primary.main,
    backgroundColor: 'unset',
    cursor: 'pointer',
  },

  '& > img': { width: '24px', height: '24px' },
}));
