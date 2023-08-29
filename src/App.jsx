import { Suspense, lazy } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import SpinnerFullPage from './ui/SpinnerFullPage';

const AppLayout = lazy(() => import('./ui/AppLayout'));
const Vacancies = lazy(() => import('./pages/Vacancies'));

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Suspense fallback={<SpinnerFullPage />}>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate to="/vacancies" replace />} />
              <Route path="vacancies" element={<Vacancies />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
