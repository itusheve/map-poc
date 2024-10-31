import { useTranslation } from "react-i18next"
import { AlertSvg } from "../../../components/Icons/Alert";
import { AlertIssueSvg } from "../../../components/Icons/AlertIssueSvg";
import { WarnSvg } from "../../../components/Icons/WarnSvg";


export function ListOfAlerts() {
    const { t } = useTranslation();

    return <div className="flex flex-col gap-2 p-2 h-[80vh]">
        {/* This is the opened controlled menu */}
        <div className="flex justify-between text-sm text-center">
            <div className="flex gap-1 bg-secondary p-1 rounded-3xl">
                <button className="bg-active text-active-foreground p-1 rounded-3xl transition-all duration-300 hover:scale-105">{t('TopLeftAlertMenu.ListOfAlerts.Unread')}</button>
                <button className="p-1 rounded-3xl">{t('TopLeftAlertMenu.ListOfAlerts.archive')}</button>
            </div>
            <div className="flex gap-2">
                <button className="bg-secondary p-1 rounded-3xl text-center">{t('TopLeftAlertMenu.ListOfAlerts.CleanAlerts')}</button>
                <button className="bg-secondary p-1 rounded-3xl "><AlertSvg /></button>
            </div>
        </div>
        <div>
            <div>
                <h2 className="text-center p-1">יום ד’ 18/12/2024</h2>
                <div className="flex flex-col gap-2">
                    <div className="border-r-[6px] rounded-3xl border-r-alert-border-issue bg-gradient-to-tr from-alert-gradient-issue-from from-[1.85%] to-alert-gradient-issue-to to-[97.51%] text-alert-foreground p-2">
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
                                <button className="text-center rounded-xl bg-secondary-soft text-alert-foreground text-xs px-1 py-0.75 shadow-button">
                                    {t('TopLeftAlertMenu.ListOfAlerts.Read')}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="border-r-[6px] rounded-3xl border-r-alert-border-warn bg-gradient-to-tr from-alert-gradient-warn-from from-[1.85%] to-alert-gradient-warn-to to-[97.51%] text-alert-foreground p-2">
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
                                <button className="text-center rounded-xl bg-secondary-soft text-alert-foreground text-xs px-1 py-0.75 shadow-button">
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