import { GameInput } from "./GameInput"
import { Question } from "./Question"

export const GameArea = () => {
  return (
    <div>
      <Question imageSource="https://media.architecturaldigest.com/photos/5da74823d599ec0008227ea8/16:9/w_2991,h_1682,c_limit/GettyImages-946087016.jpg" label="4321"/>
      <GameInput/>
    </div>
  )
}