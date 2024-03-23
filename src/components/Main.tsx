import { GameArea } from "./GameArea"
import { Header } from "./Header"

export const Main = () => {
  return (
    <div>
      <div className="realative h-full grid grid-rows-[1fr,auto,1fr] box-border gap-y-10">
        <Header/>
        <GameArea/>
        <div></div>
      </div>
    </div>
  )
}