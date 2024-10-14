import { useState } from "react"
import { LeftArrowSvg } from "../../../components/Icons/LeftArrow"
import { AlertSvg } from "../../../components/Icons/Alert"
import { RightArrowSvg } from "../../../components/Icons/RightArrow"

export function TopLeftAlertMenu() {
    const [isAlertOpen , setIsAlertOpen] = useState(false)
    if (isAlertOpen) {
      return <div className="flex gap-1 bg-black text-white">
        list of alerts <button onClick={() => setIsAlertOpen(false)}>
          <LeftArrowSvg />
        </button>
      </div>
    }
    return <div className=" flex flex-col gap-2">
      <button className="flex gap-1 bg-black text-white items-center">
        <AlertSvg className="flex flex-col justify-center" />
        <div className="flex flex-col justify-center">
          alert count = 12
        </div>
        <div className="flex flex-col justify-center">
          <button onClick={() => setIsAlertOpen(true)}>
            <RightArrowSvg  />
          </button>
        </div>
      </button>
    </div>
  }