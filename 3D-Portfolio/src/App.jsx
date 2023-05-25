import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import {
  HomePage,
  RootLayout,
  RobotPage,
  VelocityVoyagePage,
  TechTrendzPage,
  SociopediaPage,
} from './pages';

const App = () => {
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
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
