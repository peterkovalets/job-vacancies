import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createVacancy as createVacancyApi } from '../../services/apiVacancies';

export function useCreateVacancy() {
  const navigate = useNavigate();

  const {
    mutate: createVacancy,
    isLoading: isCreating,
    error,
  } = useMutation({
    mutationFn: createVacancyApi,
    onSuccess: () => {
      toast.success('Вакансия успешно создана');
      navigate('/vacancies', {
        replace: true,
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { createVacancy, isCreating, error };
}
