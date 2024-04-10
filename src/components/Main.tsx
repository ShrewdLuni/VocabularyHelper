import { GameArea } from "./GameArea"
import { Header } from "./Header"

interface GameProps{
  inputType: string
  questionImageLink: string
  questionLabel: string
}


export const Main = ({inputType,questionImageLink,questionLabel} : GameProps) => {
  return (
    <div>
      <div className="realative grid grid-rows-[1fr,auto,1fr] box-border gap-y-10">
        <Header/>
        <GameArea inputType={inputType} questionImageLink={questionImageLink} questionLabel={questionLabel}/>
        <div></div>
      </div>
    </div>
  )
}