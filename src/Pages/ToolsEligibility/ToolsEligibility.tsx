// import { useTranslation } from "react-i18next";

import { TrackSelectedAtom } from "./ToolsEligibilityState";
import { useAtomValue } from 'jotai';

import { InspectRoute } from "./components/InspectRoute";
import { TracksList } from "./components/TracksList";

import "./ToolsEligibility.css";
export function ToolsEligibility() {
	// const { i18n, t } = useTranslation();
	const track_selected = useAtomValue(TrackSelectedAtom)

	return (
		// TODO: remove this setting the width and do it automatic
		<div className=" w-[100dvw] bg-primary h-[100dvh]">
			{/* <div>
				<select>
					<option value="all">All areas</option>
					<option value="north">North</option>
				</select>
				<input type="text" placeholder="search" />
			</div> */}
			<TracksList />
			{track_selected !== null ? <InspectRoute /> : <></>}

		</div>
	);
}












