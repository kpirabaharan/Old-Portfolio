import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { HomePage } from './pages';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
      // children: [
      //   {
      //     path: 'projects',
      //     element: <ProductPage />,
      //   },
      // ],
    },
  ]);

  return (
    <div className='app'>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
