import { Link, Box, IconButton, Badge } from '@mui/material';
import ButtonCustom from 'app/components/ButtonCustom';
import { useHistory } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import UserMenu from '../UserMenu';

export default function ButtonGroupHeader() {
  const history = useHistory();
  const handleLogin = () => history.push('/login');
  const handleRegister = () => history.push('/register');
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '24px',
        fontSize: '14px',
        lineHeight: '18px',
        fontWeight: 700,
      }}
    >
      <IconButton>
        <Badge badgeContent={1} color="primary">
          <ShoppingCartIcon sx={{ color: '#000' }} />
        </Badge>
      </IconButton>
      {false ? (
        <>
          <Link
            onClick={handleRegister}
            sx={{
              textDecoration: 'none',
              color: '#000000',

              '&:hover': {
                color: '#00E5FF',
                cursor: 'pointer',
              },
            }}
          >
            Đăng ký
          </Link>
          <ButtonCustom
            onClick={handleLogin}
            variant="contained"
            sx={{
              height: '40px',
              p: '7px 24px',
              fontSize: '14px',
              lineHeight: '18px',
              fontWeight: 700,
            }}
          >
            Đăng nhập
          </ButtonCustom>
        </>
      ) : (
        <UserMenu />
      )}
    </Box>
  );
}
