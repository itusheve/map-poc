import { IconPropsI } from "./types";


export function DoubleArrowDown(props: IconPropsI) {
    return <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className} style={props.style}  onClick={() => props.onClick?.()}>
        <path d="M6.41632 5L10.583 9.16667L14.7497 5" stroke="#E4E4E4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M6.41632 10.8333L10.583 15L14.7497 10.8333" stroke="#E4E4E4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    
}