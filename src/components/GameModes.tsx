import { GameModeButton } from "./GameModeButtons"

interface GameModesProps {
	gameMode : number;
	setGameMode : any;
  }

export const GameModes = ({gameMode ,setGameMode} : GameModesProps) => {
	return (
		<div className="grid grid-cols-2 gap-4 w-[90%] mt-[10%] lg:w-[50%] lg:mt-[5%]">
      		<GameModeButton text="Type" state={gameMode === 0} toggleState={() => setGameMode(0)}/>
      		<GameModeButton text="Click" state={gameMode === 1} toggleState={() => setGameMode(1)}/>
		</div>
	)
}