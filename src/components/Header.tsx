import { Wrench } from "lucide-react"
import { BarItem } from "./barItem"

export const Header = () => {
  return (
    <div>
      <div className="text-white flex bg-gray-800 rounded-lg text-sm justify-around">
        <BarItem label="Grammar"/>
        <BarItem label="Vocabulary"/>
        <BarItem label="10" isNumber={true}/>
        <BarItem label="25" isNumber={true}/>
        <BarItem label="50" isNumber={true}/>
        <BarItem label="100" isNumber={true}/>
        <BarItem icon={Wrench}/>
      </div>
    </div>
  )
}