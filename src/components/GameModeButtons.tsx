import { Button } from "./ui/button"
import { cn } from "@/lib/utils";

interface GameModeButtonProps {
  text: string;
  state: boolean;
  toggleState: any;
}

export const GameModeButton = ({text,state,toggleState} : GameModeButtonProps) => {
  return (
    <div>
      <Button className={cn("bg-rose-500 text-white w-full h-full lg:h-[6vh]",state && "bg-purple-600")} variant="ghost" onClick={toggleState}>{text}</Button>
    </div>
  )
}