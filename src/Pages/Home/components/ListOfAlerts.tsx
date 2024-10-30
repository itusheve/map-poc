import { useTranslation } from "react-i18next"
import { AlertSvg } from "../../../components/Icons/Alert";
import { AlertIssueSvg } from "../../../components/Icons/AlertIssueSvg";
import { WarnSvg } from "../../../components/Icons/WarnSvg";
import { MuteAlertSvg } from "../../../components/Icons/MuteAlert";

type Props = {
    isAlertMuted: boolean,
    setIsAlertMuted: () => void;
}
export function ListOfAlerts({ isAlertMuted, setIsAlertMuted }: Props) {
    const { t } = useTranslation();

    return <div className="flex flex-col gap-2 p-2 h-[80vh]">
        {/* This is the opened controlled menu */}
        <div className="flex justify-between text-sm text-center">
            <div className="flex gap-1 bg-secondary p-1 rounded-[20px]">
                <button className="bg-active text-active-foreground p-1 rounded-[20px] transition-all duration-300 hover:scale-105">{t('TopLeftAlertMenu.ListOfAlerts.Unread')}</button>
                <button className="p-1 rounded-[20px]">{t('TopLeftAlertMenu.ListOfAlerts.archive')}</button>
            </div>
            <div className="flex gap-2">
                <button className="bg-secondary p-1 rounded-[20px] text-center">{t('TopLeftAlertMenu.ListOfAlerts.CleanAlerts')}</button>
                <button className="bg-secondary p-1 rounded-[20px] " onClick={() => setIsAlertMuted()}>{isAlertMuted ? <MuteAlertSvg /> : <AlertSvg />}</button>
            </div>
        </div>
        <div>
            <div>
                <h2 className="text-center p-1">יום ד’ 18/12/2024</h2>
                <div className="flex flex-col gap-2">
                    <div className="border-r-[6px] rounded-[20px] border-r-[#FF5457] bg-gradient-to-tr from-[rgba(202,223,255,0.15)] from-[1.85%] to-[rgba(255,84,87,0.30)] to-[97.51%] text-alert-foreground p-2">
                        <div className="text-sm">יום ד, 12:03</div>
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-4">
                                <div><AlertIssueSvg /></div>
                                <div>
                                    <b>{t('TopLeftAlertMenu.ListOfAlerts.Issue')}</b>
                                    <div>
                                        תקלה!
                                        אמצעי SDA-A, RX:0 הגיע לטמפרטורה גבוהה, בוצע כיבוי אוטומטי.
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <button className="text-center rounded-[10px] bg-[#CADFFF26] text-alert-foreground text-xs px-1 py-0.75 shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.10),0px_1px_3px_0px_rgba(16,24,40,0.10)]">
                                    {t('TopLeftAlertMenu.ListOfAlerts.Read')}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="border-r-[6px] rounded-[20px] border-r-[#FFAB00] bg-gradient-to-tr from-[rgba(202,223,255,0.15)] from-[1.85%] to-[rgba(255,171,0,0.30)] to-[97.51%] text-alert-foreground p-2">
                        <div className="text-sm">יום ד, 12:03</div>
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-4">
                                <div><WarnSvg /></div>
                                <div>
                                    <b>{t('TopLeftAlertMenu.ListOfAlerts.Warn')}</b>
                                    <div>
                                        תקלה!
                                        אמצעי SDA-A, RX:0 הגיע לטמפרטורה גבוהה, בוצע כיבוי אוטומטי.
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <button className="text-center rounded-[10px] bg-[#CADFFF26] text-alert-foreground text-xs px-1 py-0.75 shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.10),0px_1px_3px_0px_rgba(16,24,40,0.10)]">
                                    {t('TopLeftAlertMenu.ListOfAlerts.Read')}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}