import { Navbar } from "./components/Navbar";
import { Credits } from "./components/Credits";
import { Main } from "./components/Main";
import { useState } from "react";

function App() {
  const [inputType,setInputType] = useState("Typing")
  const [questionImageLink,setQuestionImageLink] = useState("https://www.rafaeldejongh.com/wp-content/uploads/2017/08/Synthwave-Neon-80s-Background-Marmoset.jpg")
  const [questionLabel,setQuestionLabel] = useState("testing")


  function nextQuestion() {
    //getdata
    setQuestionImageLink("data")
    setQuestionLabel("data")
  }

  return (
    <div className="bg-gray-900">
      <div className="text-center flex flex-col h-screen items-center p-8 gap-8 w-full justify-center overflow-hidden">
        <Navbar/>
        <Main inputType={inputType} questionImageLink={questionImageLink} questionLabel={questionLabel}/>
        <Credits/>
      </div>
    </div>
  )
}

export default App
