import { Box } from '@mui/material';
import Feature from 'app/components/Feature';
import { OneColumnLayout } from 'app/components/Layout';
import List from 'app/components/List';
import Slide from 'app/components/Slide';
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
        <Box sx={{ width: '100%' }}>
          <Slide />
          <Feature />
          <List />
          <List />
        </Box>
      </OneColumnLayout>
    </>
  );
}
