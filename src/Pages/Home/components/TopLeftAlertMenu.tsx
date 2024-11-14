import { useSetAtom } from "jotai";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { AlertSvg } from "../../../components/Icons/AlertSvg";
import { ArrowTopSvg } from "../../../components/Icons/ArrowTopSvg";
import { LeftArrowSvg } from "../../../components/Icons/LeftArrowSvg";
import { OpenArrowsSvg } from "../../../components/Icons/OpenArrowsSvg";
import { RightArrowSvg } from "../../../components/Icons/RightArrowSvg";
import { IsAlertsMenuOpen } from "../HomeState";

import { AlertsList } from "./AlertsList";

export function OpenTopLeftAlertMenuButton() {
	const { t } = useTranslation();
	const set_is_alerts_menu_open = useSetAtom(IsAlertsMenuOpen);

	return (
		<div className="flex grid-cols-2 items-center gap-0.5 divide-x divide-x-reverse divide-secondary-soft rounded-3xl bg-primary text-primary-foreground">
			<div className="flex grid-cols-2 p-2">
				<button className="flex items-center gap-0.5" onClick={() => set_is_alerts_menu_open(true)}>
					<div><RightArrowSvg /></div>
					<div className="text-right">
						<div className="text-sm">{t("TopLeftAlertMenu.Button.AlertsAndThreats")}</div>
						<div className="text-xs text-issue">{t("TopLeftAlertMenu.Button.UnreadAlerts")}</div>
					</div>
				</button>
			</div>
			<button className="flex flex-col justify-center p-2" ><AlertSvg /></button>
		</div>
	);
}

export function TopLeftAlertMenu() {
	const { t } = useTranslation();
	const set_is_alerts_menu_open = useSetAtom(IsAlertsMenuOpen);

	return (
		<div className="box-border flex h-full w-[25vw] flex-col overflow-hidden rounded-3xl bg-primary text-primary-foreground shadow-r backdrop-blur-[35px]">
			<div className="box-border flex h-min items-center justify-start gap-2 p-2">
				<button onClick={() => set_is_alerts_menu_open(false)}>
					<LeftArrowSvg />
				</button>
				<div className="text-lg font-bold">{t("TopLeftAlertMenu.Button.AlertsAndThreats")}</div>
			</div>
			<AlertsList />
			<ConnectedDevicesBottomMenu />
		</div>
	);
}

export function ConnectedDevicesBottomMenu() {
	const { t } = useTranslation();
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="box-border max-h-[40%] w-full rounded-3xl bg-secondary-soft p-2">
			<div className={`flex justify-between gap-2 text-primary-foreground ${!isOpen ? "divide-x divide-x-reverse divide-secondary-soft" : ""}`}>
				<div className="flex">
					<button onClick={() => setIsOpen(!isOpen)} className="pd-0" ><ArrowTopSvg className={`transition-all ${isOpen ? "rotate-180" : ""}`} /></button>
					<div className="">
						<h2 className=" text-h3 text-primary-foreground">{t("TopLeftAlertMenu.IssuesInConnectedDevices.Title")}</h2>
						{!isOpen && <div className=" text-sm text-issue">{3}{" "}{t("TopLeftAlertMenu.IssuesInConnectedDevices.IssuesNumber")}</div>}
					</div>
				</div>
				{isOpen ?
					<button className="grid place-content-center p-1 text-center">
						<div className=" rounded-3xl bg-secondary-soft p-1 text-center text-md text-primary-foreground">{t("TopLeftAlertMenu.IssuesInConnectedDevices.ShowAll")}</div>
					</button> : <div className="p-1 text-center"><OpenArrowsSvg /></div>}
			</div>
			{/* TODO: add transition to the elements */}
			{isOpen &&
                <div className="scrollbar secondary box-border flex h-full animate-open-menu flex-col gap-2 overflow-y-auto p-2">
                	<div className="flex items-center justify-between rounded-3xl bg-gradient-to-r from-gradient-from from-0% to-gradient-to to-100% px-2 py-1">
                		<div>SDA-A, RX:0</div>
                		<div className="flex gap-1">
                			<button className=" rounded-3xl bg-issue-foreground px-1 text-primary-foreground">RF</button>
                			<button className=" rounded-3xl bg-issue-foreground px-1 text-primary-foreground">WP</button>
                		</div>
                	</div>
                	<div className="flex items-center justify-between rounded-3xl bg-gradient-to-r from-gradient-from from-0% to-gradient-to to-100% px-2 py-1">
                		<div>שם אמצעי</div>
                		<div className="flex gap-1">
                			<button className=" rounded-3xl bg-issue-foreground px-1 text-primary-foreground">ER</button>
                			<button className=" rounded-3xl bg-issue-foreground px-1 text-primary-foreground">QT</button>
                		</div>
                	</div>
                	<div className="flex items-center justify-between rounded-3xl bg-gradient-to-r from-gradient-from from-0% to-gradient-to to-100% px-2 py-1">
                		<div>אמצעי מיוחד</div>
                		<div className="flex gap-1">
                			<button className=" rounded-3xl bg-issue-foreground px-1 text-primary-foreground">SHA</button>
                			<button className=" rounded-3xl bg-issue-foreground px-1 text-primary-foreground">KED</button>
                		</div>
                	</div>
                </div>
			}
		</div>
	);
}
