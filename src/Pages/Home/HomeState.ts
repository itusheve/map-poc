import { atom } from "jotai";

// import { atomWithQuery } from 'jotai-tanstack-query'
import { FilterListKeyUsedType } from "./HomeTypes";

// This have to be enforce that any item appear only once, the reason this is not a set is because some of jotai action will not work properly with set  
export const FilterListKeysAtom = atom<FilterListKeyUsedType>([]);

export const IsGanttOpenAtom = atom(false);

export const IsAlertsMenuOpen = atom(false);
