import { BASE_POSTER_URL, DEFAULT_POSTER } from 'imgLinks/imgLinks';
import { Link, MovieTitle, ImgMovie, Item, List, ListContainer } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  return (
    <ListContainer>
      <List>
        {movies.map(({ id, title, poster_path }) => {
          return (
            <Item key={id}>
              <Link to={`/movies/${id}`}>
                <ImgMovie
                  src={`${
                    poster_path ? BASE_POSTER_URL + poster_path : DEFAULT_POSTER
                  }`}
                  alt={title}
                />
                <MovieTitle>{title}</MovieTitle>
              </Link>
            </Item>
          );
        })}
      </List>
    </ListContainer>
  );
};
