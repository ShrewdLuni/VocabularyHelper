import { Button } from "../ui/button";

interface GameOverProps{
  right: number;
  wrong:number;
  onClick: any;
}

export const GameOver = ({right,wrong,onClick} : GameOverProps) => {
  return (
    <div>
      Game Over
      <div className="flex gap-x-3 items-center justify-center my-2">
        <p>✅:{right}</p>
        <p>❌:{wrong}</p>
      </div>
      <p>{Math.ceil((right / (wrong + right)) * 100)}%</p>
      <Button className={"bg-rose-500 text-white w-full h-full mt-4"} variant="ghost" onClick={onClick}>Exit</Button>
    </div>
  )
}