import { useState } from "react"
import { LeftArrowSvg } from "../../../components/Icons/LeftArrow"
import { AlertSvg } from "../../../components/Icons/Alert"
import { RightArrowSvg } from "../../../components/Icons/RightArrow"
import { ListOfAlerts } from "./ListOfAlerts"

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
            <div className=" bg-secondary text-primary-foreground ">

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
    return <div className="flex flex-col gap-2">
        
    </div>
}

