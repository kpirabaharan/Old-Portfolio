import { useState, useEffect } from 'react';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import AnimatedCursor from 'react-animated-cursor';

import {
  SplashPage,
  HomePage,
  RootLayout,
  RobotPage,
  VelocityVoyagePage,
  TechTrendzPage,
  SociopediaPage,
  PartCollectingRobotPage,
  PathFollowingRobotPage,
} from './pages';

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
            {
              path: 'part-collecting-robot',
              element: <PartCollectingRobotPage />,
            },
            {
              path: 'path-following-robot',
              element: <PathFollowingRobotPage />,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <div className='app'>
      <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color='68, 139, 156'
        outerAlpha={0.35}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          'a',
          'Link',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link',
        ]}
      />
      {loading ? <SplashPage /> : <RouterProvider router={router} />}
    </div>
  );
};

export default App;
