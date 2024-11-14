import { useAtom } from "jotai";
import { useState } from "react";

import { FilterListKeysAtom } from "../Pages/Home/HomeState";
import { FILTER_LIST, REGIONS_ARRAY } from "../utils/const";

interface TopRightActionRowPropsI {
	flyToRegion: (index: number) => void;
}

export function TopRightActionRow(props: TopRightActionRowPropsI) {
	const [isFilterOpen, setIsFilterOpen] = useState(false);
	const [filter_list_keys, set_filter_list_keys] = useAtom(FilterListKeysAtom);
 
	return (
		<div className="flex gap-2">
			<select
				onChange={(e) => props.flyToRegion(parseInt(e.target.value))}
			>
				{REGIONS_ARRAY.map((region, index) => <option key={region.key} value={index}>{region.key}</option>)}
			</select>
			<div className="relative">
				<button type="button" onClick={() => setIsFilterOpen(!isFilterOpen)} className={`px-2 ${isFilterOpen ? "bg-purple-400 text-white" : ""}`}>
					filter icon
				</button>
				<div>
					{isFilterOpen && <div className=" absolute right-0 top-10 w-48 border border-gray-300 bg-white">
						{FILTER_LIST.map((filter) => <div key={filter.key} className={"flex cursor-pointer gap-2 rounded border-t border-t-slate-400 p-2 transition-all hover:bg-slate-300"}
							onClick={() => {
								set_filter_list_keys((prev) => {
									if (prev.includes(filter.key)) {
										return prev.filter((key) => key !== filter.key);
									} else {
										return [...prev, filter.key];
									}
								});
							}}
						>
							<input type="checkbox" checked={filter_list_keys.includes(filter.key)} />    
							{filter.value}
						</div>)}
					</div>}
				</div>
			</div>
		</div>
	);
}

