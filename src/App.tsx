import {CesiumMap} from './Pages/Home/CesiumMap';
import './App.css'
import { QueryClientProvider } from '@tanstack/react-query';
import { HydrateAtoms, queryClient } from './utils/queryClient';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Test } from './components/test';
import { Provider } from 'jotai/react'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <CesiumMap />,
      // errorElement: <ErrorPage />,
    },
    {
      path: "/test",
      element: <Test />,
      // errorElement: <ErrorPage />,
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <Provider>
        <HydrateAtoms>

          <RouterProvider router={router} />
        </HydrateAtoms>
      </Provider>
      <ReactQueryDevtools />
    </QueryClientProvider>

  );
}

export default App
