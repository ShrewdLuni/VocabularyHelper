import { Navbar } from "./components/Navbar/index";
import { Credits } from "./components/Credits/index";
import { Main } from "./components/Main/index";
import { useEffect, useState } from "react";

function App() {
  const [inputType,setInputType] = useState<"Typing" | "Buttons">("Typing")
  const [gameMode,setGameMode] = useState("")
  const [questionLimit,setQuestionLimit] = useState(100)

  const [questionIndex,setQuestionIndex] = useState(0);
  const [correct,setCorrect] = useState(0);


  const [questionImageLink,setQuestionImageLink] = useState("https://www.rafaeldejongh.com/wp-content/uploads/2017/08/Synthwave-Neon-80s-Background-Marmoset.jpg")
  const [questionLabel,setQuestionLabel] = useState("testing")

  const [userAnswer,setUserAnswer] = useState("");

  useEffect(() => {
    nextQuestion();
  }, [questionIndex]); 


  function nextQuestion() {
    setQuestionImageLink("data")
    setQuestionLabel("data")
  }

  function handleAnswer() {
    if(userAnswer == "data.answer"){
      setCorrect(correct + 1);
    }
    else{
      //add weak spot to db 
    }
    setQuestionIndex(questionIndex + 1);
  }

  return (
    <div className="bg-gray-900">
      <div className="text-center flex flex-col h-screen items-center p-8 gap-8 w-full justify-center overflow-hidden">
        <Navbar/>{/*Todo*/}
        <Main inputType={inputType} questionImageLink={questionImageLink} questionLabel={questionLabel} gameMode={gameMode} questionLimit={questionLimit} setInputType={setInputType} setQuestionImageLink={setQuestionImageLink} setQuestionLabel={setQuestionLabel} setGameMode={setGameMode} setQuestionLimit={setQuestionLimit}/>{/*Todo*/}
        <Credits/>{/*Done*/}
      </div>
    </div>
  )
}

export default App
