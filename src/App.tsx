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

  function setAllCategories(state : boolean) {
    setCategories({
      "food": state,
      "family":state,
      "routine":state,
      "clothes":state,
      "health":state,
      "weather":state,
      "location":state,
      "ALL":state})
  }


  return (
    <div className="overflow-hidden">
      {!playing
      ? <MainPage onPlay={() => {setPlaying(true);if(Object.values(categories).filter(item => item === true).length == 0){setAllCategories(true)}}} categories={categories} updateCategories={setCategories} setAllCategories={setAllCategories}/>
      : <GamePage onEnd={() => setPlaying(false)} categories={categories}/>
      }
    </div>
  )
}

export default App
