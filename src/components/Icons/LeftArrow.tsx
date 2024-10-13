/**
 */




import React from 'react';
interface LeftArrowSvgPropsI {
    className?: string;
    style?: React.CSSProperties;
}

export function LeftArrowSvg(props: LeftArrowSvgPropsI) {
    return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className} style={props.style}>
    <path d="M11 17L6 12L11 7" stroke="#E4E4E4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M18 17L13 12L18 7" stroke="#E4E4E4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    
  }

