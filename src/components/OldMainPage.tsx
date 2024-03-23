import { cn } from "@/lib/utils";
import { GameModes } from "./GameModes"
import { Button } from "./ui/button"
import { Input } from "./ui/input";

interface OldMainPageProps {
  onPlay: any;
  categories: Record<string, boolean>;
  updateCategories: any;
  setAllCategories: any;
  gameMode : number;
  setGameMode : any;
  setWordsLimit: any;
}

export const OldMainPage = ({onPlay, categories,updateCategories,setAllCategories,gameMode,setGameMode,setWordsLimit} : OldMainPageProps) => {
	return (
    <div className="text-center bg-gray-900 h-screen flex flex-col justify-center items-center">
      <div className="grid grid-cols-4 gap-4 lg:gap-6 w-[90%] lg:w-[50%]">
        <Button className={cn("bg-rose-500 text-white w-full h-full truncate",categories["family"] && "border-solid border-green-500 border-2 p-[2px] lg:border-4 lg:p-[4px]")} variant="ghost" onClick={() => {updateCategories({...categories,"family" : !categories["family"]})}}>{"Family👪"}</Button>
        <Button className={cn("bg-rose-500 text-white w-full h-full truncate",categories["food"] && "border-solid border-green-500 border-2 p-[2px] lg:border-4 lg:p-[4px]" )} variant="ghost" onClick={() => {updateCategories({...categories,"food" : !categories["food"]})}}>{"Food🥘"}</Button>
        <Button className={cn("bg-rose-500 text-white w-full h-full truncate",categories["health"] && "border-solid border-green-500 border-2 p-[2px] lg:border-4 lg:p-[4px]")} variant="ghost" onClick={() => {updateCategories({...categories,"health" : !categories["health"]})}}>{"Health🏥"}</Button>
        <Button className={cn("bg-rose-500 text-white w-full h-full truncate",categories["clothes"] && "border-solid border-green-500 border-2 p-[2px] lg:border-4 lg:p-[4px]")} variant="ghost" onClick={() => {updateCategories({...categories,"clothes" : !categories["clothes"]})}}>{"Clothes🧥"}</Button>
        <Button className={cn("bg-rose-500 text-white w-full h-full truncate",categories["weather"] && "border-solid border-green-500 border-2 p-[2px] lg:border-4 lg:p-[4px]")} variant="ghost" onClick={() => {updateCategories({...categories,"weather" : !categories["weather"]})}}>{"Weather⛈️"}</Button>
        <Button className={cn("bg-rose-500 text-white w-full h-full truncate",categories["animals"] && "border-solid border-green-500 border-2 p-[2px] lg:border-4 lg:p-[4px]")} variant="ghost" onClick={() => {updateCategories({...categories,"animals" : !categories["animals"]})}}>{"Animals🐹"}</Button>
        <Button className={cn("bg-rose-500 text-white w-full h-full truncate",categories["routine"] && "border-solid border-green-500 border-2 p-[2px] lg:border-4 lg:p-[4px]")} variant="ghost" onClick={() => {updateCategories({...categories,"routine" : !categories["routine"]})}}>{"Routine🛀🏽"}</Button>
        <Button className={cn("bg-rose-500 text-white w-full h-full truncate",categories["people"] && "border-solid border-green-500 border-2 p-[2px] lg:border-4 lg:p-[4px]")} variant="ghost" onClick={() => {updateCategories({...categories,"people" : !categories["people"]})}}>{"People🧑🏾‍🤝‍🧑🏾"}</Button>
        <Button className={cn("bg-rose-500 text-white w-full h-full truncate",categories["nature"] && "border-solid border-green-500 border-2 p-[2px] lg:border-4 lg:p-[4px]")} variant="ghost" onClick={() => {updateCategories({...categories,"nature" : !categories["nature"]})}}>{"Nature🌸"}</Button>
        <Button className={cn("bg-rose-500 text-white w-full h-full truncate",categories["city"] && "border-solid border-green-500 border-2 p-[2px] lg:border-4 lg:p-[4px]")} variant="ghost" onClick={() => {updateCategories({...categories,"city" : !categories["city"]})}}>{"Сity🌇"}</Button>
        <Button className={cn("bg-rose-500 text-white w-full h-full truncate",categories["body"] && "border-solid border-green-500 border-2 p-[2px] lg:border-4 lg:p-[4px]")} variant="ghost" onClick={() => {updateCategories({...categories,"body" : !categories["body"]})}}>{"Body🏋🏾‍♂️"}</Button>
        <Button className={cn("bg-rose-500 text-white w-full h-full truncate",categories["pairsFirst"] && "border-solid border-green-500 border-2 p-[2px] lg:border-4 lg:p-[4px]")} variant="ghost" onClick={() => {updateCategories({...categories,"pairsFirst" : !categories["pairsFirst"]})}}>{"pairsFirst"}</Button>
        <Button className={cn("bg-rose-500 text-white w-full h-full truncate",categories["pairsSecond"] && "border-solid border-green-500 border-2 p-[2px] lg:border-4 lg:p-[4px]")} variant="ghost" onClick={() => {updateCategories({...categories,"pairsSecond" : !categories["pairsSecond"]})}}>{"pairsSecond"}</Button>
        <Button className={cn("bg-rose-500 text-white w-full h-full truncate",categories["ALL"] && "border-solid border-green-500 border-2 p-[2px] lg:border-4 lg:p-[4px]")} variant="ghost" onClick={() => {setAllCategories(!categories["ALL"])}}>{"All🌌"}</Button>
      </div>
      <GameModes gameMode={gameMode} setGameMode={setGameMode}/>
      <Input onChange={(event) => setWordsLimit(event.target.value)} placeholder="Enter Words Limit" className="mt-[2%] bg-gray-800 border-solid border-2 border-purple-500 rounded-2xl text-center text-white focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 w-[90%] lg:w-[35%]"/>
      <Button className="bg-rose-500 text-white mt-[15%] lg:mt-[5%] " variant="ghost" onClick={(categories) => (onPlay(categories))}>
        Play
      </Button>
    </div>
	)
}