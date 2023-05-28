import { useState, useEffect } from 'react';
import { RouterProvider, createHashRouter } from 'react-router-dom';

import {
  SplashPage,
  HomePage,
  RootLayout,
  RobotPage,
  VelocityVoyagePage,
  TechTrendzPage,
  SociopediaPage,
} from './pages';
import { c } from './assets';

const App = () => {
  const [loading, setLoading] = useState(false);

  // This will run one time after the component mounts
  useEffect(() => {
    setLoading(true);
    // callback function to call when event triggers
    const onPageLoad = () => {
      setLoading(false);
    };

    // Check if the page has already loaded
    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
      const bgelement = document.getElementById('background-wallpaper');
      bgelement.addEventListener('load', onPageLoad, false);
      // Remove the event listener when component unmounts
      return () => bgelement.removeEventListener('load', onPageLoad);
    }
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
      {loading ? <SplashPage /> : <RouterProvider router={router} />}
    </div>
  );
};

export default App;
