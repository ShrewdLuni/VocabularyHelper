import { cn } from "@/lib/utils";
import { GameModes } from "./GameModes"
import { Button } from "./ui/button"

interface MainPageProps {
  onPlay: any;
  categories: Record<string, boolean>;
  updateCategories: any;
}

export const MainPage = ({onPlay, categories,updateCategories} : MainPageProps) => {
	return (
    <div className="text-center bg-gray-900 h-screen flex flex-col justify-center items-center">
      <div className="grid grid-cols-4 gap-4 w-[90%] lg:w-[50%]">
        <div>
          <Button className={cn("bg-rose-500 text-white w-full h-full max-w-[170px]",categories["family"] && "border-solid border-green-500 border-2 p-[2px]")} variant="ghost" onClick={() => {updateCategories({...categories,"family" : !categories["family"]})}}>{"Family"}</Button>
        </div>
        <div>
          <Button className={cn("bg-rose-500 text-white w-full h-full max-w-[170px]",categories["food"] && "border-solid border-green-500 border-2 p-[2px]")} variant="ghost" onClick={() => {updateCategories({...categories,"food" : !categories["food"]})}}>{"Food"}</Button>
        </div>
        <div>
          <Button className={cn("bg-rose-500 text-white w-full h-full max-w-[170px]",categories["routine"] && "border-solid border-green-500 border-2 p-[2px]")} variant="ghost" onClick={() => {updateCategories({...categories,"routine" : !categories["routine"]})}}>{"Routine"}</Button>
        </div>
        <div>
          <Button className={cn("bg-rose-500 text-white w-full h-full max-w-[170px]",categories["clothes"] && "border-solid border-green-500 border-2 p-[2px]")} variant="ghost" onClick={() => {updateCategories({...categories,"clothes" : !categories["clothes"]})}}>{"Clothes"}</Button>
        </div>
        <div>
          <Button className={cn("bg-rose-500 text-white w-full h-full max-w-[170px]",categories["health"] && "border-solid border-green-500 border-2 p-[2px]")} variant="ghost" onClick={() => {updateCategories({...categories,"health" : !categories["health"]})}}>{"Health"}</Button>
        </div>
        <div>
          <Button className={cn("bg-rose-500 text-white w-full h-full max-w-[170px]",categories["weather"] && "border-solid border-green-500 border-2 p-[2px]")} variant="ghost" onClick={() => {updateCategories({...categories,"weather" : !categories["weather"]})}}>{"Weather"}</Button>
        </div>
        <div>
          <Button className={cn("bg-rose-500 text-white w-full h-full max-w-[170px]",categories["location"] && "border-solid border-green-500 border-2 p-[2px]")} variant="ghost" onClick={() => {updateCategories({...categories,"location" : !categories["location"]})}}>{"Location"}</Button>
        </div>
      </div>

      <GameModes/>
      <Button className="bg-rose-500 text-white mt-[15%] lg:mt-[5%] " variant="ghost" size="lg" onClick={(categories) => (onPlay(categories))}>
        Play
      </Button>
    </div>
	)
}