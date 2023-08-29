import { Link } from 'react-router-dom';
import Row from '../ui/Row';
import VacancyList from '../features/vacancies/VacancyList';
import Button from '../ui/Button';

function Vacancies() {
  return (
    <Row>
      <Row type="horizontal">
        <h1>Вакансии</h1>
        <Button as={Link} to="/add-vacancy">
          Создать вакансию
        </Button>
      </Row>
      <VacancyList />
    </Row>
  );
}

export default Vacancies;
