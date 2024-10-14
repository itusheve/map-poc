import { useState } from "react"
import { LeftArrowSvg } from "../../../components/Icons/LeftArrow"
import { AlertSvg } from "../../../components/Icons/Alert"
import { RightArrowSvg } from "../../../components/Icons/RightArrow"

export function TopLeftAlertMenu() {
    const [isAlertOpen, setIsAlertOpen] = useState(false)
    if (isAlertOpen) {
        return <div className="bg-primary text-primary-foreground w-[20vw]">
            <div className="flex gap-1 ">
                <button onClick={() => setIsAlertOpen(false)}>
                    <LeftArrowSvg />
                </button>
            </div>
            <ListOfAlerts />
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

export function ListOfAlerts() {
    return <div className="flex justify-between">
        <div className="flex gap-2 bg-secondary">
            <div>not read</div>
            <div>archive</div>
        </div>
        <div>
            <div>clean alerts</div>
            <div><AlertSvg /></div>
        </div>
    </div>
}