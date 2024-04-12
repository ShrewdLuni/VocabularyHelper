import { Input } from "../../../../ui/input"

export const TypeInput = () => {
  return (
    <div>
      <Input value={"value"} onChange={() => {}} placeholder="What is it?" className="mt-[5%] bg-gray-800 border-solid border-2 border-purple-500 rounded-2xl text-center text-white focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"/>
    </div>
  )
}