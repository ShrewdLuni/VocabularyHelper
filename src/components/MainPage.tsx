import { cn } from "@/lib/utils";
import { GameModes } from "./GameModes"
import { Button } from "./ui/button"

interface MainPageProps {
  onPlay: any;
  categories: Record<string, boolean>;
  updateCategories: any;
  setAllCategories: any;
  gameMode : number;
  setGameMode : any;
}
//make up for
export const MainPage = ({onPlay, categories,updateCategories,setAllCategories,gameMode,setGameMode} : MainPageProps) => {
	return (
    <div className="text-center bg-gray-900 h-screen flex flex-col justify-center items-center">
      <div className="grid grid-cols-4 gap-4 lg:gap-6 w-[90%] lg:w-[50%]">
        <Button className={cn("bg-rose-500 text-white w-full lg:h-[8vh] text-lg",categories["family"] && "border-solid border-green-500 border-2 p-[2px] lg:border-4")} variant="ghost" onClick={() => {updateCategories({...categories,"family" : !categories["family"]})}}>{"Family"}</Button>
        <Button className={cn("bg-rose-500 text-white w-full lg:h-[8vh] text-lg",categories["food"] && "border-solid border-green-500 border-2 p-[2px] lg:border-4")} variant="ghost" onClick={() => {updateCategories({...categories,"food" : !categories["food"]})}}>{"Food"}</Button>
        <Button className={cn("bg-rose-500 text-white w-full lg:h-[8vh] text-lg",categories["routine"] && "border-solid border-green-500 border-2 p-[2px] lg:border-4")} variant="ghost" onClick={() => {updateCategories({...categories,"routine" : !categories["routine"]})}}>{"Routine"}</Button>
        <Button className={cn("bg-rose-500 text-white w-full lg:h-[8vh] text-lg",categories["clothes"] && "border-solid border-green-500 border-2 p-[2px] lg:border-4")} variant="ghost" onClick={() => {updateCategories({...categories,"clothes" : !categories["clothes"]})}}>{"Clothes"}</Button>
        <Button className={cn("bg-rose-500 text-white w-full lg:h-[8vh] text-lg",categories["health"] && "border-solid border-green-500 border-2 p-[2px] lg:border-4")} variant="ghost" onClick={() => {updateCategories({...categories,"health" : !categories["health"]})}}>{"Health"}</Button>
        <Button className={cn("bg-rose-500 text-white w-full lg:h-[8vh] text-lg",categories["weather"] && "border-solid border-green-500 border-2 p-[2px] lg:border-4")} variant="ghost" onClick={() => {updateCategories({...categories,"weather" : !categories["weather"]})}}>{"Weather"}</Button>
        <Button className={cn("bg-rose-500 text-white w-full lg:h-[8vh] text-lg",categories["location"] && "border-solid border-green-500 border-2 p-[2px] lg:border-4")} variant="ghost" onClick={() => {updateCategories({...categories,"location" : !categories["location"]})}}>{"Location"}</Button>
        <Button className={cn("bg-rose-500 text-white w-full lg:h-[8vh] text-lg",categories["ALL"] && "border-solid border-green-500 border-2 p-[2px] lg:border-4")} variant="ghost" onClick={() => {setAllCategories(!categories["ALL"])}}>{"All"}</Button>
      </div>
      <GameModes gameMode={gameMode} setGameMode={setGameMode}/>
      <Button className="bg-rose-500 text-white mt-[15%] lg:mt-[5%] w-" variant="ghost" size="xl" onClick={(categories) => (onPlay(categories))}>
        Play
      </Button>
    </div>
	)
}