import { useAtomValue } from "jotai";

import { IsAlertsMenuOpen } from "../../HomeState";

import { GanttControllers } from "./GanttControllers";
import { GanttOmGroup } from "./GanttOmGroup";
import { GanttTimelineHeader } from "./GanttTimelineHeader";

export function GanttContainer() {
	const is_alerts_menu_open = useAtomValue(IsAlertsMenuOpen);

	return (
		<div className={`flex min-h-64 flex-row rounded-xl bg-[#0e1a32]/60 backdrop-blur-sm ${is_alerts_menu_open ? "w-[calc(80vw-2rem)]" : "w-[calc(100vw-2rem)]"}`}>
			<GanttControllers />
			<div className="w-full overflow-hidden p-2">
				<div className="sticky rounded-xl bg-[#325993]">
					<GanttTimelineHeader />
				</div>
				<div className="max-h-52 overflow-y-scroll">
					<GanttOmGroup title="הפעלה מרחוק" />
					<GanttOmGroup title="הפעלה מקומית" />
				</div>
			</div>
		</div>
	);
}
