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
        return <div className="bg-primary text-primary-foreground w-[25vw]">
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
    return <div className="flex gap-2 bg-secondary text-primary-foreground">
        <ArrowTopSvg />
        <div className=" flex-1">
            <h2 className=" text-primary-foreground">Issues in connected devices</h2>
            <div className=" text-alert-foreground">4 Issues</div>
        </div>
        <div className="grid place-content-center p-1">
            <OpenArrowsSvg />
        </div>
    </div>
}

