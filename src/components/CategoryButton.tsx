import { useState } from "react";
import { Button } from "./ui/button"
import { cn } from "@/lib/utils";

interface CategoryButtonProps {
  text: string;
  turnAll?: boolean;
}

export const CategoryButton = ({text, turnAll} : CategoryButtonProps) => {

  const [state, setState] = useState(false);

  function toggleState() {
    if(turnAll){
      console.log("");
    }
    setState(!state);
    //change state in db
  }

  return (
    <div>
      <Button className={cn("bg-rose-500 text-white w-full h-full max-w-[170px]",state && "border-solid border-green-500 border-2 p-[2px]")} variant="ghost" onClick={toggleState}>{text}</Button>
    </div>
  )
}