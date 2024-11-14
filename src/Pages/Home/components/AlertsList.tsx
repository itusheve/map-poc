import { useTranslation } from "react-i18next";

import { AlertIssueSvg } from "../../../components/Icons/AlertIssueSvg";
import { AlertSvg } from "../../../components/Icons/AlertSvg";
import { WarningSvg } from "../../../components/Icons/WarningSvg";
import { PlusSvg } from "../../../components/Icons/PlusSvg";
import { useState } from "react";

const enToHeDay = (date: Date) => {
	const heDays = ["א", "ב", "ג", "ד", "ה", "ו", "ז"];

	return heDays[date.getDay()];
};

type AlertType = {
	type: "issue" | "info" | "warn",
	status: "archive" | "unread",
	dateTime: Date,
	message: string
};
type Prop = {
	alert: AlertType
};

const mockAlerts: AlertType[] = [
	{
		type: "issue",
		status: "archive",
		dateTime: new Date(new Date().getTime() - (24 * 60 * 60 * 1000)),
		message: "אמצעי SDA-A, RX:0 הגיע לטמפרטורה גבוהה, בוצע כיבוי אוטומטי."
	},
	{
		type: "warn",
		status: "archive",
		dateTime: new Date(),
		message: "אמצעי SDA-A, RX:0 הגיע לטמפרטורה גבוהה, בוצע כיבוי אוטומטי."
	},
	{
		type: "warn",
		status: "unread",
		dateTime: new Date(),
		message: "אמצעי SDA-A, RX:0 הגיע לטמפרטורה גבוהה, בוצע כיבוי אוטומטי."
	},
	{
		type: "issue",
		status: "unread",
		dateTime: new Date(),
		message: "אמצעי SDA-A, RX:0 הגיע לטמפרטורה גבוהה, בוצע כיבוי אוטומטי."
	},
	{
		type: "info",
		status: "archive",
		dateTime: new Date(),
		message: "פקודת מבצע “שם פקודה” הופעלה בהצלחה!"
	},
	{
		type: "info",
		status: "unread",
		dateTime: new Date(new Date().getTime() - (24 * 60 * 60 * 1000)),
		message: "פקודת מבצע “שם פקודה” הופעלה בהצלחה!"
	}
];
const Alert: React.FC<Prop> = ({ alert }) => {
	const { dateTime, message, status, type } = alert;
	const { t } = useTranslation();

	const colorsClass = `border-r-alert-border-${type} to-alert-gradient-${type}-to`;

	return (
		<div className={`box-border flex-1 rounded-3xl border-r-[6px] ${colorsClass} bg-gradient-to-tr from-alert-gradient-from from-[1.85%] to-[97.51%] p-2 text-alert-foreground`}>
			<div className="text-sm">{t("TopLeftAlertMenu.ListOfAlerts.Day")}{" "}{enToHeDay(dateTime)}{"', "}{dateTime.getHours()}{":"}{dateTime.getMinutes()}</div>
			<div className="flex flex-col gap-4">
				<div className="flex gap-4">
					<div>
						{type === "issue" && <AlertIssueSvg />}
						{type === "warn" && <WarningSvg />}
						{type === "info" && <AlertIssueSvg />} {/** TODO: need to change the icon to the info alert icon */}
					</div>
					<div>
						<b>{t(`TopLeftAlertMenu.ListOfAlerts.${type.charAt(0).toUpperCase() + type.slice(1)}`)}{"!"}</b>
						<div>{message}</div>
					</div>
				</div>
				{status === "unread" && <div className="flex justify-end">
					<button className="rounded-xl bg-secondary-soft px-1 py-[0.75] text-center text-xs text-alert-foreground shadow-button">
						{t("TopLeftAlertMenu.ListOfAlerts.Read")}
					</button>
				</div>}
			</div>
		</div>
	);
};
export function AlertsList() {
	const { t } = useTranslation();
	const [unreadView, setUnreadView] = useState(true);

	return (
		<div className="flex h-full flex-col gap-2 overflow-y-hidden p-2">
			<div className="flex justify-between text-center text-sm">
				<div className="flex gap-1 rounded-3xl bg-secondary p-1">
					<button
						onClick={() => setUnreadView(true)}
						className={`rounded-3xl p-1 ${unreadView ? "bg-active  text-active-foreground transition-all duration-300 hover:scale-105" : ""}`}>{t("TopLeftAlertMenu.ListOfAlerts.Unread")}</button>
					<button
						onClick={() => setUnreadView(false)}
						className={`rounded-3xl p-1 ${!unreadView ? "bg-active  text-active-foreground transition-all duration-300 hover:scale-105" : ""}`}>{t("TopLeftAlertMenu.ListOfAlerts.archive")}</button>
				</div>
				<div className="flex gap-2">
					<button className="rounded-3xl bg-secondary p-1 text-center">{t("TopLeftAlertMenu.ListOfAlerts.CleanAlerts")}</button>
					<button className="rounded-3xl bg-secondary p-1 "><AlertSvg /></button>
				</div>
			</div>
			<div className="scrollbar flex h-full flex-col gap-2 overflow-y-scroll">
				<h2 className="p-1 text-center text-h3">יום ד’ 18/12/2024</h2>
				<div className="flex flex-col gap-2">
					{mockAlerts.map(alert =>
						<Alert alert={alert} />
					)}
				</div>
			</div>
		</div>
	);
}
