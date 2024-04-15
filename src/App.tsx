import { Navbar } from "./components/Navbar/index";
import { Credits } from "./components/Credits/index";
import { Main } from "./components/Main/index";
import { useState } from "react";

function App() {
  const [inputType,setInputType] = useState("Typing")
  const [questionImageLink,setQuestionImageLink] = useState("https://www.rafaeldejongh.com/wp-content/uploads/2017/08/Synthwave-Neon-80s-Background-Marmoset.jpg")
  const [questionLabel,setQuestionLabel] = useState("testing")
  const [gameMode,setGameMode] = useState("")
  const [questionLimit,setQuestionLimit] = useState(100)

  function nextQuestion() {
    //getdata
    setQuestionImageLink("data")
    setQuestionLabel("data")
  }


  return (
    <div className="bg-gray-900">
      <div className="text-center flex flex-col h-screen items-center p-8 gap-8 w-full justify-center overflow-hidden">
        <Navbar/>
        <Main inputType={inputType} questionImageLink={questionImageLink} questionLabel={questionLabel} gameMode={gameMode} questionLimit={questionLimit} setInputType={setInputType} setQuestionImageLink={setQuestionImageLink} setQuestionLabel={setQuestionLabel} setGameMode={setGameMode} setQuestionLimit={setQuestionLimit}/>
        <Credits/>
      </div>
    </div>
  )
}

export default App
