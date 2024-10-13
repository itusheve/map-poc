
import { atom } from 'jotai'
import { atomWithQuery } from 'jotai-tanstack-query'
import { FilterListKeyUsedType } from './HomeTypes'

export const idAtom = atom<number>(1)
export const userAtom = atomWithQuery((get) => ({
    queryKey: ['users', get(idAtom)],
    queryFn: async ({ queryKey: [, id] }) => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        return res.json()
    },
}))

// This have to be enforce that any item appear only once, the reason this is not a set is because some of jotai action will not work properly with set  
export const FilterListKeysAtom = atom<FilterListKeyUsedType>([])

