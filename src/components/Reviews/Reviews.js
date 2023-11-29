import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'servers/api';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return;
    }
    async function getReviews() {
      try {
        const showRewiews = await fetchReviews(movieId);

        setReviews([...showRewiews.results]);
      } catch (error) {
        console.error(error);
      }
    }

    getReviews();
  }, [movieId]);

  return (
    <div>
      {reviews ? (
        <ul>
          {reviews.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <p>Author: {author}</p>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        'We don`t have any reviews for this film'
      )}
    </div>
  );
};
