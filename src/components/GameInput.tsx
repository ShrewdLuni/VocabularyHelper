import { ButtonInput } from "./ButtonInput"
import { TypeInput } from "./TypeInput"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

interface InputProps{

}

export const GameInput = ({} : InputProps) => {
  let text = "Typing"
  
  return (

    <div>
      {(() => {
        switch (text) {
          case 'Typing':
            return <TypeInput/>
          case 'Buttons':
            return <ButtonInput/> 
        }
      })()}

    </div>
  )
}