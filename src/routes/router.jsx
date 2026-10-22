import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Movies from '../pages/Movies';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/movies',
    element: <Movies />,
  },
]);

export default router;
