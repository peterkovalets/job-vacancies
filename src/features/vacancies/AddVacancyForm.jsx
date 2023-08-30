import { styled } from 'styled-components';
import { useForm } from 'react-hook-form';
import Button from '../../ui/Button';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1.2rem;
`;

function AddVacancyForm() {
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Название компании" error={errors?.companyName?.message}>
        <Input
          id="companyName"
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
          {...register('contact', {
            required: 'Это поле обязательное для заполнения',
          })}
        />
      </FormRow>
      <Buttons>
        <Button variant="outline" type="reset" onClick={reset}>
          Очистить
        </Button>
        <Button type="submit">Создать</Button>
      </Buttons>
    </Form>
  );
}

export default AddVacancyForm;
