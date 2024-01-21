import { Categories } from "./components/Categories"
import { GameModes } from "./components/GameModes"
import { Button } from "./components/ui/button"

function App() {
  return (
    <div className="text-center bg-gray-900 h-screen flex flex-col justify-center items-center">
      <Categories/>
      <GameModes/>
      <Button className="bg-rose-500 text-white mt-[15%] lg:mt-[5%] " variant="ghost" size="lg">
        Play
      </Button>
    </div>
  )
}

export default App
