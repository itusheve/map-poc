import { z } from "zod";

export const TrackStatusZod = z.union([z.literal('Active'), z.literal('InActive'), z.literal('Disconnected'), z.literal('MidActive')])

export const TrackDeviceZod = z.object({
	id: z.number(),
	name: z.string(),
	status: TrackStatusZod
})
export const TrackZod = z.object({
	id: z.number(),
	name: z.string(),
	pmName: z.string(),
	status: z.union([z.literal('NotAssigned'), z.literal('Active'), z.literal('Error')]),
	coordinate: z.object({
		N: z.number(),
		E: z.number(),
	}),
	devices: z.array(TrackDeviceZod)
})

export const TracksListZod = z.array(TrackZod)
