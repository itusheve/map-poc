import { IconPropsI } from "./types";


export function RightArrowSvg(props: IconPropsI) {
    return <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" 
    className={props.className} style={props.style} onClick={() => props.onClick?.()}
    >
        <path d="M6 17.4142L11 12.4142L6 7.41418" stroke="#E4E4E4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13 17.4142L18 12.4142L13 7.41418" stroke="#E4E4E4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    
  }

