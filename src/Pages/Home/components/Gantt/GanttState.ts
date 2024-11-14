import { atom } from "jotai";

import { GroupByOptionE, HoursSpanT } from "./GanttTypes";

export const SelectedHoursSpanAtom = atom<HoursSpanT>(24);

export const SelectedGroupByOptionAtom = atom<GroupByOptionE>(GroupByOptionE.SOURCE);

