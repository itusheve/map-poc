import { CesiumMap } from "./CesiumMap";
import { HomeMapOverlay } from "./components/HomeMapOverlay";
import { TopMenu } from "./components/TopMenu";

export function Home() {
	return (
		<div className="relative flex h-screen flex-col">
			<TopMenu />
			<CesiumMap />
			<HomeMapOverlay />
		</div>
	);
}
