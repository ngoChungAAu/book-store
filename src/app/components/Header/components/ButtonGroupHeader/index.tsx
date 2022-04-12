import { Box } from '@mui/material';
import ButtonCustom from 'app/components/ButtonCustom';

export default function ButtonGroupHeader() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '24px',
        fontSize: '14px',
        lineHeight: '18px',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.04em',
      }}
    >
      <ButtonCustom
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
