import { GameInput } from "./GameInput"
import { Question } from "./Question"

interface GameProps{
  inputType: string
  questionImageLink: string
  questionLabel: string
}


export const GameArea = ({inputType, questionImageLink, questionLabel} : GameProps) => {
  return (
    <div>
      <Question imageSource={questionImageLink} label={questionLabel}/>
      <GameInput inputType={inputType}/>
    </div>
  )
}