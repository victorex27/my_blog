import  { FC } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ErrorBoundary from '../components/ErrorBoundary';
import LandingPage from '../pages/LandingPage';
import ResumePage from '../pages/ResumePage';
import ComingSoonPage from '../pages/ComingSoonPage';
import NotFoundPage from '../pages/NotFoundPage';

const AllRoutes: FC = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/resume' element={<ResumePage />} />
          <Route path='/project' element={<ComingSoonPage />} />
          <Route path='/about' element={<ComingSoonPage />} />
          <Route path='/blog' element={<ComingSoonPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default AllRoutes;
