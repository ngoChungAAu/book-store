/**
 *
 * OneColumnLayout
 *
 */
import { Box, Container, Grid } from '@mui/material';
import Header from 'app/components/Header';
import * as React from 'react';

export function OneColumnLayout({ children }) {
  return (
    <>
      <Header />
      <Container maxWidth="xl">{children}</Container>
    </>
  );
}
