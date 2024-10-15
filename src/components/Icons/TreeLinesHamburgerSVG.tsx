import { IconPropsI } from "./types";


export function TreeLinesHamburgerSVG(props: IconPropsI) {
  return <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"
  className={props.className} style={props.style} onClick={() => props.onClick?.()}
  >
  <path d="M3 6.79785H21" stroke="#E4E4E4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M3 12.7979H21" stroke="#E4E4E4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M3 18.7979H21" stroke="#E4E4E4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  
  
}