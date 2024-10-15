import {CesiumMap} from './Pages/Home/CesiumMap';
import './App.css'
import { QueryClientProvider } from '@tanstack/react-query';
import { HydrateAtoms, queryClient } from './utils/queryClient';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Test } from './components/test';
import { Provider } from 'jotai/react'
import { ToolsEligibility } from './Pages/ToolsEligibility/ToolsEligibility';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

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
    {
      path: '/tools-eligibility',
      element: <ToolsEligibility />
    }
  ]);

  const { i18n } = useTranslation();

    // Change direction when language is switched
    useEffect(() => {
        const currentLang = i18n.language;

        if (currentLang === 'he') {
            document.documentElement.setAttribute('dir', 'rtl'); // Set dir to 'rtl' for Hebrew
        } else {
            document.documentElement.setAttribute('dir', 'ltr'); // Set dir to 'ltr' for English and other LTR languages
        }
    }, [i18n.language]);  // Listen to language changes

  return (
    <QueryClientProvider client={queryClient}>
      <Provider>
        <HydrateAtoms>

          <RouterProvider router={router} />
        </HydrateAtoms>
      </Provider>
      {/* <ReactQueryDevtools /> */}
    </QueryClientProvider>

  );
}

export default App
