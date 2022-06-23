import React, { FC } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';

const AllRoutes: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;
