import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { deleteVacancy as deleteVacancyApi } from '../../services/apiVacancies';

export function useDeleteVacancy() {
  const queryClient = useQueryClient();

  const {
    mutate: deleteVacancy,
    isLoading: isDeleting,
    error,
  } = useMutation({
    mutationFn: deleteVacancyApi,
    onSuccess: () => {
      toast.success('Вакасия успешно удалена');
      queryClient.invalidateQueries(['vacancies']);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { deleteVacancy, isDeleting, error };
}
