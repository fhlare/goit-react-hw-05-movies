import { MoviesList } from "components/MoviesList/MoviesList";
import { useEffect, useState  } from "react";
import { fetchTrend } from "servers/api";
import { HomeTitle } from "./Home.styled";

export default function Home() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    async function getTrendMovies() {
      try {
        const showTrend = await fetchTrend();
        console.log(...showTrend.results);
        setMovies([...showTrend.results]);
      } catch (error) {
        console.error(error);
      }
    }
    getTrendMovies();
  }, [])

  return (
    <>
      <HomeTitle>Trending today</HomeTitle>
      <MoviesList movies={movies} />
    </>
  );
}