import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { getVacancies } from '../../services/apiVacancies';

export function useVacancies() {
  const {
    data: vacancies,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['vacancies'],
    queryFn: getVacancies,
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { vacancies, isLoading, error };
}
