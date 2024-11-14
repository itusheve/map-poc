import { atom } from 'jotai'
import { atomWithQuery } from 'jotai-tanstack-query'
export const TrackSelectedAtom = atom<number | null>(null)
// TODO: not sure is details or detail 
export const TrackDetailsAtom = atomWithQuery((get) => ({
 queryKey: ['TrackDetails', get(TrackSelectedAtom)],
 queryFn: async (info) => {
  const id = get(TrackSelectedAtom) // const id = info.queryKey[1]
  console.log({id, info})
  if (id === null) return null;
  // call the data
  // validate the data using zod
  return {
    id: id,
    name: 'שם מסלול',
    pmName: 'שם פ״מ',
    status: 'Active',
    coordinate: {
      N: 1323437766,
      E: 835794375,
    },
    devices: [{
      id: 53,
      name: 'xt24',
      status: 'Active',
      issues: [{
        id: 24,
        date: '24/05/2024',
        time: '10:50',
        issueId: 53,
        issueText: 'What'
      },
      {
        id: 84,
        date: '23/05/2024',
        time: '11:20',
        issueId: 53,
        issueText: 'X wow this'
      }]
    }]
  }
 }
}))