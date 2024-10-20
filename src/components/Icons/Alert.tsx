import { IconPropsI } from "./types";


export function AlertSvg(props: IconPropsI) {
    return <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className} style={props.style}  onClick={() => props.onClick?.()}>
      <path d="M16 9.41421C16.6491 10.2797 17 11.3324 17 12.4142C17 13.4961 16.6491 14.5487 16 15.4142M19.364 18.7782C20.1997 17.9425 20.8627 16.9503 21.315 15.8584C21.7673 14.7665 22.0001 13.5961 22.0001 12.4142C22.0001 11.2323 21.7673 10.062 21.315 8.97004C20.8627 7.8781 20.1997 6.88594 19.364 6.05021M11 5.11621C10.9998 4.97693 10.9583 4.84082 10.8809 4.72507C10.8034 4.60932 10.6934 4.51912 10.5647 4.46584C10.436 4.41256 10.2944 4.3986 10.1577 4.42572C10.0211 4.45284 9.89559 4.51982 9.797 4.61821L6.413 8.00121C6.2824 8.13259 6.12703 8.23674 5.95589 8.30764C5.78475 8.37853 5.60124 8.41476 5.416 8.41421H3C2.73478 8.41421 2.48043 8.51957 2.29289 8.70711C2.10536 8.89464 2 9.149 2 9.41421V15.4142C2 15.6794 2.10536 15.9338 2.29289 16.1213C2.48043 16.3089 2.73478 16.4142 3 16.4142H5.416C5.60124 16.4137 5.78475 16.4499 5.95589 16.5208C6.12703 16.5917 6.2824 16.6958 6.413 16.8272L9.796 20.2112C9.8946 20.31 10.0203 20.3773 10.1572 20.4046C10.2941 20.4319 10.436 20.4179 10.5649 20.3645C10.6939 20.311 10.804 20.2205 10.8815 20.1044C10.959 19.9883 11.0002 19.8518 11 19.7122V5.11621Z" stroke="#E4E4E4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    
  }