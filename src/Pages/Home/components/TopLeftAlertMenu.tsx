import { useState } from "react"
import { LeftArrowSvg } from "../../../components/Icons/LeftArrow"
import { AlertSvg } from "../../../components/Icons/Alert"
import { RightArrowSvg } from "../../../components/Icons/RightArrow"
import { ListOfAlerts } from "./ListOfAlerts"
import { ArrowTopSvg } from "../../../components/Icons/ArrowTop"
import { OpenArrowsSvg } from "../../../components/Icons/OpenArrowsSvg"

export function TopLeftAlertMenu() {
    const [isAlertOpen, setIsAlertOpen] = useState(false)
    if (isAlertOpen) {
        return <div className="bg-primary text-primary-foreground w-[25vw] relative">
            <div className="flex justify-end items-center gap-2 ">
                <div> Alerts and threats </div>
                <button onClick={() => setIsAlertOpen(false)}>
                    <LeftArrowSvg />
                </button>
            </div>
            <ListOfAlerts />
            <div className="  ">
                <ConnectedDevicesBottomMenu />
            </div>
        </div>
    }
    return <div className=" flex flex-col gap-2 ">
        <button className="flex gap-1  items-center bg-primary text-primary-foreground">
            <AlertSvg className="flex flex-col justify-center" />
            <div className="flex flex-col justify-center">
                alert count = 12
            </div>
            <div className="flex flex-col justify-center">
                <button onClick={() => setIsAlertOpen(true)}>
                    <RightArrowSvg />
                </button>
            </div>
        </button>
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

