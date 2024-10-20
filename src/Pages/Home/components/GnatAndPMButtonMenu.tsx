import { useState } from "react"
import { DoubleArrowDown } from "../../../components/Icons/DoubleArrowDown"
import { OpenArrowsSvg } from "../../../components/Icons/OpenArrowsSvg"
import { GnatDetails } from "./GnatDetails"

export function GnatAndPMButtonMenu() {
    const [isGnatOpen, setIsGnatOpen] = useState(false)
    return <div>
      <div className="flex justify-between">
        <button className="p-2 bg-primary text-primary-foreground flex gap-2">
          <DoubleArrowDown className={`transition-all ${isGnatOpen ? 'rotate-180' : ''}`} onClick={() => setIsGnatOpen(!isGnatOpen)}/>
          <div>
            gnat
          </div>
          <OpenArrowsSvg />
        </button>
        <button className="p-2 bg-primary text-primary-foreground ">
          new PM
        </button>
      </div>
      {isGnatOpen && <GnatDetails />}
    </div>
  }
  