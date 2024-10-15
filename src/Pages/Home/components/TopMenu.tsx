import { useState } from "react";
import { TreeLinesHamburgerSVG } from "../../../components/Icons/TreeLinesHamburgerSVG";
import { MENU_LIST } from "../../../utils/const";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";


export function TopMenu() {
    const { i18n } = useTranslation();

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return <div className="h-full flex justify-between items-center px-2 bg-primary text-primary-foreground">
      <div className="flex gap-4 relative">
        <TreeLinesHamburgerSVG onClick={() => setIsMenuOpen(!isMenuOpen)} />
        <div>
          Mozart
        </div>
        {isMenuOpen ? <div className=" absolute w-[15vw] top-4 z-20 bg-primary text-primary-foreground px-2">
          {MENU_LIST.map((menu) => <NavLink to={menu.path} key={menu.title} className={({ isActive }) => `flex gap-2 p-2 hover:border-b hover:border-t hover:border-active  text-white hover:text-white transition-all ${isActive ? " text-active" : ""}`}>
            {<menu.component className=""  />} {menu.title}
          </NavLink>)}
        </div> : <></>}
      </div>
      <div>
        <div>
          Operational env
        </div>
        <select value={i18n.language} onChange={(e) => i18n.changeLanguage(e.target.value)}>
          {/* {i18n.languages.map((lang) => <option key={lang} value={lang}>{lang}</option>)} */}
          <option  value={'he'}>he</option>
          <option  value={'en'}>en</option>
        </select>
      </div>
    </div> 
  }