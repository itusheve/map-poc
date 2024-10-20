import {CesiumMap} from './Pages/Home/CesiumMap';
import './App.css'
import { QueryClientProvider } from '@tanstack/react-query';
import { HydrateAtoms, queryClient } from './utils/queryClient';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'jotai/react'
import { ToolsEligibility } from './Pages/ToolsEligibility/ToolsEligibility';
import { useTranslation } from 'react-i18next';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <CesiumMap />,
      // errorElement: <ErrorPage />,
    },
    {
      path: '/tools-eligibility',
      element: <ToolsEligibility />
    }
  ]);
  const { i18n } = useTranslation();
  return (
    <QueryClientProvider client={queryClient}>
      <Provider>
        <HydrateAtoms>
          <div className={`${i18n.language === 'he' ? 'rtl' : 'ltr'}`} dir={`${i18n.language === 'he' ? 'rtl' : 'ltr'}`}>
            <RouterProvider router={router} />
          </div>
        </HydrateAtoms>
      </Provider>
      {/* <ReactQueryDevtools /> */}
    </QueryClientProvider>

  );
}

export default App
