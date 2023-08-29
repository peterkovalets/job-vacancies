import { Suspense, lazy } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import SpinnerFullPage from './ui/SpinnerFullPage';

const AppLayout = lazy(() => import('./ui/AppLayout'));
const Vacancies = lazy(() => import('./pages/Vacancies'));
const AddVacancy = lazy(() => import('./pages/AddVacancy'));
const PageNotFound = lazy(() => import('./pages/PageNotFound'));

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
              <Route path="add-vacancy" element={<AddVacancy />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
