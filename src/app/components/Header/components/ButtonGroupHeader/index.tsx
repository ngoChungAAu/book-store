import { Link, Box, IconButton, Badge } from '@mui/material';
import ButtonCustom from 'app/components/ButtonCustom';
import { useHistory } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import UserMenu from '../UserMenu';
import { useSelector } from 'react-redux';
import { selectGlobal } from 'app/components/GlobalState/selector';

export default function ButtonGroupHeader() {
  const history = useHistory();

  const { user } = useSelector(selectGlobal);

  const handleLogin = () => history.push('/login');
  const handleRegister = () => history.push('/register');
  const handleCart = () => history.push('/cart');
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
      <IconButton onClick={handleCart}>
        <Badge badgeContent={1} color="primary">
          <ShoppingCartIcon sx={{ color: '#000' }} />
        </Badge>
      </IconButton>
      {user === null ? (
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
