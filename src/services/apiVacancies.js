import axios from './axios';

export async function getVacancies() {
  try {
    const { data } = await axios.get('/ads');
    return data;
  } catch {
    throw new Error('Не удалось получить вакансии');
  }
}

export async function createVacancy(newVacancy) {
  try {
    const { data } = await axios.post('/ads/save', newVacancy);
    return data;
  } catch {
    throw new Error('Не удалось создать вакансию');
  }
}
