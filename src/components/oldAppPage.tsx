import { useState } from "react"
import { MainPage } from "./MainPage";
import { GamePage } from "./GamePage";

import * as wordData from '../assets/wordsData/words.json';

interface CategoriesList {
  [key: string]: boolean;
}

export const OldAppPage = () => {
  const [playing, setPlaying] = useState(false);
  const [gameMode, setGameMode] = useState(0);
  const [wordsLimit,setWordsLimit] = useState(-1  );
  const [categories,setCategories] = useState<CategoriesList>(
  {
    "food":false,
    "family":false,
    "routine":false,
    "clothes":false,
    "health":false,
    "weather":false,
    "animals":false,
    "people":false,
    "nature":false,
    "city":false,
    "body":false,
    "pairsFirst":false,
    "pairsSecond":false,
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
      "animals":state,
      "people":state,
      "nature":state,
      "city":state,
      "body":state,
      "ALL":state})
  }

  function getData(){
    const jsonData : any = wordData.words.filter((word) =>  categories[word.category] === true);
    //word results : {key : {number : (0.5,1,2,3), streak:(0,1,2)}}
    let tempData : object[] = [];
    for (let i = 0; i < jsonData.length; i++) {
      let number = 1//get number by key(data.title)
      while(number > 0){
        tempData.push(jsonData[i]);
        number -= 1;
      }
    }
    for (let i = tempData.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [tempData[i], tempData[j]] = [tempData[j], tempData[i]];
    }
    return tempData;
  }

  return (
    <div className="overflow-hidden">
      {!playing
      ? <MainPage onPlay={() => {setPlaying(true);if(Object.values(categories).filter(item => item === true).length == 0){setAllCategories(true)}}} categories={categories} updateCategories={setCategories} setAllCategories={setAllCategories} gameMode={gameMode} setGameMode={setGameMode} setWordsLimit={setWordsLimit}/>
      : <GamePage onEnd={() => setPlaying(false)} data={getData()} gameModeType={gameMode === 0} wordsLimit={wordsLimit}/>
      }
    </div>
  )
}
