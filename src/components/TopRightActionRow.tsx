import { useState } from "react";
import { REGIONS_ARRAY } from "../utils/const";

export const FILTER_LIST = [
    {
        key: 'threats',
        value: 'Threats'
    },
    {
        key: 'sense',
        value: 'sense'
    },
    {
        key: 'Interruption reports',
        value: 'Interruption reports'
    },
    {
        key: 'North Region',
        value: 'North Region'
    },
    {
        key: 'South Region',
        value: 'South Region'
    },
    {
        key: 'West Region',
        value: 'West Region'
    },
    {
        key: 'East Region',
        value: 'East Region'
    },

    {
        key: 'Jerusalem Region',
        value: 'Jerusalem Region'
    },
    {
        key: 'Tel Aviv Region',
        value: 'Tel Aviv Region'
    },
    {
        key: 'Haifa Region',
        value: 'Haifa Region'
    },

] as const;


interface TopRightActionRowPropsI {
    flyToRegion: (index: number) => void;
}
export function TopRightActionRow(props: TopRightActionRowPropsI) {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
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
                    {FILTER_LIST.map((filter) => <div key={filter.key} className="p-2 hover:bg-slate-300 transition-all cursor-pointer rounded border-t-slate-400 border-t-[1px]">{filter.value}</div>)}
                </div>}
            </div>
        </div>
    </div>
}

