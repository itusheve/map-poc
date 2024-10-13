

export function Test() {


    return <div>
        <div className=" bg-red-300 relative h-[300px] w-[500px]">
            <div className=" bg-green-300 absolute bottom-0 w-full h-full">
                overlay
            </div>
            <div className="z-10 absolute top-1 right-1 bg-blue-400">
                hamburger
            </div>
            <div className=" z-10 absolute bottom-2 w-full bg-blue-400  ">
                bottom
            </div>
        </div>

    </div>
}