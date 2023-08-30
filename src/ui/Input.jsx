import { styled } from 'styled-components';

const Input = styled.input`
  padding: 1rem 1.6rem;
  background-color: var(--color-gray-0);
  color: var(--color-gray-800);
  font-size: 2rem;
  border: 1px solid var(--color-gray-300);
  resize: none;

  &:disabled {
    background-color: var(--color-gray-200);
  }
`;

export default Input;
