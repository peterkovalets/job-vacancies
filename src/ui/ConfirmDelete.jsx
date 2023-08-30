import { styled } from 'styled-components';
import Button from './Button';

const StyledConfirmDelete = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & p {
    margin-bottom: 1.2rem;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.8rem;
`;

function ConfirmDelete({ resourceName, onConfirm, disabled, closeModal }) {
  return (
    <StyledConfirmDelete>
      <h2>Удаление {resourceName}</h2>
      <p>
        Вы уверены что хотите удалить {resourceName}? В будущем это действие
        нельзя будет отменить.
      </p>
      <Buttons>
        <Button variant="outline" onClick={closeModal} disabled={disabled}>
          Отмена
        </Button>
        <Button variant="danger" onClick={onConfirm} disabled={disabled}>
          Удалить
        </Button>
      </Buttons>
    </StyledConfirmDelete>
  );
}

export default ConfirmDelete;
