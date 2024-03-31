import { Button } from "./ui/button"

export const ButtonInput = () => {
  return (
    <div className="flex gap-x-3 text-white mt-4">
      <Button className={"bg-rose-500  w-full h-full"} variant="ghost" onClick={() => {}}>{"test1"}</Button>
      <Button className={"bg-rose-500 w-full h-full"} variant="ghost" onClick={() => {}}>{"test2"}</Button>
      <Button className={"bg-rose-500 w-full h-full"} variant="ghost" onClick={() => {}}>{"test4"}</Button>
    </div>
  )
}