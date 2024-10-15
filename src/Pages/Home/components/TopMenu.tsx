import { useState } from "react";
import { TreeLinesHamburgerSVG } from "../../../components/Icons/TreeLinesHamburgerSVG";
import { MENU_LIST } from "../../../utils/const";


export function TopMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return <div className="h-full flex justify-between items-center px-2 bg-primary text-primary-foreground">
      <div className="flex gap-4 relative">
        <TreeLinesHamburgerSVG onClick={() => setIsMenuOpen(!isMenuOpen)} />
        <div>
          Mozart
        </div>
        {isMenuOpen ? <div className=" absolute w-[15vw] top-4 z-20 bg-primary text-primary-foreground px-2">
          {MENU_LIST.map((menu) => <div key={menu.title} className={`flex gap-2 p-2 hover:border-b hover:border-t hover:border-active`}>
            {<menu.component className=""  />} {menu.title}
          </div>)}
        </div> : <></>}
      </div>
      <div>
        Operational env
      </div>
    </div> 
  }