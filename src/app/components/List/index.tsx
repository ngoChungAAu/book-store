import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';
import Item from 'app/components/Item';

export default function List() {
  return (
    <ListWrapper>
      <Typography component="h2">Sách mới</Typography>
      <Grid container spacing={6}>
        <Grid item xs={6} sm={4} lg={3}>
          <Item />
        </Grid>
        <Grid item xs={6} sm={4} lg={3}>
          <Item />
        </Grid>
        <Grid item xs={6} sm={4} lg={3}>
          <Item />
        </Grid>
        <Grid item xs={6} sm={4} lg={3}>
          <Item />
        </Grid>
      </Grid>
    </ListWrapper>
  );
}

const ListWrapper = styled(Box)(({ theme }) => ({
  marginTop: '150px',
  marginBottom: '50px',

  '& > h2': {
    marginBottom: '50px',
    textAlign: 'center',
    fontSize: '36px',
    lineHeight: '48px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },

  '& .MuiGrid-item': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));
