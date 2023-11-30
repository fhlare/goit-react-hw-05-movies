import styled from "styled-components";

export const CastContainer = styled.div`
  padding: 20px 0px;
`;

export const CastList = styled.ul`
  display: flex;
  list-style: none;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0px;
  padding: 0px;
`;

export const CastItem = styled.li`
  height: 400px;
  width: 200px;
  border-radius: 8px;
`;

export const ImgCast = styled.img`
  height: 300px;
  width: 200px;
  object-fit: cover;
  border-radius: 8px;
`;

export const CastName = styled.p`
  text-align: center;
  color: black;
  font-size: 16px;
  font-weight: 400;
`;

export const CastCharacter = styled.p`
  text-align: center;
  color: black;
  font-size: 16px;
  font-weight: 500;
`;