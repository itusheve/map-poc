import { AlertSvg } from "../../../components/Icons/Alert";
import { AlertIssueSvg } from "../../../components/Icons/AlertIssueSvg";
import { WarnSvg } from "../../../components/Icons/WarnSvg";

export function ListOfAlerts() {
    return <div className="flex flex-col gap-2 p-2 h-[80vh]">
        {/* This is the opened controlled menu */}
        <div className="flex justify-between ">
            <div className="flex gap-2 bg-secondary p-1 rounded">
                <div className=" bg-active text-active-foreground p-1 rounded">not read</div>
                <div className="p-1 rounded">archive</div>
            </div>
            <div className="flex gap-2">
                <div className="bg-secondary p-1 rounded">clean</div>
                <div className="bg-secondary p-1 rounded"><AlertSvg /></div>
            </div>
        </div>
        <div>
            <div>
                <h2>Date 18.10.2021 Wednesday</h2>
                <div className="flex flex-col gap-4">
                    <div className=" bg-alert text-alert-foreground border-alert-foreground border-2 py-1 px-2 rounded-lg">
                        <div className="text-[#7C7C7C]">Wednesday 12:03</div>
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-4">
                                <div><AlertIssueSvg /></div>
                                <div>
                                    <b>תקלה</b>
                                    <div>
                                        תקלה!
                                        אמצעי SDA-A, RX:0 הגיע לטמפרטורה גבוהה, בוצע כיבוי אוטומטי. 
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-end">
                                read
                            </div>
                        </div>
                        
                    </div>
                    <div className=" bg-alert text-warning-foreground border-warning-foreground border-2 py-1 px-2 rounded-lg">
                        <div className="text-[#7C7C7C]">Wednesday 12:03</div>
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-4">
                                <div><WarnSvg /></div>
                                <div>
                                    <b>אזהרה</b>
                                    <div>
                                        תקלה!
                                        אמצעי SDA-A, RX:0 הגיע לטמפרטורה גבוהה, בוצע כיבוי אוטומטי. 
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-end">
                                read
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
}