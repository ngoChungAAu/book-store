import { Box, Container, Grid } from '@mui/material';
import LogoHeader from './components/LogoHeader';
import ButtonGroupHeader from './components/ButtonGroupHeader';
import HeaderMenu from './components/HeaderMenu';

export default function Header() {
  return (
    <Box
      sx={{
        width: '100%',
        height: '80px',
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          sx={{ height: '100%', borderBottom: '2px solid #28CE7E' }}
        >
          <LogoHeader />
          <HeaderMenu />
          <ButtonGroupHeader />
        </Grid>
      </Container>
    </Box>
  );
}
