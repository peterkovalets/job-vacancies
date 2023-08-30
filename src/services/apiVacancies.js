import axios from './axios';

export async function getVacancies() {
  try {
    const { data } = await axios.get('/ads');
    return data;
  } catch {
    throw new Error('Не удалось получить вакансии');
  }
}
