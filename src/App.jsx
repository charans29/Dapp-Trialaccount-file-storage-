import { useState } from "react"
import DisplayFiles from "./components/DisplayFiles"
import DragFiles from "./components/DragFiles"

function App() {
  const [files, setFiles] = useState([])

  return (
    <div className="min-h-screen place-content-center grid grid-cols-1 md:grid-cols-2 gap-7 px-5 md:px-7 my-10 md:my-0">
      <DragFiles files={files} setFiles={setFiles} />
      <DisplayFiles files={files} setFiles={setFiles} />
    </div>
  )
}

export default App
