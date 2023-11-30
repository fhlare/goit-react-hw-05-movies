import { MoviesList } from 'components/MoviesList/MoviesList';
import { Formik } from 'formik';
import { useEffect, useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesByName } from 'servers/api';
import { Field, Form, SearchFormButton } from './Movies.styled';

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);

  const query = searchParams.get('query');
  useEffect(() => {
    if (!query) {
      return;
    }

    async function getMoviesByName() {
      try {
        const showMovieByName = await fetchMoviesByName(query);
        setMovies([...showMovieByName.results]);
      } catch (error) {
        console.error(error);
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
      <MoviesList movies={movies} />
    </>
  );
}
