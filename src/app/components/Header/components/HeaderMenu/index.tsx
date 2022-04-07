import { Box } from '@mui/material';
import HeaderMenuItem from './HeaderMenuItem';

export default function HeaderMenu() {
  return (
    <Box display="flex" alignItems="center" sx={{ gap: '40px' }}>
      <HeaderMenuItem text="Marketplace" link="/" />
      <HeaderMenuItem text="Mystery Box" link="/gacha" />
    </Box>
  );
}
