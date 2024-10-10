import {CesiumMap} from './components/CesiumMap';
import './App.css'
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './utils/queryClient';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <CesiumMap />,
      // errorElement: <ErrorPage />,
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>  
        <RouterProvider router={router} />
    </QueryClientProvider>

  );
};

export default App
