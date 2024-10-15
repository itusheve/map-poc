import { IconPropsI } from "./types";


export function PlusSvg(props: IconPropsI) {
    return <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className} style={props.style}  onClick={() => props.onClick?.()}>
        <path d="M4.25583 10.3429H15.9225" stroke="#CDCDCD" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.0892 4.50956V16.1762" stroke="#E4E4E4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

}