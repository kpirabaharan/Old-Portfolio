import { useState, useEffect } from 'react';
import { RouterProvider, createHashRouter } from 'react-router-dom';

import { SplashPage, HomePage } from './pages';

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log('Loading');
    setLoading(true);
    const onPageLoad = () => {
      console.log('Done Loading');
      setLoading(false);
    };

    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
      const bgelement = document.getElementById('background-wallpaper');
      if (bgelement) {
        bgelement.addEventListener('load', onPageLoad, false);
      } else {
        console.log('Else');
        return setLoading(false);
      }
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
