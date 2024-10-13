import { useState } from "react";
import { FILTER_LIST, REGIONS_ARRAY } from "../utils/const";
import {useAtom} from 'jotai'
import { FilterListKeysAtom } from "../Pages/Home/HomeState";


interface TopRightActionRowPropsI {
    flyToRegion: (index: number) => void;
}
export function TopRightActionRow(props: TopRightActionRowPropsI) {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [filter_list_keys, set_filter_list_keys] = useAtom(FilterListKeysAtom);
    return <div className="flex gap-2">
        <select
            onChange={(e) => {
                props.flyToRegion(parseInt(e.target.value));
            }}
        >
            {REGIONS_ARRAY.map((region, index) => <option key={region.key} value={index}>{region.key}</option>)}
        </select>
        <div className="relative">
            <button type="button" onClick={() => setIsFilterOpen(!isFilterOpen)} className={` ${isFilterOpen ? 'bg-purple-400 text-white' : ''}`}>
                filter icon
            </button>
            <div>
                {isFilterOpen && <div className="absolute top-10 right-0 bg-white border border-gray-300">
                    {FILTER_LIST.map((filter) => <div key={filter.key} className={`p-2 hover:bg-slate-300 transition-all cursor-pointer rounded border-t-slate-400 border-t-[1px] ${filter_list_keys.includes(filter.key) ? ' bg-green-300' : ''}`}
                    onClick={() => {
                        set_filter_list_keys((prev) => {
                            if (prev.includes(filter.key)) {
                                return prev.filter((key) => key !== filter.key)
                            } else {
                                return [...prev, filter.key]
                            }
                        })
                    }}
                    >{filter.value}</div>)}
                </div>}
            </div>
        </div>
    </div>
}

