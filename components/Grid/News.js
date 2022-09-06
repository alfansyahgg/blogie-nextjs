import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
const News = () => {
  return (
    <Grid container spacing={2}>
      <Grid xs={8}>
        <Item>xs=8</Item>
      </Grid>
      <Grid xs={4}>
        <Item>xs=4</Item>
      </Grid>
      <Grid xs={4}>
        <Item>xs=4</Item>
      </Grid>
      <Grid xs={8}>
        <Item>xs=8</Item>
      </Grid>
    </Grid>
  );
};

export default News;
