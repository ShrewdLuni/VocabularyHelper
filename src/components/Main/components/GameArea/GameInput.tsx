import { ButtonInput } from "./InputTypes/ButtonInput"
import { TypeInput } from "./InputTypes/TypeInput"

interface InputProps{
  inputType : string
}

export const GameInput = ({inputType} : InputProps) => {
  return (
    <div>
      {(() => {
        switch (inputType) {
          case 'Typing':
            return <TypeInput/>
          case 'Buttons':
            return <ButtonInput/> 
        }
      })()}
    </div>
  )
}