import { QueryClient } from "@tanstack/react-query";
import { queryClientAtom } from "jotai-tanstack-query";
import { useHydrateAtoms } from "jotai/react/utils";

// Create a client
export const queryClient = new QueryClient();
interface HydrateAtomsProps {
	children: React.ReactNode;
}

export const HydrateAtoms = ({ children }: HydrateAtomsProps) => {
	useHydrateAtoms([[queryClientAtom, queryClient]]);
	return children;
};
