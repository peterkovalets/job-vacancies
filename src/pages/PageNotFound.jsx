import { styled } from 'styled-components';
import LinkButton from '../ui/LinkButton';
import { useMoveBack } from '../hooks/useMoveBack';

const StyledPageNotFound = styled.main`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const Headings = styled.div`
  text-align: center;
`;

function PageNotFound() {
  const moveBack = useMoveBack();

  return (
    <StyledPageNotFound>
      <Headings>
        <h1>Ошибка 404!</h1>
        <h2>Страница не найдена</h2>
      </Headings>
      <LinkButton onClick={moveBack}>&larr; Вернуться назад</LinkButton>
    </StyledPageNotFound>
  );
}

export default PageNotFound;
