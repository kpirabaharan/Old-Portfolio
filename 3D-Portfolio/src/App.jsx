import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { HomePage, RootLayout, TechTrendzPage } from './pages';

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
              path: 'techtrendz',
              element: <TechTrendzPage />,
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
