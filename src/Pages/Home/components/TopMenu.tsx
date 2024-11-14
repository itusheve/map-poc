import { useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

import { TreeLinesHamburgerSvg } from "../../../components/Icons/TreeLinesHamburgerSvg";
import { MENU_LIST } from "../../../utils/const";

export function TopMenu() {
	const { t } = useTranslation();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<div className="flex h-[6vh] items-center justify-between bg-[#0E1A32] px-2 text-xl text-primary-foreground">
			<div className="relative flex gap-4">
				<TreeLinesHamburgerSvg onClick={() => setIsMenuOpen(!isMenuOpen)} />
				<div>
					Mozart Logo
				</div>
				{isMenuOpen ? <div className="absolute top-4 z-20 w-[15vw] bg-primary px-2 text-primary-foreground">
					{MENU_LIST.map((menu) => <NavLink to={menu.path} key={menu.title} className={({ isActive }) => `flex gap-2 p-2 hover:border-b hover:border-t hover:border-active  text-white hover:text-white transition-all ${isActive ? " text-active" : ""}`}>
						{<menu.component className=""  />} {t(menu.title)}
					</NavLink>)}
				</div> : <></>}
			</div>
			<div className="flex gap-2">
				<div>{t("TopMenu.RealEnvironment")}</div>
			</div>
		</div>
	); 
}
