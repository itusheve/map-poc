import { ZoomInSvg } from "../../../../components/Icons/ZoomInSvg";

import { GanttHoursSpanSelector } from "./GanttHoursSpanSelector";

export function GanttControllers() {
	return (
		<div className="flex flex-col gap-2 p-2">
			<GanttHoursSpanSelector />
			<button><ZoomInSvg className="size-6" /></button>
			<button><ZoomInSvg className="size-6" /></button>
		</div>
	);
}
