import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const ImgMovies = styled.img`
  width: 394px;
  height: 574px;
  border-radius: 8px;
`;

export const Container = styled.div`
  margin: 0;
  padding: 40px 0px;
`;

export const Div = styled.div`
  display: flex;
  gap: 48px;
`;

export const NavDiv = styled.div`
  padding: 16px;
  margin-top: 16px;
  margin-bottom: 16px;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  gap: 16px;
  margin: 0px;
  padding: 0px;
`;

export const NavLink = styled(Link)`
  padding: 8px 16px;
  text-decoration: none;
  color: black;
  font-size: 16px;
  font-weight: 500;
  border-radius: 4px;

  &.active {
    color: white;
    background-color: orangered;
  }
`;
