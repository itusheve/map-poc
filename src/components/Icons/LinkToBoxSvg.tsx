import { SvgIconPropsI } from "./types";

export function LinkToBoxSvg(props: SvgIconPropsI) {
    return <svg {...props} width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_b_748_8317)">
            <path d="M25.5 18.8333V23.8333C25.5 24.2754 25.3244 24.6993 25.0118 25.0118C24.6993 25.3244 24.2754 25.5 23.8333 25.5H12.1667C11.7246 25.5 11.3007 25.3244 10.9882 25.0118C10.6756 24.6993 10.5 24.2754 10.5 23.8333V12.1667C10.5 11.7246 10.6756 11.3007 10.9882 10.9882C11.3007 10.6756 11.7246 10.5 12.1667 10.5H17.1667" stroke="#E4E4E4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M25.5 10.5L18 18" stroke="#E4E4E4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M20.5 10.5H25.5V15.5" stroke="#E4E4E4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </g>
        <defs>
            <filter id="filter0_b_748_8317" x="-70" y="-70" width="176" height="176" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="35" />
                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_748_8317" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_748_8317" result="shape" />
            </filter>
        </defs>
    </svg>

}