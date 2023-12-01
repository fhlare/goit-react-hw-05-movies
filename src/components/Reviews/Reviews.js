import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'servers/api';
import { ReviewContainer, ReviewContent, ReviewItem, ReviewList, ReviewAuthor, ReviewMistake } from './Reviesws.styled';
import { Loader } from 'components/Loader/Loader';


const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLiading, setIsLoading] = useState(false);


  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return;
    }
    async function getReviews() {
      try {
        setIsLoading(true);
        const showRewiews = await fetchReviews(movieId);
        setReviews([...showRewiews.results]);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }

    getReviews();
  }, [movieId]);

  return (
    <ReviewContainer>
      {isLiading && (<Loader/>)}
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
        <ReviewMistake>We don`t have any reviews for this movie </ReviewMistake>
      )}
    </ReviewContainer>
  );
};

export default Reviews;