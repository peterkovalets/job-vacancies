import { styled } from 'styled-components';
import Button from '../../ui/Button';
import TextExpander from '../../ui/TextExpander';
import Modal from '../../ui/Modal';
import ConfirmDelete from '../../ui/ConfirmDelete';
import { useDeleteVacancy } from './useDeleteVacancy';

const StyledVacancyItem = styled.li`
  padding: 1.6rem 3.2rem;
  background-color: var(--color-gray-0);
  border: 1px solid var(--color-gray-200);
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

function VacancyItem({ vacancy }) {
  const { deleteVacancy, isDeleting } = useDeleteVacancy();
  const { id, companyName, body, contact } = vacancy;

  return (
    <StyledVacancyItem>
      <ItemContent>
        <h3>{companyName}</h3>
        <TextExpander collapsedNumWords={50}>{body}</TextExpander>
        <Contact>{contact}</Contact>
      </ItemContent>
      {/* <Button
        size="small"
        variant="danger"
        onClick={}
        disabled={isDeleting}
        >
        Удалить
      </Button> */}
      <Modal>
        <Modal.Open opens="delete">
          <Button size="small" variant="danger" disabled={isDeleting}>
            Удалить
          </Button>
        </Modal.Open>

        <Modal.Window name="delete">
          <ConfirmDelete
            resourceName={companyName}
            onConfirm={() => deleteVacancy(id)}
            disabled={isDeleting}
          />
        </Modal.Window>
      </Modal>
    </StyledVacancyItem>
  );
}

export default VacancyItem;
