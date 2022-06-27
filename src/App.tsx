import React, { Suspense } from 'react';
import GlobalStyle from './styles/global';
const AllRoutes = React.lazy(() => import('./routes'));

const App: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GlobalStyle />
      <AllRoutes />
    </Suspense>
  );
};

export default App;
