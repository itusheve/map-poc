import { useQuery } from "@tanstack/react-query";
import { TracksListZod } from "../types/TracksTypes";


export function useTracksListHook() {
	const query = useQuery({
		queryKey: ['tracks'],
		queryFn: async () => {
			// TODO: add an actual call for the api
			const dto = [{
				id: 1,
				name: 'שם מסלול',
				pmName: 'שם פ״מ',
				status: 'Active',
				coordinate: { N: 1039201, E: 1213311 },
				devices: [{
					id: 33,
					name: 'מעורר',
					status: 'Active'
				},
				{
					id: 45,
					name: 'מגבר',
					status: 'Disconnected'
				},
				{
					id: 85,
					name: 'אנטנה tx',
					status: 'InActive'
				},
				{
					id: 88,
					name: 'אנטנה rx',
					status: 'InActive'
				},
				]
			},
			{
				id: 2,
				name: 'שם מסלול',
				status: 'Error',
				pmName: 'שם פ״מ',
				coordinate: { N: 8454642, E: 5468271 },
				devices: [{
					id: 83,
					name: 'x31',
					status: 'Active'
				},
				{
					id: 98,
					name: 'xp2',
					status: 'MidActive'
				},
				{
					id: 311,
					name: 'rxg42',
					status: 'InActive'
				},

				]
			},
			{
				id: 3,
				name: 'שם מסלול',
				pmName: 'שם פ״מ',
				status: 'NotAssigned',
				coordinate: { N: 34342395, E: 85858732 },
				devices: [{
					id: 33,
					name: 'מעורר',
					status: 'Disconnected'
				},
				{
					id: 45,
					name: 'מגבר',
					status: 'Active'
				},
				{
					id: 85,
					name: 'אנטנה tx',
					status: 'InActive'
				},
				{
					id: 88,
					name: 'אנטנה rx',
					status: 'Active'
				},
				]
			},
			{
				id: 4,
				name: 'שם מסלול',
				status: 'Error',
				pmName: 'שם פ״מ',
				coordinate: { N: 8454642, E: 5468271 },
				devices: [{
					id: 83,
					name: 'x31',
					status: 'Active'
				},
				{
					id: 98,
					name: 'xp2',
					status: 'MidActive'
				},
				{
					id: 311,
					name: 'rxg42',
					status: 'InActive'
				},

				]
			},
			{
				id: 5,
				name: 'שם מסלול',
				pmName: 'שם פ״מ',
				status: 'NotAssigned',
				coordinate: { N: 34342395, E: 85858732 },
				devices: [{
					id: 33,
					name: 'מעורר',
					status: 'Disconnected'
				},
				{
					id: 45,
					name: 'מגבר',
					status: 'Active'
				},
				{
					id: 85,
					name: 'אנטנה tx',
					status: 'InActive'
				},
				{
					id: 88,
					name: 'אנטנה rx',
					status: 'Active'
				},
				]
			},
			{
				id: 6,
				name: 'שם מסלול',
				pmName: 'שם פ״מ',
				status: 'Active',
				coordinate: { N: 1039201, E: 1213311 },
				devices: [{
					id: 33,
					name: 'מעורר',
					status: 'Active'
				},
				{
					id: 45,
					name: 'מגבר',
					status: 'Disconnected'
				},
				{
					id: 85,
					name: 'אנטנה tx',
					status: 'InActive'
				},
				{
					id: 88,
					name: 'אנטנה rx',
					status: 'InActive'
				},
				]
			},
			]
			// const {err , data} = await httpCaller('GET', '/tracks', undefined, TracksListZod)
			const zod_res = TracksListZod.safeParse(dto)
			if (zod_res.success) return zod_res.data;
			// TODO: if there is an error please raise a toast ir send a message to the user
			return [] // return empty array if error in the parse
		}
	})

	return {
		query
	}
}