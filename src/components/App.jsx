import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';
import { Layout } from './Layout/Layout';
import { Cast } from './Cast/Cast';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} >
            <Route path="cast" element={<Cast/>} />
            <Route path="reviews" element={<div>Reviews</div>}/>
          </Route>
        </Route>
      </Routes>
      <GlobalStyle />
    </div>
  );
};
