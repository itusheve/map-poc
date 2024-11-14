import { QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "jotai/react";
import { useTranslation } from "react-i18next";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home } from "./Pages/Home/Home";
import { ToolsEligibility } from "./Pages/ToolsEligibility/ToolsEligibility";
import { HydrateAtoms, queryClient } from "./utils/queryClient";
import { Itamar } from "./Pages/itamar/Itamar";

export function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Home />,
			// errorElement: <ErrorPage />,
		},
    {
      path: '/itamar',
      element: <Itamar/>
    },
		{
			path: "/tools-eligibility", // maybe te as a short end but not sure
			element: <ToolsEligibility />
		},
		{
			path: '/operational-command', // maybe op as a short end but not sure
			element: <OperationalCommandPage />
		}
	]);
	const { i18n } = useTranslation();

	return (
		<QueryClientProvider client={queryClient}>
			<Provider>
				<HydrateAtoms>
					<div dir={`${i18n.dir()}`}>
						<RouterProvider router={router} />
					</div>
				</HydrateAtoms>
			</Provider>
			{/* <ReactQueryDevtools /> */}
		</QueryClientProvider>
	);
}
