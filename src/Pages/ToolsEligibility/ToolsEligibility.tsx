// import { useTranslation } from "react-i18next";

import { useQuery } from "@tanstack/react-query";
import { z } from "zod";
import { TrackDetailsAtom, TrackSelectedAtom } from "./ToolsEligibilityState";
import "./ToolsEligibility.css";
export function ToolsEligibility() {
	// const { i18n, t } = useTranslation();
	const track_selected = useAtomValue(TrackSelectedAtom)

	return (
		// TODO: remove this setting the width and do it automatic
		<div className=" w-[100dvw] bg-primary h-[100dvh]">
			{/* <div>
				<select>
					<option value="all">All areas</option>
					<option value="north">North</option>
				</select>
				<input type="text" placeholder="search" />
			</div> */}
			<TracksList />
			{track_selected !== null ? <InspectRoute /> : <></>}

		</div>
	);
}

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
export function useTracksListHook() {
	const query = useQuery({
		queryKey: ['tracks'],
		queryFn: () => {
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

import { useSetAtom } from 'jotai';
export function TracksList() {
	const tracks_hooks = useTracksListHook()
	const { t } = useTranslation()
	const set_track_selected = useSetAtom(TrackSelectedAtom)
	return <div className="grid grid-cols-4 gap-4 pt-4 px-2">

		{tracks_hooks.query.data?.map((row) => <div key={row.id} className="rounded-lg w-full text-primary-foreground bg-secondary-soft shadow-[0px_0px_8.8px_4px_rgba(0,0,0,0.07)]">
			<div className={`flex justify-between ${row.status}Gradient rounded-lg px-2 font-bold text-md items-center`}>
				<div>
					{t('active')} ({row.pmName})
				</div>
				<button type="button" onClick={() => set_track_selected(row.id)} >
					{/* TODO: add the icon here */}
					<LinkToBoxSvg />
				</button>
			</div>
			<div className="px-2 pb-2">
				<div className="text-lg font-bold">
					{row.name}
				</div>
				<div className="font-bold">
					{t('NE')}: {row.coordinate.N},{row.coordinate.E}
				</div>
				<div className="">
					{row.devices.map((device) => <div key={device.id} className="flex justify-between items-center py-1 border-b border-b-secondary-soft">
						<div>
							{device.name}
						</div>
						<div className={`${device.status}Status rounded-lg p-1 text-sm`}>
							{/* TODO: add the color and translation for the status */}
							{t(device.status)}
						</div>
					</div>)}
				</div>
			</div>
		</div>)}
	</div>
}


import { useAtomValue } from 'jotai';
import { LinkToBoxSvg } from "../../components/Icons/LinkToBoxSvg";
import { useTranslation } from "react-i18next";

export function InspectRoute() {
	const track_details = useAtomValue(TrackDetailsAtom)
	const set_track_selected = useSetAtom(TrackSelectedAtom)
	const { t } = useTranslation()
	if (track_details.data === null || track_details.data === undefined) return <div>
		This is not supposed to be open
	</div>
	return <div>
		<BottomDialog open={true} onClose={() => { }} >
			<div className="h-[50vh] bg-primary">
				<div className=" bg-secondary-soft text-primary-foreground">
					<div className="flex justify-between p-2 ">
						<div className="flex gap-4">
							<div className=" bg-secondary-soft text-primary-foreground min-w-64 rounded-lg px-2">
								{track_details.data.name}
							</div>
							<div className="font-bold">
								{t('NE')} {track_details.data.coordinate.N},{track_details.data.coordinate.E}
							</div>
						</div>
						<div>
							<button type="button" onClick={() => set_track_selected(null)} className="bg-secondary-soft rounded"><XSvg className=" " /></button>
						</div>
					</div>
				</div>
				<div className="grid grid-cols-4 p-2 text-primary-foreground">
					{track_details.data.devices.map((row) => <div key={row.id} className="bg-secondary-soft rounded-lg">
						<div className="flex justify-between p-2">
							<div className="flex-1 grid place-content-center font-bold">{row.name}</div>
							<div className={`${row.status}Status rounded-lg p-1`}>{t(row.status)}</div>
						</div>
						<div className="border">
							<div className="grid grid-cols-4">
								<div>date</div>
								<div>time</div>
								<div>issue number</div>
								<div>details</div>
							</div>
							{row.issues.map((issue) => <div className="grid grid-cols-4">
								<div>
									{issue.date}
								</div>
								<div>
									{issue.time}
								</div>
								<div>
									{issue.issueId}
								</div>
								<div>
									{issue.issueText}
								</div>
							</div>)}
						</div>
					</div>)}
				</div>
			</div>
		</BottomDialog>
		<div className="flex gap-4">
			<div>
				{track_details.data?.name} {track_details.data?.id}
			</div>
			<div>
				N: {track_details.data?.coordinate.N} E: {track_details.data?.coordinate.E}
			</div>
			<button type="button" onClick={() => set_track_selected(null)}>
				close
			</button>
		</div>

	</div>
}


import React from 'react';
import { XSvg } from "../../components/Icons/XSvg";

interface Props {
	children: React.ReactNode;
	open: boolean;
	onClose: () => void;
}

export function BottomDialog(props: Props) {
	return (
		<div
			className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${props.open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
				} flex justify-center items-end`}
			onClick={props.onClose}
		>
			<div
				className={`bg-white w-full max-h-[80%] rounded-t-lg shadow-lg transform transition-transform duration-300 ${props.open ? 'translate-y-0' : 'translate-y-full'
					}`}
				onClick={(e) => e.stopPropagation()}
			>

				{props.children}
			</div>
		</div>
	);
}
