/* eslint-disable react/prop-types */
import { File } from "./File.jsx"
import { Drag } from "./Drag.jsx"

export function Contents({files,setFiles}){
    return(<div className="relative grid grid-cols-3">
        <div className="bg-gray-500 col-span-1 py-40 fixed top-20 w-1/3 h-50">
            <Drag setFiles={setFiles}/>
        </div>
        <div className="col-span-1">
        </div>
        <div className="h-max-content col-span-2">
            <File files={files} setFiles={setFiles}/>
        </div>
    </div>)
}