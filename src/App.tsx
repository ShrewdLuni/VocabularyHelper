import { useState } from "react"
import { MainPage } from "./components/MainPage"
import { GamePage } from "./components/GamePage";

function App() {

  const [playing, setPlaying] = useState(false);

  function togglePlay() {
    setPlaying(!playing);
  }

  return (
    <div>
      {!playing
      ? <MainPage onPlay={togglePlay}/>
      : <GamePage/>
      }
    </div>
  )
}

export default App
