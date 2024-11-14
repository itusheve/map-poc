import { useAtom } from "jotai";

import { DoubleArrowDown } from "../../../../components/Icons/DoubleArrowDownSvg";
import { OpenArrowsSvg } from "../../../../components/Icons/OpenArrowsSvg";
import { PlusSvg } from "../../../../components/Icons/PlusSvg";
import { IsGanttOpenAtom } from "../../HomeState";


export function GanttAndPMButtonMenu() {
	const [ is_gantt_open, set_is_gantt_open ] = useAtom(IsGanttOpenAtom);

	return (
		<div className="px-2">
			<div className="flex w-full items-end justify-between self-end ps-4">
				<button className="ms-2 flex gap-2 bg-primary p-2 text-primary-foreground"
					onClick={() => {}}>
					<DoubleArrowDown className={`transition-transform ${is_gantt_open ? "" : "rotate-180"}`} 
						onClick={() => set_is_gantt_open((prev) => !prev)}/>
					<p>גאנט</p>	
					<OpenArrowsSvg />
				</button>
				<button className="my-2 rounded-full bg-[#096bdc] p-3 text-sm font-bold text-primary-foreground">
					<PlusSvg className="box-content inline-block pe-2"/>
					<span>
						פ"מ חדש
					</span>
				</button>
			</div>
		</div>
	);
}
  
