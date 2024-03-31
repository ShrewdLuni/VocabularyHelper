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
            return (
              <div>
                <Input value={"value"} onChange={() => {}} placeholder="What is it?" className="mt-[5%] bg-gray-800 border-solid border-2 border-purple-500 rounded-2xl text-center text-white focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"/>
              </div>
            )
          case 'Buttons':
            return (
              <div className="flex gap-x-3 text-white mt-4">
                <Button className={"bg-rose-500  w-full h-full"} variant="ghost" onClick={() => {}}>{"test1"}</Button>
                <Button className={"bg-rose-500 w-full h-full"} variant="ghost" onClick={() => {}}>{"test2"}</Button>
                <Button className={"bg-rose-500 w-full h-full"} variant="ghost" onClick={() => {}}>{"test4"}</Button>
              </div>
            )
        }
      })()}

    </div>
  )
}