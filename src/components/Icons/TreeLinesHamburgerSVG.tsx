import { SvgIconPropsI } from "./types";

export function TreeLinesHamburgerSvg(props: SvgIconPropsI) {
	return (
		<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"
			{...props}>
			<path d="M3 6.79785H21" stroke="#E4E4E4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
			<path d="M3 12.7979H21" stroke="#E4E4E4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
			<path d="M3 18.7979H21" stroke="#E4E4E4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
		</svg>
	);
}
