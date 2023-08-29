import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../../ui/Button';
import TextExpander from '../../ui/TextExpander';

const StyledVacancyItem = styled.li`
  padding: 1.6rem 3.2rem;
  background-color: var(--color-gray-0);
  border: 2px solid var(--color-gray-200);
  border-radius: var(--border-radius-sm);

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 4.8rem;
`;

const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const Contact = styled.address`
  font-style: normal;
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

function VacancyItem({ vacancy }) {
  const { id, companyName, body, contact } = vacancy;

  return (
    <StyledVacancyItem>
      <ItemContent>
        <h3>{companyName}</h3>
        <TextExpander collapsedNumWords={50}>{body}</TextExpander>
        <Contact>{contact}</Contact>
      </ItemContent>
      <Buttons>
        <Button size="small" as={Link} to={`/vacancies/${id}`}>
          Подробнее
        </Button>
        <Button size="small" variant="danger">
          Удалить
        </Button>
      </Buttons>
    </StyledVacancyItem>
  );
}

export default VacancyItem;
