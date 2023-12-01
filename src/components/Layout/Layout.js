import { Outlet } from 'react-router-dom';
import { NavLink, Container, List, Header } from './Layout.styled';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';
import { GlobalStyle } from 'components/GlobalStyle';



const Layout = () => {
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
        <Suspense fallback={<Loader/>}>
          <Outlet />
        </Suspense>
      </main>
      <GlobalStyle/>
    </Container>
  );
};

export default Layout;
