import { styled } from 'styled-components';
import Empty from '../../ui/Empty';
import Spinner from '../../ui/Spinner';
import VacancyItem from './VacancyItem';
import Error from '../../ui/Error';
import { useVacancies } from './useVacancies';

const StyledVacancyList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

function VacancyList() {
  const { vacancies, isLoading, error } = useVacancies();

  if (isLoading) return <Spinner />;

  if (error) return <Error>{error.message}</Error>;

  if (vacancies.length === 0) return <Empty resourceName="Вакансий" />;

  return (
    <StyledVacancyList>
      {vacancies.map((vacancy) => (
        <VacancyItem vacancy={vacancy} key={vacancy.id} />
      ))}
    </StyledVacancyList>
  );
}

export default VacancyList;
