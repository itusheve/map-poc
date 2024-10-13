

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
        <UserData />

    </div>
}
import { useAtom } from 'jotai'
import { idAtom, userAtom } from '../Pages/Home/HomeState'
const UserData = () => {
    const [userQuery] = useAtom(userAtom)
    const [id_atom, set_id_atom] = useAtom(idAtom)
    if (userQuery.isPending) return <div>Loading...</div>
    if (userQuery.isError) return <div>Error</div>
    
    return <div>
        <button onClick={() => {
            set_id_atom(id_atom + 1)
        }}>count</button>
        <pre>{JSON.stringify(userQuery.data, null , 2)}</pre>
    </div>
  }