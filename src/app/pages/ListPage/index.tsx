import React from 'react';
import { OneColumnLayout } from 'app/components/Layout';
import { Box, Grid } from '@mui/material';
import { TitleList, WrapperList } from './style';
import SearchList from './components/SearchList';
import SelectList from './components/SelectList';
import Item from 'app/components/Item';
import { Helmet } from 'react-helmet-async';

const listSelect = [
  { value: '0', label: 'Newest' },
  { value: '1', label: 'Oldest' },
  { value: '2', label: 'Highest Price' },
  { value: '3', label: 'Lowest Price' },
];

export function ListPage() {
  const [sort, setSort] = React.useState('0');
  const [search, setSearch] = React.useState('');

  return (
    <>
      <Helmet>
        <title>Truyện tranh</title>
      </Helmet>
      <OneColumnLayout>
        <Box sx={{ mt: '50px' }}>
          <TitleList>Truyện tranh</TitleList>
          <WrapperList>
            <Box
              sx={{
                display: 'flex',
                gap: '30px',
                justifyContent: 'flex-end',
                mb: '70px',
              }}
            >
              <SearchList setValue={setSearch} />
              <SelectList list={listSelect} setValue={setSort} />
            </Box>

            <Grid container spacing={8}>
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, , 1, 2, 3, 4, 5, 6, 7, 8, 9].map(
                (e, i) => (
                  <Grid
                    key={i}
                    item
                    xs={6}
                    sm={4}
                    lg={3}
                    sx={{ display: 'flex', justifyContent: 'center' }}
                  >
                    <Item />
                  </Grid>
                ),
              )}
            </Grid>
          </WrapperList>
        </Box>
      </OneColumnLayout>
    </>
  );
}
