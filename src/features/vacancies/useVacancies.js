import { useQuery } from '@tanstack/react-query';
import { getVacancies } from '../../services/apiVacancies';

export function useVacancies() {
  const { data: vacancies, isLoading } = useQuery({
    queryKey: ['vacancies'],
    queryFn: getVacancies,
  });

  return { vacancies, isLoading };
}
