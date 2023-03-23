import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from './components/';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [],
  },
]);

const App = () => {
  return (
    <div className='app'>
      <RouterProvider />
    </div>
  );
};

export default App;
