/* eslint-disable react/prop-types */
import { UploadIcon } from "lucide-react";

export function Drag({setFiles}){

    const onFileDrop = (event) => {
        const newFiles = Array.from(event.target.files).map((file) => ({
          name: file.name,
          size: file.size,
        }));
        console.log(newFiles);
        setFiles((prev) => [...prev, ...newFiles]);
    };

    return(<div className="h-96 w-4/5 border-4 border-dashed border-gray-300 rounded-lg relative grid gap-y-4 content-center justify-items-center m-auto">
        <UploadIcon color="black" size={100} />
        <h2 className="text-3xl font-bold">Drag your file here</h2>
        <input type="file" className="w-full h-full absolute left-0 top-0 opacity-0 cursor-pointer" onChange={onFileDrop} multiple/>
    </div>)
}

