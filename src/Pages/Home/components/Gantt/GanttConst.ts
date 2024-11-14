import { HoursSpanLayoutRulesI, HoursSpanT, TimeMarkRuleE } from "./GanttTypes";

export const AVAILABLE_HOURS_BEFORE_NOW = 48;
export const AVAILABLE_HOURS_AFTER_NOW = 48;
export const TOTAL_AVAILABLE_HOURS = AVAILABLE_HOURS_BEFORE_NOW + AVAILABLE_HOURS_AFTER_NOW;

export const AVAILABLE_HOUR_SPANS: HoursSpanT[] = [ 12, 24 ];

export const HOURS_SPAN_LAYOUT_RULES: Record<HoursSpanT, HoursSpanLayoutRulesI> = {
	[12]: {
		widthInPercentages: 800,
		timeMarkRule: TimeMarkRuleE.EVERY_HALF_HOUR_AND_MARK_BETWEEN,
		totalTimeMarks: TOTAL_AVAILABLE_HOURS * 4,
	},
	[24]: {
		widthInPercentages: 400,
		timeMarkRule: TimeMarkRuleE.EVERY_FULL_HOUR_AND_MARK_BETWEEN,
		totalTimeMarks: TOTAL_AVAILABLE_HOURS * 2,
	},
};
