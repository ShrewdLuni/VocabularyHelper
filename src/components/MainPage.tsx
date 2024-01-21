import { Categories } from "./Categories"
import { GameModes } from "./GameModes"
import { Button } from "./ui/button"

interface MainPageProps {
  onPlay: any;
}

export const MainPage = ({onPlay} : MainPageProps) => {
	return (
    <div className="text-center bg-gray-900 h-screen flex flex-col justify-center items-center">
      <Categories/>
      <GameModes/>
      <Button className="bg-rose-500 text-white mt-[15%] lg:mt-[5%] " variant="ghost" size="lg" onClick={onPlay}>
        Play
      </Button>
    </div>
	)
}