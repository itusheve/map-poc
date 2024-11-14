import { useAtom } from "jotai";

import { AVAILABLE_HOUR_SPANS } from "./GanttConst";
import { SelectedHoursSpanAtom } from "./GanttState";
import { HoursSpanT } from "./GanttTypes";

export function GanttHoursSpanSelector() {
	const [ selected_hours_span, set_selected_hours_span ] = useAtom(SelectedHoursSpanAtom);

	return (
		<select value={selected_hours_span} onChange={(e) => {
			set_selected_hours_span(Number(e.target.value) as HoursSpanT);
		}}>
			{
				AVAILABLE_HOUR_SPANS.map((hours_span) => (
					<option value={hours_span} key={hours_span}>{hours_span}</option>
				))
			}
		</select>
	);
}
