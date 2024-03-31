import { Navbar } from "./components/Navbar";
import { Credits } from "./components/Credits";
import { Main } from "./components/Main";

function App() {
  

  return (
    <div className="bg-gray-900">
      <div className="text-center flex flex-col h-screen items-center p-8 gap-8 w-full justify-center overflow-hidden">
        <Navbar/>
        <Main/> 
        <Credits/>
      </div>
    </div>
  )
}

export default App
