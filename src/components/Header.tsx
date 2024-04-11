import { Wrench } from "lucide-react"
import { BarItem } from "./barItem"


interface HeaderProps{
  setInputType: (value : string) => void
  setGameMode: (value : string) => void
  setQuestionLimit: (value : number) => void
}

export const Header = ({setInputType,setGameMode,setQuestionLimit} : HeaderProps) => {
  return (
    <div>
      <div className="text-white flex bg-gray-800 rounded-lg text-sm justify-around">
        <BarItem label="Grammar" onClick={() => setGameMode("Grammar")}/>
        <BarItem label="Vocabulary" onClick={() => setGameMode("Vocabulary")}/>
        <BarItem label="10" isNumber={true} onClick={() => setQuestionLimit(10)}/>
        <BarItem label="25" isNumber={true} onClick={() => setQuestionLimit(25)}/>
        <BarItem label="50" isNumber={true} onClick={() => setQuestionLimit(50)}/>
        <BarItem label="100" isNumber={true} onClick={() => setQuestionLimit(100)}/>
        <BarItem icon={Wrench}/>
        <BarItem label="Typing" onClick={() => setInputType("Typing")}/>
        <BarItem label="Clicking" onClick={() => setInputType("Buttons")}/>
      </div>
    </div>
  )
}