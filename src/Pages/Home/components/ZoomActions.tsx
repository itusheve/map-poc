import { OpenArrowsSvg } from "../../../components/Icons/OpenArrowsSvg";
import { ZoomInSvg } from "../../../components/Icons/ZoomInSvg";
import { ZoomOutSvg } from "../../../components/Icons/ZoomOutSvg";

export function ZoomActions() {
	return (
		<div className="flex flex-col gap-2">
			<button className="rounded-xl bg-[#0e1a32]/60 p-2"><OpenArrowsSvg className="size-6"/></button>
			<button className="rounded-xl bg-[#0e1a32]/60 p-2"><ZoomInSvg className="size-6 stroke-black" /></button>
			<button className="rounded-xl bg-[#0e1a32]/60 p-2"><ZoomOutSvg className="size-6"/></button>
		</div>
	);
}
