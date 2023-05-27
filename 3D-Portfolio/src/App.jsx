import { useState, useEffect } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

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
    window.addEventListener('load', () => {
      setLoading(false);
    });
    // Backup
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const router = createBrowserRouter([
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
