import {Link as MovieLink}  from "react-router-dom";
import styled from "styled-components";

export const ListContainer = styled.div`
  margin: 0;
  padding: 40px 0px;
`;

export const List = styled.ul`
  display: flex;
  gap: 48px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`

export const Item = styled.li`
  width: 394px;
  height: 574px;
  border-radius: 8px;
`

export const ImgMovie = styled.img`
  width: 100%;
  height: 574px;
  border-radius: 8px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  ${Item}:hover &{
  transform: scale(1.03);
  cursor: pointer;
  }
`
export const MovieTitle = styled.h3`
  margin-top: 8px;
  padding: 0;
  text-align: center;
  color: gray;
`
export const Link = styled(MovieLink)`
  text-decoration: none;
`