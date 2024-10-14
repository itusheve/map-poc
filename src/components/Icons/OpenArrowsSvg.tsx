import { IconPropsI } from "./types";


export function OpenArrowsSvg(props: IconPropsI) {
    return <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className} style={props.style}  onClick={() => props.onClick?.()}>
    <path d="M15.5 3H21.5V9" stroke="#E4E4E4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M9.5 21H3.5V15" stroke="#E4E4E4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M21.5 3L14.5 10" stroke="#E4E4E4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M3.5 21L10.5 14" stroke="#E4E4E4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    
}