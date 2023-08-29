import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const LinkButton = styled(Link)`
  color: var(--color-brand-600);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default LinkButton;
