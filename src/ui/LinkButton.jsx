import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const LinkButton = styled(Link)`
  background: none;
  color: var(--color-brand-600);
  border: none;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default LinkButton;
