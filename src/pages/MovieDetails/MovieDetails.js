import { Suspense, useEffect, useRef, useState } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { fetchMovie } from 'servers/api';
import { BASE_POSTER_URL, DEFAULT_POSTER } from 'imgLinks/imgLinks';
import {
  Container,
  Div,
  ImgMovies,
  NavDiv,
  NavList,
  NavLink,
  GoBackLink,
} from './MovieDetails.styled';
import { Loader } from 'components/Loader/Loader';

export default function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLink = useRef(location);
  const [isLiading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!movieId) {
      return;
    }
    async function getMovie() {
      try {
        setIsLoading(true);
        const showMovie = await fetchMovie(movieId);
        setMovie(showMovie);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
    getMovie();
  }, [movieId]);

  return (
    <>
      <GoBackLink to={backLink.current.state?.from ?? '/'}>Go back</GoBackLink>
      {isLiading && <Loader />}

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
            <h3>Additional information</h3>
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
          <Suspense fallback={<Loader/>}>
            <Outlet />
          </Suspense>
        </Container>
      )}
    </>
  );
}
