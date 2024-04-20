import { BarItem } from "./BarItm"
import { CustomNumberDialog } from "./CustomNumberDialog"

interface HeaderProps{
  inputType: string
  gameMode: string
  questionLimit: number

  setInputType: (value : "Typing" | "Buttons") => void
  setGameMode: (value : string) => void
  setQuestionLimit: (value : number) => void
}

export const Header = ({inputType,gameMode,questionLimit,setGameMode,setQuestionLimit,setInputType} : HeaderProps) => {
  return (
    <div>
      <div className="text-white flex bg-gray-800 rounded-lg text-sm justify-around items-center h-[4vh]">
        <div className="flex flex-row">
          <BarItem label="Grammar" onClick={() => setGameMode("Grammar")} isActive={gameMode == "Grammar"}/>
          <BarItem label="Vocabulary" onClick={() => setGameMode("Vocabulary")} isActive={gameMode == "Vocabulary"}/>
        </div>
        <div className="min-w-[4px] w-[1%] h-[70%] bg-gray-900 rounded-xl self-center"></div>
        <div className="flex flex-row">
          <BarItem label="10" isNumber={true} onClick={() => setQuestionLimit(10)} isActive={questionLimit == 10}/>
          <BarItem label="25" isNumber={true} onClick={() => setQuestionLimit(25)} isActive={questionLimit == 25}/>
          <BarItem label="50" isNumber={true} onClick={() => setQuestionLimit(50)} isActive={questionLimit == 50}/>
          <BarItem label="100" isNumber={true} onClick={() => setQuestionLimit(100)} isActive={questionLimit == 100}/>
          <CustomNumberDialog questionLimit={questionLimit} setQuestionLimit={setQuestionLimit}/>
        </div>
        <div className="min-w-[4px] w-[1%] h-[70%] bg-gray-900 rounded-xl self-center"></div>
        <div className="flex flex-row">         
          <BarItem label="Typing" onClick={() => setInputType("Typing")} isActive={inputType == "Typing"}/>
          <BarItem label="Clicking" onClick={() => setInputType("Buttons")} isActive={inputType == "Buttons"}/>
        </div>
      </div>
    </div>
  )
}