import styled from 'styled-components';

export const ReviewContainer = styled.div`
  padding: 20px 0px;
`;

export const ReviewList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  list-style: none;
  margin: 0px;
  padding: 0px;
`;

export const ReviewItem = styled.li`
  padding: 20px;
  border: 2px solid black;
`;

export const ReviewAuthor = styled.p`
  color: black;
  font-size: 16px;
  font-weight: 500;
`;

export const ReviewContent = styled.p`
  color: black;
  font-size: 16px;
  font-weight: 400;
`;

export const ReviewMistake = styled.p`
  color: black;
  font-size: 24px;
  font-weight: 500;
  text-align: center;
`;
