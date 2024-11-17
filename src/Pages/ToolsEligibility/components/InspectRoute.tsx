


import { useAtomValue, useSetAtom } from 'jotai';
import { useTranslation } from "react-i18next";
import { BottomDialog } from '../../../components/BottomDialog';
import { TrackDetailsAtom, TrackSelectedAtom } from '../ToolsEligibilityState';
import { XSvg } from '../../../components/Icons/XSvg';

export function InspectRoute() {
	const track_details = useAtomValue(TrackDetailsAtom)
	const set_track_selected = useSetAtom(TrackSelectedAtom)
	const { t } = useTranslation()
	if (track_details.data === null || track_details.data === undefined) return <div>
		This is not supposed to be open
	</div>
	return <div>
		<BottomDialog open={true} onClose={() => { }} >
			<div className="h-[60dvh] bg-primary py-2">
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
				<div className="grid grid-cols-4 gap-4 p-2 text-primary-foreground h-[50dvh]">
					{track_details.data.devices.map((row) => <div key={row.id} className="bg-secondary-soft rounded-lg p-2 ">
						<div className="flex justify-between p-2">
							<div className="flex-1 grid place-content-center font-bold">{row.name}</div>
							<div className={`${row.status}Status rounded-lg p-1`}>{t(row.status)}</div>
						</div>
						<div className="grid grid-cols-2 gap-2">
							<div>
								{row?.info?.map((info) => <div key={info.id} className="flex justify-between">
									<div>
										{t(info.key)}
									</div>
									<div>
										{info.value}
									</div>
									
								</div>)}
							</div>
							<div className="p-2">
								<div className="grid place-content-center bg-slate-500 text-2xl">
									IMG
								</div>
							</div>
						</div>
						<div className="py-2 border-b-[1px] border-b-secondary-soft"></div>
						<div className="pt-2">
							<div>
								{t('StatusIssuesAndWarnings')}
							</div>
							<div className="grid grid-cols-4 bg-secondary-soft px-1 ">
								<div>{t('date')}</div>
								<div>{t('time')}</div>
								<div>{t('issue')}</div>
								<div>{t('details')}</div>
							</div>
							{row.issues.map((issue) => <div className="grid grid-cols-4 text-sm px-1">
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
		

	</div>
}
