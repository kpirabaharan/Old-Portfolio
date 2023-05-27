import { useState, useEffect } from 'react';
import { RouterProvider, createHashRouter } from 'react-router-dom';

import { Landing } from './components';
import {
  HomePage,
  RootLayout,
  RobotPage,
  VelocityVoyagePage,
  TechTrendzPage,
  SociopediaPage,
} from './pages';

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    // Backup
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    window.addEventListener('load', () => {
      setLoading(false);
    });
  }, []);

  const router = createHashRouter([
    {
      path: '/',
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: 'projects/',
          element: <RootLayout />,
          children: [
            {
              path: 'robot',
              element: <RobotPage />,
            },
            {
              path: 'velocityvoyage',
              element: <VelocityVoyagePage />,
            },
            {
              path: 'techtrendz',
              element: <TechTrendzPage />,
            },
            {
              path: 'sociopedia',
              element: <SociopediaPage />,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <div className='app'>
      {loading ? (
        <Landing loading={loading} />
      ) : (
        <RouterProvider router={router} />
      )}
    </div>
  );
};

export default App;
