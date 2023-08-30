import { styled } from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import Button from './Button';

const StyledErrorFallback = styled.main`
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & h1 {
    margin-bottom: 0.6rem;
  }

  & p {
    margin-bottom: 3.2rem;
    color: var(--color-gray-500);
  }
`;

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <>
      <GlobalStyles />
      <StyledErrorFallback>
        <Box>
          <h1>Что-то пошло не так</h1>
          <p>{error.message}</p>
          <Button onClick={resetErrorBoundary}>Попробовать ещё раз</Button>
        </Box>
      </StyledErrorFallback>
    </>
  );
}

export default ErrorFallback;
