import { useState } from "react"
import { MainPage } from "./components/MainPage"
import { GamePage } from "./components/GamePage";

interface CategoriesList {
  [key: string]: boolean;
}

function App() {
  const [playing, setPlaying] = useState(false);
  const [categories,setCategories] = useState<CategoriesList>(
  {
    "food":false,
    "family":false,
    "routine":false,
    "clothes":false,
    "health":false,
    "weather":false,
    "location":false,
    "ALL" : false,
  });


  return (
    <div className="overflow-hidden">
      {!playing
      ? <MainPage onPlay={() => {setPlaying(true);}} categories={categories} updateCategories={setCategories} />
      : <GamePage onEnd={() => setPlaying(false)} categories={categories}/>
      }
    </div>
  )
}

export default App
