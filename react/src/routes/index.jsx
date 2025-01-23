import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

// project import
import MainRoutes from './MainRoutes';
import AdminLayout from 'layouts/AdminLayout';

// render - landing page
const DashboardSales = lazy(() => import('../views/dashboard/DashSales/index'));

// ==============================|| ROUTING RENDER ||============================== //

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <AdminLayout />,
      children: [
        {
          index: true,
          element: <DashboardSales />
        }
      ]
    },
    MainRoutes
  ],
  { basename: import.meta.env.VITE_APP_BASE_NAME }
);

export default router;
