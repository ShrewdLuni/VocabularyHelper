import { useState } from "react"
import { MainPage } from "./components/MainPage"
import { GamePage } from "./components/GamePage";



function App() {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="overflow-hidden">
      {!playing
      ? <MainPage onPlay={() => setPlaying(true)}/>
      : <GamePage onEnd={() => setPlaying(false)}/>
      }
    </div>
  )
}

export default App
