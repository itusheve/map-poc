/** How many hours will be shown simultaneously */
export type HoursSpanT = 12 | 24;

export enum GroupByOptionE {
	SOURCE,
	BUILDING_BLOCK,
	STATUS,
	SECTOR,
}

export enum TimeMarkRuleE {
	EVERY_HALF_HOUR_AND_MARK_BETWEEN,
	EVERY_FULL_HOUR_AND_MARK_BETWEEN,
	EVERY_FULL_HOUR,
}

export interface HoursSpanLayoutRulesI {
	widthInPercentages: number;
	timeMarkRule: TimeMarkRuleE;
	totalTimeMarks: number;
}
