import { useSetAtom } from 'jotai';
import { useTracksListHook } from '../hooks/TracksListHook';
import { useTranslation } from 'react-i18next';
import { TrackSelectedAtom } from '../ToolsEligibilityState';
import { LinkToBoxSvg } from '../../../components/Icons/LinkToBoxSvg';
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
