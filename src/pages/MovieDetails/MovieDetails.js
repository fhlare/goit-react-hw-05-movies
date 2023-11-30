import { useEffect, useState } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { fetchMovie } from 'servers/api';
import { BASE_POSTER_URL, DEFAULT_POSTER } from 'imgLinks/imgLinks';
import { Container, Div, ImgMovies, NavDiv, NavList, NavLink } from './MovieDetails.styled';

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
    <>
      {movie !== null && (
        <Container>
          <Div>
            <ImgMovies
              src={`${
                movie.poster_path
                  ? BASE_POSTER_URL + movie.poster_path
                  : DEFAULT_POSTER
              }`}
              alt={movie.title}
              width="300"
            />
            <div>
              <div>
                <h1>{movie.title}</h1>
                <h2>User score: {Math.round(movie.vote_average * 10)}%</h2>
                <h3>Overview</h3>
                <p>{movie.overview}</p>
                <h3>Genres</h3>
                <p>{movie.genres.map(ganre => ganre.name).join(', ')}</p>
              </div>
            </div>
          </Div>
          <NavDiv>
            <nav>
              <NavList>
                <li>
                  <NavLink to="cast">Cast</NavLink>
                </li>
                <li>
                  <NavLink to="reviews">Reviews</NavLink>
                </li>
              </NavList>
            </nav>
          </NavDiv>
          <Outlet />
        </Container>
      )}
    </>
  );
}
