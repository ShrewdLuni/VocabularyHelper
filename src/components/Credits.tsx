import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "./ui/button"

export const Credits = () => {
  return (
    <div className="flex flex-row gap-x-4">
      <Button className="flex flex-row gap-x-2 text-gray-400 hover:text-white bg-inherit hover:bg-inherit">
        <Mail/>
        <p>Contact</p>
      </Button>
      <Button className="flex flex-row gap-x-2 text-gray-400 hover:text-white bg-inherit hover:bg-inherit">
        <Github/>
        <p>github</p>
      </Button>
      <Button className="flex flex-row gap-x-2 text-gray-400 hover:text-white bg-inherit hover:bg-inherit">
        <Linkedin/>
        <p>Linkedin</p>
      </Button>
    </div>
  )
}