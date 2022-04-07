import { Box } from '@mui/material';
import { OneColumnLayout } from 'app/components/Layout';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <OneColumnLayout>
        <Box sx={{ width: '100%' }}></Box>
      </OneColumnLayout>
    </>
  );
}
