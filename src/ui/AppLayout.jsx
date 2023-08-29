import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';
import Header from './Header';
import Container from './Container';

const Main = styled.main`
  padding: 4rem 0 6.4rem;
`;

function AppLayout() {
  return (
    <>
      <Header />

      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </>
  );
}

export default AppLayout;
