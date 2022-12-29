import { NotFound } from 'components';
import { Dashboard, Devices, Home, Layout, Report, Tags } from 'pages';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'antd/dist/reset.css';
import './App.css';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Dashboard />,
        },
        {
          path: '/home',
          element: <Home />,
        },
        {
          path: '/devices',
          element: <Devices />,
        },
        {
          path: '/tags',
          element: <Tags />,
        },
        {
          path: '/report',
          element: <Report />,
        },
      ],
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
export default App;
