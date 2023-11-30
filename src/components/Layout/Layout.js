import { Outlet } from "react-router-dom";
import { NavLink, Container, List, Header } from "./Layout.styled";

export const Layout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <List>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/movies">Movies</NavLink>
            </li>
          </List>
        </nav>
      </Header>
      <main>
        <Outlet/>
      </main>
    </Container>
  );
};
