import React, { Suspense } from 'react';
// import AllRoutes from './routes';
const AllRoutes = React.lazy(() => import('./routes'));

const App: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AllRoutes />
    </Suspense>
  );
};

export default App;
