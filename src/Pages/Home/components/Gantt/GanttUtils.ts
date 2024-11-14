import moment from "moment";

import { TOTAL_AVAILABLE_HOURS } from "./GanttConst";

export function generateTimeMarks(marksPerHour: number): string[] {
	const timeList: string[] = [];
	let time = moment().subtract(1, "days");
	// round to the nearest 15 minutes 0 15 30 45
	time = time.startOf("hour").add(Math.ceil(time.minutes() / 15) * 15, "minutes");
	for (let i = 0; i < marksPerHour * TOTAL_AVAILABLE_HOURS; i++) {
		timeList.push(time.format("HH:mm"));
		time = time.add(60 / marksPerHour, "minutes");
	}

	return timeList;
}
