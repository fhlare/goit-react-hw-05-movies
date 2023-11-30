import styled from 'styled-components';
import {NavLink as PagesLink} from "react-router-dom";
export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 20px 40px;
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  gap: 16px;
  margin: 0px;
  pad: 0px;
`;

export const Header = styled.header`
  padding: 16px 0px;
  margin-bottom: 16px;
  border-bottom: 2px solid black;
`

export const NavLink = styled(PagesLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`

