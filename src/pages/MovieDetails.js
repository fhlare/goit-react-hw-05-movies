import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovie } from 'servers/api';
import { BASE_POSTER_URL } from 'imgLinks/imgLinks';

export default function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return;
    }
    async function getMovie() {
      try {
        const showMovie = await fetchMovie(movieId);
        setMovie(showMovie);
      } catch (error) {
        console.error(error);
      }
    }
    getMovie();
  }, [movieId]);
  return (
    <div>
      {movie !== null && (
        <div>
        <img
          src={`${BASE_POSTER_URL + movie.poster_path}`}
          alt={movie.title}
          width="300"
          />
          <div>
            <h1>{movie.title}</h1>
            <p>User score: {Math.round(movie.vote_average * 10)}%</p>
            <p>Overview</p>
            <p>{movie.overview}</p>
            <p>Genres</p>
            <p>{movie.genres.map(ganre => ganre.name).join(', ')}</p>
          </div>
        </div>
      )}
    </div>
  );
}
