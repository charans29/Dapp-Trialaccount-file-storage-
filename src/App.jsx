import { Contents } from "./components/Contents"
import { Navbar } from "./components/Navbar"
import { useState } from "react";


function App() {
  const [files, setFiles] = useState([]);

  return (
    <div className="relative">
      <Navbar />
      <Contents files={files} setFiles={setFiles}/>
    </div>
  )
}

export default App
