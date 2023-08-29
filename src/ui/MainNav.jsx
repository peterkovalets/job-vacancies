import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

const Item = styled.li`
  font-weight: 500;
`;

const Link = styled(NavLink)`
  color: var(--color-gray-500);
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: var(--color-gray-700);
  }

  &.active {
    color: var(--color-gray-700);
  }
`;

function MainNav() {
  return (
    <nav>
      <List>
        <Item>
          <Link to="/vacancies">Все вакансии</Link>
        </Item>
        <Item>
          <Link to="/add-vacancy">Создать вакансию</Link>
        </Item>
      </List>
    </nav>
  );
}

export default MainNav;
