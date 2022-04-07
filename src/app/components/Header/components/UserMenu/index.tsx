import { Box, IconButton, Menu } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ReactComponent as WalletInventory } from '../../assets/WalletInventory.svg';
import BackgroundMenu from '../../assets/BackgroundMenu.svg';
import IngameInventory from '../../assets/IngameInventory.svg';
import BalanceInGame from '../../assets/BalanceInGame.svg';
import UserProfile from '../../assets/UserProfile.svg';
import Staking from '../../assets/Staking.svg';
import Vesting from '../../assets/Vesting.svg';
import ChangePassword from '../../assets/ChangePassword.svg';
import Logout from '../../assets/Logout.svg';
import { MenuUserItemStyle } from './style';
import { useHistory } from 'react-router-dom';

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

  const handleChangePassword = () => {};

  return (
    <>
      <IconButton
        onClick={handleClick}
        size="small"
        sx={{
          backgroundImage: `url(${BackgroundMenu})`,
          height: '32px',
          width: '32px',
        }}
      />
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            mt: '32px',
            width: '256px',
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
        <MenuUserItemStyle
          onClick={() => history.push('/tabs/wallet-inventory')}
        >
          <WalletInventory />
          <Box>Wallet Inventory</Box>
        </MenuUserItemStyle>

        <MenuUserItemStyle
          onClick={() => history.push('/tabs/in-game-inventory')}
        >
          <img src={IngameInventory} alt="Ingame Inventory" />
          <Box>In Game Inventory</Box>
        </MenuUserItemStyle>

        <MenuUserItemStyle
          onClick={() => history.push('/tabs/balance-in-game')}
        >
          <img src={BalanceInGame} alt="Balance In Game" />
          <Box>Balance In Game</Box>
        </MenuUserItemStyle>

        <MenuUserItemStyle onClick={() => history.push('/tabs/profile')}>
          <img src={UserProfile} alt="User Profile" />
          <Box>User profile</Box>
        </MenuUserItemStyle>

        <MenuUserItemStyle>
          <img src={Staking} alt="Staking" />
          <Box>Staking</Box>
        </MenuUserItemStyle>

        <MenuUserItemStyle onClick={() => history.push('/vesting')}>
          <img src={Vesting} alt="Vesting" />
          <Box>Vesting</Box>
        </MenuUserItemStyle>

        <MenuUserItemStyle onClick={handleChangePassword}>
          <img src={ChangePassword} alt="Change password" />
          <Box>Change Password</Box>
        </MenuUserItemStyle>

        <MenuUserItemStyle onClick={handleLogout}>
          <img src={Logout} alt="Logout" />
          <Box>Log out</Box>
        </MenuUserItemStyle>
      </Menu>
    </>
  );
}
