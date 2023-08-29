import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';

import AppLayout from './ui/AppLayout';
import Vacancies from './pages/Vacancies';

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate to="/vacancies" replace />} />
            <Route path="vacancies" element={<Vacancies />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
