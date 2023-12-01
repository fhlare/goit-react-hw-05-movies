import { MoviesList } from 'components/MoviesList/MoviesList';
import { Formik } from 'formik';
import { useEffect, useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesByName } from 'servers/api';
import { Field, Form, SearchFormButton } from './Movies.styled';
import { Loader } from 'components/Loader/Loader';
import toast, { Toaster } from 'react-hot-toast';

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [isLiading, setIsLoading] = useState(false);

  const query = searchParams.get('query');
  useEffect(() => {
    if (!query) {
      return;
    }

    async function getMoviesByName() {
      try {
        setIsLoading(true);
        const showMovieByName = await fetchMoviesByName(query);
        if (showMovieByName.results.length > 0) {
          setMovies([...showMovieByName.results]);
        } else {
          toast.error(
            'Oops! No movies found for this search. Try search again'
          );
          setMovies([]);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
    getMoviesByName();
  }, [query]);

  return (
    <>
      <Formik
        initialValues={{
          text: '',
        }}
        onSubmit={(values, actions) => {
          actions.resetForm();
          setSearchParams({ query: values.text });
        }}
      >
        <Form>
          <SearchFormButton type="submit">
            <IoIosSearch />
          </SearchFormButton>
          <Field name="text" type="text" placeholder="Search movie" />
        </Form>
      </Formik>
      {isLiading && <Loader />}
      <MoviesList movies={movies} />
      <Toaster
        position="top-right"
        toastOptions={{
          success: {
            duration: 3000,
            theme: {
              primary: 'green',
              secondary: 'black',
            },
          },
        }}
      />
    </>
  );
}
