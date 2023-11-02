import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App';
import Error from './pages/ErrorPage';
import Portfolio from './pages/PortfolioPage';
import Contact from './pages/ContactPage';
import About from './pages/AboutPage';
import Resume from './pages/ResumePage';

const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <About />,
        },
        {
          path: '/Portfolio',
          element: <Portfolio />,
        },
        {
          path: '/Contact',
          element: <Contact />,
        },
        {
          path: '/Resume',
          element: <Resume />,
        },
      ],
    },
  ]);
  
  ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
  );
  