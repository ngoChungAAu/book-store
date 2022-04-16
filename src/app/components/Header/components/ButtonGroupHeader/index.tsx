import { Link, Box } from '@mui/material';

import ButtonCustom from 'app/components/ButtonCustom';
import { useHistory } from 'react-router-dom';

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
    </Box>
  );
}
