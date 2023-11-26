
import { useEffect, useState  } from "react";
import { Link } from "react-router-dom";
import { fetchTrend } from "servers/api";

export default function Home() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    async function getTrendMovies() {
      try {
        const showTrend = await fetchTrend();
        console.log(...showTrend.results);
        setMovies([ ...showTrend.results])
      } catch (error) {
        console.error(error);
      }
    }
    getTrendMovies();
  }, [])

  return (
    <div>
      <ul>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                <p>{movie.title}</p>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  );
}