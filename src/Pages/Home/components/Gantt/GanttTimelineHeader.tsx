import { useAtomValue } from "jotai";
import { useRef } from "react";

import { HOURS_SPAN_LAYOUT_RULES } from "./GanttConst";
import { SelectedHoursSpanAtom } from "./GanttState";
import { TimeMarkRuleE } from "./GanttTypes";
import { generateTimeMarks } from "./GanttUtils";

export function GanttTimelineHeader() {
	const sliderElementRef = useRef<HTMLDivElement>(null);
	const mouseDragDataRef = useRef({
		isMouseDown: false,
		startX: 0,
		scrollLeft: 0,
	});

	const sliderEventHandlers = {
		onMouseDown: () => {
			mouseDragDataRef.current.isMouseDown = true;
			// The element was assigned a ref
			mouseDragDataRef.current.scrollLeft = sliderElementRef.current!.scrollLeft;
		},
		onMouseLeave: () => {
			mouseDragDataRef.current.isMouseDown = false;
		},
		onMouseUp: () => {
			mouseDragDataRef.current.isMouseDown = false;
		},
		onMouseMove: (e) => {
			if (mouseDragDataRef.current.isMouseDown) {
				e.preventDefault();
				const x = e.pageX - sliderElementRef.current!.offsetLeft;
				const walk = ( mouseDragDataRef.current.startX - x);
				sliderElementRef.current!.scrollLeft = mouseDragDataRef.current.scrollLeft - walk;
				console.log("@walk", walk, sliderElementRef.current!.scrollLeft);
			}
		}
	} satisfies React.HTMLAttributes<HTMLDivElement>;

	const selected_hours_span = useAtomValue(SelectedHoursSpanAtom);

	const layoutRules = HOURS_SPAN_LAYOUT_RULES[selected_hours_span];

	return (
		<div className="relative overflow-x-scroll text-[10px] text-white" style={{
			// : `${layoutRules.totalTimeMarks}`,
			width: "100%",
		}}
		ref={sliderElementRef}
		{...sliderEventHandlers}
		>
			<div className="flex w-[400%] flex-1 overflow-x-scroll rounded pb-4 text-[10px] text-white">
				{generateTimeMarks(1).map((time) => (
					<div key={time} className="flex-1">
						{((layoutRules.timeMarkRule === TimeMarkRuleE.EVERY_FULL_HOUR_AND_MARK_BETWEEN &&
						time.endsWith("30")
						) ||(layoutRules.timeMarkRule === TimeMarkRuleE.EVERY_HALF_HOUR_AND_MARK_BETWEEN &&
						(time.endsWith("15") || time.endsWith("45"))
						))? (
								<div>
									<div>x</div>
								</div>
							) : (
								<div className="text-center">
									<p className="text-[0.6rem] font-bold">{time}</p>
									<div>|</div>
								</div>
							)}
					</div>
				))}
			</div>
		</div>
	);
}
