import { useState } from "react"
import { GameModeButton } from "./GameModeButtons"

export const GameModes = () => {
  const [activeIndex, setActiveIndex] = useState(0);

	return (
		<div className="grid grid-cols-2 gap-4 w-[90%] mt-[10%] lg:w-[50%] lg:mt-[5%]">
      		<GameModeButton text="Type" state={activeIndex === 0} toggleState={() => setActiveIndex(0)}/>
      		<GameModeButton text="Click" state={activeIndex === 1} toggleState={() => setActiveIndex(1)}/>
		</div>
	)
}