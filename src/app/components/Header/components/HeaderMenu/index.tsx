import { Box } from '@mui/material';
import HeaderMenuItem from './HeaderMenuItem';

export default function HeaderMenu() {
  return (
    <Box display="flex" alignItems="center" sx={{ gap: '40px' }}>
      <HeaderMenuItem text="Trang chủ" link="/" />
      <HeaderMenuItem text="Sách" link="/list" />
    </Box>
  );
}
