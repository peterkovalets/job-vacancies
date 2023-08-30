import { styled } from 'styled-components';
import { useForm } from 'react-hook-form';
import Button from '../../ui/Button';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import { useCreateVacancy } from './useCreateVacancy';

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1.2rem;
`;

function AddVacancyForm() {
  const { createVacancy, isCreating } = useCreateVacancy();
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;

  function onSubmit(data) {
    createVacancy(data, {
      onSettled: () => reset(),
    });
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Название компании" error={errors?.companyName?.message}>
        <Input
          id="companyName"
          disabled={isCreating}
          {...register('companyName', {
            required: 'Это поле обязательное для заполнения',
          })}
        />
      </FormRow>
      <FormRow label="Описание" error={errors?.body?.message}>
        <Input
          as="textarea"
          rows="10"
          id="body"
          disabled={isCreating}
          {...register('body', {
            required: 'Это поле обязательное для заполнения',
          })}
        />
      </FormRow>
      <FormRow
        label="Обратная свзять (почта или номер телефона)"
        error={errors?.contact?.message}
      >
        <Input
          id="contact"
          disabled={isCreating}
          {...register('contact', {
            required: 'Это поле обязательное для заполнения',
          })}
        />
      </FormRow>
      <Buttons>
        <Button
          variant="outline"
          type="reset"
          onClick={reset}
          disabled={isCreating}
        >
          Очистить
        </Button>
        <Button type="submit" disabled={isCreating}>
          Создать
        </Button>
      </Buttons>
    </Form>
  );
}

export default AddVacancyForm;
