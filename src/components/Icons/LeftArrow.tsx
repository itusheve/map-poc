import { IconPropsI } from "./types";


export function LeftArrowSvg(props: IconPropsI) {
    return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className} style={props.style}  onClick={() => props.onClick?.()}>
    <path d="M11 17L6 12L11 7" stroke="#E4E4E4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18 17L13 12L18 7" stroke="#E4E4E4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    
  }

