import { useState } from "react";
import { TreeLinesHamburgerSVG } from "../../../components/Icons/TreeLinesHamburgerSVG";
import { MENU_LIST } from "../../../utils/const";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";


export function TopMenu() {
    const { t } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return <div className="h-full flex justify-between items-center px-2 bg-[#0E1A32] text-primary-foreground text-xl">
      <div className="flex gap-4 relative">
        <TreeLinesHamburgerSVG onClick={() => setIsMenuOpen(!isMenuOpen)} />
        <div>
          Mozart Logo
        </div>
        {isMenuOpen ? <div className="absolute w-[15vw] top-4 z-20 bg-primary text-primary-foreground px-2">
          {MENU_LIST.map((menu) => <NavLink to={menu.path} key={menu.title} className={({ isActive }) => `flex gap-2 p-2 hover:border-b hover:border-t hover:border-active  text-white hover:text-white transition-all ${isActive ? " text-active" : ""}`}>
            {<menu.component className=""  />} {menu.title}
          </NavLink>)}
        </div> : <></>}
      </div>
      <div className="flex gap-2">
        <div>{t('TopMenu.RealEnvironment')}</div>
      </div>
    </div> 
  }