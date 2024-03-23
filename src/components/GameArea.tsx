import { Button } from "./ui/button"
import { Input } from "./ui/input"

export const GameArea = () => {
  return (
    <div className="text-white">
      <div>
        <div className="border-solid border-4 border-green-600 rounded-xl bg-gray-900">
          <img className="object-cover h-[50vh] rounded-t-md" src="https://media.architecturaldigest.com/photos/5da74823d599ec0008227ea8/16:9/w_2991,h_1682,c_limit/GettyImages-946087016.jpg"/>
          <p className="border-solid border-t-[6px] border-green-600 min-w-full min-h-full">{"test"}</p>
        </div>
      </div>
      <div>
        {false
        ? <div>
            <Input value={"value"} onChange={() => {}} placeholder="What is it?" className="mt-[5%] bg-gray-800 border-solid border-2 border-purple-500 rounded-2xl text-center text-white focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"/>
          </div>
        : <div className="flex gap-x-3">
            <Button className={"bg-rose-500 text-white w-full h-full mt-4"} variant="ghost" onClick={() => {}}>{"test1"}</Button>
            <Button className={"bg-rose-500 text-white w-full h-full mt-4"} variant="ghost" onClick={() => {}}>{"test2"}</Button>
            <Button className={"bg-rose-500 text-white w-full h-full mt-4"} variant="ghost" onClick={() => {}}>{"test2"}</Button>
          </div>
        }
      </div>
    </div>
  )
}