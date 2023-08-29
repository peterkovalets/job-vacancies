import { styled } from 'styled-components';
import Container from './Container';
import MainNav from './MainNav';

const StyledHeader = styled.header`
  padding: 2rem;
  background-color: var(--color-gray-0);
  border-bottom: 1px solid var(--color-gray-200);
`;

function Header() {
  return (
    <StyledHeader>
      <Container>
        <MainNav />
      </Container>
    </StyledHeader>
  );
}

export default Header;
