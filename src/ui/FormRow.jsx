import { styled } from 'styled-components';

const StyledFormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const Label = styled.label`
  color: var(--color-gray-600);
  font-weight: 500;
`;

const Error = styled.span`
  color: var(--color-red-600);
  text-align: center;
`;

function FormRow({ children, label, error }) {
  return (
    <StyledFormRow>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

export default FormRow;
