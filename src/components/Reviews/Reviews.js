import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'servers/api';
import { ReviewContainer, ReviewContent, ReviewItem, ReviewList, ReviewAuthor, ReviewMistake } from './Reviesws.styled';

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
    <ReviewContainer>
      {reviews.length > 0 ? (
        <ReviewList>
          {reviews.map(({ id, author, content }) => {
            return (
              <ReviewItem key={id}>
                <ReviewAuthor>Author: {author}</ReviewAuthor>
                <ReviewContent>{content}</ReviewContent>
              </ReviewItem>
            );
          })}
        </ReviewList>
      ) : (
        <ReviewMistake>We don`t have any reviews for this film</ReviewMistake>
      )}
    </ReviewContainer>
  );
};
