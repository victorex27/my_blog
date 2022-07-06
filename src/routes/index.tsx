import React, { FC } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ErrorBoundary from '../components/ErrorBoundary';
import LandingPage from '../pages/LandingPage';
import ResumePage from '../pages/ResumePage';

const AllRoutes: FC = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/resume' element={<ResumePage />} />
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default AllRoutes;
