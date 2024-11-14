import { useState } from "react"

export const Itamar = () => {
    const [url, setUrl] = useState('http://localhost:4001/api/v1/devices')
    const [data, setData] = useState()
    const [status, setStatus] = useState<boolean | null>(null)

    const handleClick = async() => {
        const res = await fetch(url, {method: 'GET'})
        const parsedResponse = await res.json()
        if (!res.ok) return setStatus(false)
        setData(parsedResponse)
        setStatus(true)
    }

    return (
        <>
            <div className="flex flex-col w-screen h-screen justify-center items-center">
                <input type="text" className='text-cyan-600 border-1 w-[350px] border-cyan-600 p-1 rounded-sm placeholder:text-center placeholder:text-gray-600' placeholder='your server url' onChange={(e) => setUrl(e.target.value)}/>
                <button onClick={() => handleClick()} className="bg-slate-600 text-cyan-600 hover:border-4 hover:transform hover:scale-110 hover:border-cyan-600 p-1 rounded-sm">Get Devices</button>
                <span className="text-sm text-cyan-600">press here to send Request to Ms server to get the Devices Info</span>
                <div className="text-sm text-emerald-400">status : {`${status}`}</div>
                <pre className="bg-slate-900 text-yellow-100 w-[40vw] h-[40vh] text-lg">{JSON.stringify(data, null, 2)}</pre>
            </div>
        </>
    )
}