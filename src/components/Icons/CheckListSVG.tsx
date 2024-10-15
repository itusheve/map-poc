import { IconPropsI } from "./types";


export function CheckListSVG(props: IconPropsI) {

    return <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"
    className={props.className} style={props.style}  onClick={() => props.onClick?.()}
>
        <path fillRule="evenodd" clipRule="evenodd" d="M18.7447 4.6875C19.1587 4.6875 19.5564 4.85234 19.8497 5.14531C20.1423 5.43828 20.307 5.83594 20.307 6.25V23.4375C20.307 23.8516 20.1423 24.2492 19.8497 24.5422C19.5564 24.8352 19.1587 25 18.7447 25C15.7514 25 9.23925 25 6.24594 25C5.83192 25 5.43423 24.8352 5.14094 24.5422C4.84835 24.2492 4.68359 23.8516 4.68359 23.4375C4.68359 19.6539 4.68359 10.0336 4.68359 6.25C4.68359 5.83594 4.84835 5.43828 5.14094 5.14531C5.43423 4.85234 5.83192 4.6875 6.24594 4.6875H18.7447Z" fill="#363636"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M18.7444 19.9094V21.0938C18.7444 21.7156 18.4973 22.3117 18.0577 22.7508C17.6188 23.1906 17.0223 23.4375 16.4009 23.4375H3.90217C3.28078 23.4375 2.68425 23.1906 2.24538 22.7508C1.80579 22.3117 1.55865 21.7156 1.55865 21.0938V3.90625C1.55865 3.28437 1.80579 2.68828 2.24538 2.24922C2.68425 1.80937 3.28078 1.5625 3.90217 1.5625H16.4009C17.0223 1.5625 17.6188 1.80937 18.0577 2.24922C18.4973 2.68828 18.7444 3.28437 18.7444 3.90625V9.93047C19.7166 11.032 20.3068 12.4789 20.3068 14.0625C20.3068 15.5195 19.8068 16.8609 18.9696 17.9242L23.1488 22.1039C23.4535 22.4086 23.4535 22.9039 23.1488 23.2086C22.8435 23.5133 22.3485 23.5133 22.0438 23.2086L18.7444 19.9094ZM17.1821 8.65V3.90625C17.1821 3.69922 17.0997 3.5 16.9534 3.35391C16.8071 3.20703 16.6083 3.125 16.4009 3.125H3.90217C3.6948 3.125 3.49596 3.20703 3.34967 3.35391C3.20338 3.5 3.121 3.69922 3.121 3.90625V21.0938C3.121 21.3008 3.20338 21.5 3.34967 21.6461C3.49596 21.793 3.6948 21.875 3.90217 21.875H16.4009C16.6083 21.875 16.8071 21.793 16.9534 21.6461C17.0997 21.5 17.1821 21.3008 17.1821 21.0938V19.475C16.2624 20.0078 15.1951 20.3125 14.0574 20.3125C12.9602 20.3125 11.9284 20.0289 11.0314 19.5312H5.46451C5.03345 19.5312 4.68334 19.1812 4.68334 18.75C4.68334 18.3188 5.03345 17.9688 5.46451 17.9688H9.18005C8.80296 17.4984 8.49262 16.9734 8.26324 16.4062H5.46451C5.03345 16.4062 4.68334 16.0562 4.68334 15.625C4.68334 15.1938 5.03345 14.8438 5.46451 14.8438H7.85632C7.82436 14.5875 7.80803 14.3273 7.80803 14.0625C7.80803 13.7977 7.82436 13.5375 7.85632 13.2812H5.46451C5.03345 13.2812 4.68334 12.9312 4.68334 12.5C4.68334 12.0688 5.03345 11.7188 5.46451 11.7188H8.26324C8.49262 11.1516 8.80296 10.6266 9.18005 10.1562H5.46451C5.03345 10.1562 4.68334 9.80625 4.68334 9.375C4.68334 8.94375 5.03345 8.59375 5.46451 8.59375H11.0314C11.9284 8.09609 12.9602 7.8125 14.0574 7.8125C15.1951 7.8125 16.2624 8.11719 17.1821 8.65ZM18.7444 14.0625C18.7444 12.6758 18.1408 11.4281 17.1821 10.5695C16.7205 10.1563 16.1765 9.83281 15.5778 9.62734C15.1013 9.46406 14.5893 9.375 14.0574 9.375C13.1001 9.375 12.2096 9.6625 11.4668 10.1562C10.8652 10.5562 10.361 11.0914 9.99815 11.7188C9.72332 12.193 9.52945 12.7203 9.435 13.2812C9.39239 13.5352 9.37037 13.7961 9.37037 14.0625C9.37037 14.3289 9.39239 14.5898 9.435 14.8438C9.52945 15.4047 9.72332 15.932 9.99815 16.4062C10.361 17.0336 10.8652 17.5688 11.4668 17.9688C12.2096 18.4625 13.1001 18.75 14.0574 18.75C14.5893 18.75 15.1013 18.6609 15.5778 18.4977C15.9954 18.3539 16.386 18.1539 16.7411 17.9055C16.8952 17.7977 17.0422 17.6805 17.1821 17.5555C17.4321 17.3312 17.6572 17.0813 17.8546 16.8094C18.4142 16.0375 18.7444 15.0883 18.7444 14.0625ZM5.46451 7.03125C5.03345 7.03125 4.68334 6.68125 4.68334 6.25C4.68334 5.81875 5.03345 5.46875 5.46451 5.46875H10.5421C10.9732 5.46875 11.3233 5.81875 11.3233 6.25C11.3233 6.68125 10.9732 7.03125 10.5421 7.03125H5.46451ZM11.4547 14.957C11.1493 14.6516 11.1493 14.157 11.4547 13.8516C11.7593 13.5469 12.2543 13.5469 12.559 13.8516L13.6576 14.9508L16.1872 11.8586C16.4599 11.525 16.9527 11.4758 17.2865 11.7492C17.6195 12.0219 17.6693 12.5148 17.3958 12.8484L14.3202 16.6078C14.1803 16.7789 13.975 16.8828 13.7549 16.8937C13.534 16.9047 13.3195 16.8219 13.1633 16.6656L11.4547 14.957Z" fill="#FFF"/>
    </svg>
    
}