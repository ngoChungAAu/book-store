import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';
import Item from 'app/components/Item';
import _ from 'lodash';

interface Props {
  title: string;
  list: any;
}

export default function List(props: Props) {
  return (
    <ListWrapper>
      <Typography component="h2">{props.title}</Typography>
      <Grid container spacing={8}>
        {props.list.map((e, i) => (
          <Grid
            key={i}
            item
            xs={6}
            sm={4}
            lg={3}
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <Item
              id={e.id}
              image={!_.isEmpty(e.images[0]?.link) ? e.images[0].link : ''}
              title={e.title}
              author={e.author}
              price={e.price}
            />
          </Grid>
        ))}
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
