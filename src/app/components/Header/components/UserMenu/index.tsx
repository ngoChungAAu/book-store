import { Box, IconButton, Menu } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import BackgroundMenu from '../../assets/BackgroundMenu.svg';
import UserProfile from '../../assets/UserProfile.svg';
import Logout from '../../assets/Logout.svg';
import { useHistory } from 'react-router-dom';
import { styled } from '@mui/system';

export default function UserMenu() {
  const history = useHistory();

  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {};

  return (
    <>
      <IconButton
        onClick={handleClick}
        size="small"
        sx={{
          backgroundImage: `url(${BackgroundMenu})`,
          height: '32px',
          width: '32px',
          cursor: 'pointer',
        }}
      />
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            mt: '10px',
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
          <Box>User profile</Box>
        </MenuUserItemStyle>

        <MenuUserItemStyle onClick={handleLogout}>
          <img src={Logout} alt="Logout" />
          <Box>Log out</Box>
        </MenuUserItemStyle>
      </Menu>
    </>
  );
}

const MenuUserStyle = styled(Menu)(({ theme }) => ({
  zIndex: 0,
}));

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
