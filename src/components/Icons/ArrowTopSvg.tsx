import { SvgIconPropsI } from "./types";

export function ArrowTopSvg(props: SvgIconPropsI) {
	return (
		<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"
			{...props}>
			<path d="M17.5 11L12.5 6L7.5 11" stroke="#E4E4E4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
			<path d="M17.5 18L12.5 13L7.5 18" stroke="#E4E4E4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	);
}
