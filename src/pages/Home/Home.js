import { MoviesList } from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { fetchTrend } from 'servers/api';
import { HomeTitle } from './Home.styled';

import { Loader } from 'components/Loader/Loader';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [isLiading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getTrendMovies() {
      try {
        setIsLoading(true);
        const showTrend = await fetchTrend();

        setMovies([...showTrend.results]);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
    getTrendMovies();
  }, []);

  return (
    <>
      <HomeTitle>Trending today</HomeTitle>
      {isLiading && (<Loader/>)}
      <MoviesList movies={movies} />
    </>
  );
}
