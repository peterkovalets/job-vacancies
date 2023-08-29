import axios from './axios';

export async function getVacancies() {
  const { data } = await axios.get('/ads');
  return data;
}
