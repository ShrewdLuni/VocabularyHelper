import { GameArea } from "./components/GameArea/index"
import { Header } from "./components/Header/index"

interface GameProps{
  inputType: string
  questionImageLink: string
  questionLabel: string
  gameMode: "Grammar" | "Vocabulary"
  questionLimit: number

  setInputType: (value : "Typing" | "Buttons") => void
  setQuestionImageLink: (value : string) => void
  setQuestionLabel: (value : string) => void
  setGameMode: (value : "Grammar" | "Vocabulary") => void
  setQuestionLimit: (value : number) => void
}


export const Main = ({inputType,questionImageLink,questionLabel,gameMode,questionLimit,setInputType,setGameMode,setQuestionLimit} : GameProps) => {
  return (
    <div>
      <div className="realative grid grid-rows-[1fr,auto,1fr] box-border gap-y-10">
        <Header inputType={inputType} questionLimit={questionLimit} gameMode={gameMode} setInputType={setInputType} setGameMode={setGameMode} setQuestionLimit={setQuestionLimit}/>
        <GameArea inputType={inputType} questionImageLink={questionImageLink} questionLabel={questionLabel}/>
        <div></div>
      </div>
    </div>
  )
}