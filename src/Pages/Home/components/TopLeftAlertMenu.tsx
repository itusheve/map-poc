import { useState } from "react"
import { LeftArrowSvg } from "../../../components/Icons/LeftArrow"
import { AlertSvg } from "../../../components/Icons/Alert"
import { RightArrowSvg } from "../../../components/Icons/RightArrow"
import { ListOfAlerts } from "./ListOfAlerts"
import { ArrowTopSvg } from "../../../components/Icons/ArrowTop"
import { OpenArrowsSvg } from "../../../components/Icons/OpenArrowsSvg"
import { MuteAlertSvg } from "../../../components/Icons/MuteAlert"
import { useTranslation } from "react-i18next"

export function TopLeftAlertMenu() {
    const {t} = useTranslation();
    
    const [isAlertOpen, setIsAlertOpen] = useState(false)
    const [isAlertMuted, setIsAlertMuted] = useState(false)
    const [unreadAlerts] = useState(0)
    if (isAlertOpen) {
        return <div className="bg-primary text-primary-foreground w-[25vw] relative">
            <div className="flex justify-end items-center gap-2 ">
                <div> Alerts and threats </div>
                <div className=" cursor-pointer" onClick={() => setIsAlertOpen(false)}>
                    <LeftArrowSvg />
                </div>
            </div>
            <ListOfAlerts />
            <div className="  ">
                <ConnectedDevicesBottomMenu />
            </div>
        </div>
    }
    return <div className="flex grid-cols-2 divide-x divide-x-reverse divide-[#CADFFF26] gap-0.5 items-center text-primary-foreground rounded-[20px] bg-primary">
        <div className="flex grid-cols-2 p-2">
            <button className="flex gap-0.5 items-center" onClick={() => setIsAlertOpen(true)}>
                <div><RightArrowSvg /></div>
                <div className="text-right">
                    <div className="text-sm">{t('TopLeftAlertMenu.Button.AlertsAndThreats')}</div>
                    {unreadAlerts ?
                        <div className='text-xs text-[#FF5457]'>{unreadAlerts}{' '}{t('TopLeftAlertMenu.Button.UnreadAlerts')}</div>
                        : <div className='text-xs text-[#9B9B9B]'>{t('TopLeftAlertMenu.Button.NoUreadAlerts')}</div>
                    }
                </div>
            </button>
        </div>
        <button className="flex flex-col justify-center p-2" onClick={() => setIsAlertMuted(!isAlertMuted)}>{isAlertMuted ? <MuteAlertSvg /> : <AlertSvg />}</button>
    </div>
}


export function ConnectedDevicesBottomMenu() {
    const [isOpen, setIsOpen] = useState(false)
    return <div className="absolute bottom-0 w-full bg-secondary pt-2 rounded">
        <div className="flex gap-2  text-primary-foreground px-2 ">
            <button onClick={() => setIsOpen(!isOpen)} className="pd-0 bg-primary" ><ArrowTopSvg className={`transition-all ${isOpen ? 'rotate-180' : ''}`} /></button>
            <div className=" flex-1">
                <h2 className=" text-primary-foreground">Issues in connected devices</h2>
                <div className=" text-alert-foreground">4 Issues</div>
            </div>
            <div className="grid place-content-center p-1">
                <OpenArrowsSvg className="" />
            </div>

        </div>
        {/* TODO: add transition to the elements */}
        {isOpen ? <div className="py-2 px-2 flex flex-col gap-2">
            <div className="flex justify-between bg-[#363636] px-2 py-1 items-center rounded">
                <div>SDA-A, RX:0</div>
                <div className="flex gap-1">
                    <button className=" bg-[#3A1F23] text-[#E2A4AB]">RF</button>
                    <button className=" bg-[#3A1F23] text-[#E2A4AB]">WP</button>
                </div>
            </div>
            <div className="flex justify-between bg-[#363636] px-2 py-1 items-center rounded">
                <div>שם אמצעי</div>
                <div className="flex gap-1">
                    <button className=" bg-[#3A1F23] text-[#E2A4AB]">ER</button>
                    <button className=" bg-[#3A1F23] text-[#E2A4AB]">QT</button>
                </div>
            </div>
            <div className="flex justify-between bg-[#363636] px-2 py-1 items-center rounded">
                <div>אמצעי מיוחד</div>
                <div className="flex gap-1">
                    <button className=" bg-[#3A1F23] text-[#E2A4AB]">SHA</button>
                    <button className=" bg-[#3A1F23] text-[#E2A4AB]">KED</button>
                </div>
            </div>
        </div> : <></>}
    </div>
}

