import { GameArea } from "./GameArea"
import { Header } from "./Header"

interface GameProps{
  inputType: string
  questionImageLink: string
  questionLabel: string
  gameMode: string
  questionLimit: number

  setInputType: (value : string) => void
  setQuestionImageLink: (value : string) => void
  setQuestionLabel: (value : string) => void
  setGameMode: (value : string) => void
  setQuestionLimit: (value : number) => void
}


export const Main = ({inputType,questionImageLink,questionLabel,setInputType,setGameMode,setQuestionLimit} : GameProps) => {
  return (
    <div>
      <div className="realative grid grid-rows-[1fr,auto,1fr] box-border gap-y-10">
        <Header setInputType={setInputType} setGameMode={setGameMode} setQuestionLimit={setQuestionLimit}/>
        <GameArea inputType={inputType} questionImageLink={questionImageLink} questionLabel={questionLabel}/>
        <div></div>
      </div>
    </div>
  )
}