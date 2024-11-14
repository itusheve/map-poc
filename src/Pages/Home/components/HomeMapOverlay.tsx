import { useAtomValue } from "jotai";

import { IsAlertsMenuOpen, IsGanttOpenAtom } from "../HomeState";

import { FilterActions } from "./FilterActions";
import { GanttAndPMButtonMenu } from "./Gantt/GanttAndPMButtonMenu";
import { GanttContainer } from "./Gantt/GanttContainer";
import { OpenTopLeftAlertMenuButton, TopLeftAlertMenu } from "./TopLeftAlertMenu";
import { ZoomActions } from "./ZoomActions";

export function HomeMapOverlay() {
	const is_alerts_menu_open = useAtomValue(IsAlertsMenuOpen);
	const is_gantt_open = useAtomValue(IsGanttOpenAtom);

	return (
		<div className="absolute bottom-0 box-border flex size-full h-[94vh] flex-row justify-between gap-2 p-4">
			<div className="flex size-full flex-col justify-between">
				<div className="flex w-full flex-row items-start justify-between">
					<FilterActions />
					<div className="flex flex-col items-end gap-2">
						{ !is_alerts_menu_open && <OpenTopLeftAlertMenuButton /> }
						<ZoomActions />
					</div>
				</div>
				<div className="flex-1"></div>
				<GanttAndPMButtonMenu />
				{is_gantt_open && <GanttContainer />}
			</div>
			{ is_alerts_menu_open && <TopLeftAlertMenu /> }
		</div>
	);
}
