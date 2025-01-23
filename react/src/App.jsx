// third party
import { RouterProvider } from 'react-router-dom';

// project imports
import router from 'routes';

// -----------------------|| APP ||-----------------------//

export default function App() {
  return <RouterProvider router={router} />;
}
