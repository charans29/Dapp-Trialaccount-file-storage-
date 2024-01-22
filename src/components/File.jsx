import { Download, Share2, X } from "lucide-react";
import "./File.css"
/* eslint-disable react/prop-types */

export function File({ files, setFiles }) {
  const removeFile = (name) => {
    setFiles((prev) => prev.filter((file) => file.name !== name));
  };

  return (
    <div>
      {files.map((file) => (
        <div
          className="bg-slate-400 rounded-xl h-16 my-4 mr-4 ml-4 shadow shadow-inner shadow-md hover:shadow-2xl cursor-pointer grid grid-cols-4 place-content-center pl-2"
          key={file.name}
        >
          <div className="col-span-2 my-auto">{file.name}</div>
          <div className="col span-1 my-auto">{file.size} KB</div>
          <div className="col-span-1">
            <button className="hover:bg-red-500 mx-2 h-12 w-12 m-auto rounded-xl px-3">
              <Share2 />
            </button>
            <button className="hover:bg-red-500 mx-2 h-12 w-12 m-auto rounded-xl px-3">
              <Download />
            </button>
            <button  className="hover:bg-red-500 mx-2 h-12 w-12 m-auto rounded-xl px-3"onClick={() => removeFile(file.name)}>
              <X />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
