import { Box, Container } from '@mui/system';
import Grid from '@mui/material/Unstable_Grid2';
import Head from 'next/head';
import HomeLayout from '../components/Layouts/HomeLayout';
import CardNews from '../components/Card/News';
import CardSkeleton from '../components/Card/Skeleton';
import { useEffect, useState } from 'react';
var _ = require('lodash');

export default function Home() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          'https://the-lazy-media-api.vercel.app/api/tech'
        );
        const json = await response.json();
        await setNews(json);
        await setLoading(false);
      } catch (error) {
        console.log('error', error);
      }
    };
    fetchData();
  }, []);

  return (
    <HomeLayout>
      <Container maxWidth="lg" sx={{ my: 4 }}>
        <Grid container spacing={2}>
          {loading
            ? _.range(1, 7).map((i, index) => (
                <Box key={index} sx={{ width: 345, marginRight: 0.5, my: 5 }}>
                  <CardSkeleton />
                </Box>
              ))
            : _.map(news, (item, index) => (
                <Grid xs={4} key={index}>
                  <CardNews item={item} />
                </Grid>
              ))}
        </Grid>
      </Container>
    </HomeLayout>
  );
}
