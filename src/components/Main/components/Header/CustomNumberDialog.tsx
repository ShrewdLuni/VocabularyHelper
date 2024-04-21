import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { Wrench } from "lucide-react"
import { BarItem } from "./BarItm"
import { Input } from "@/components/ui/input"

interface CustomNumberDialogProps{
  questionLimit : number
  setQuestionLimit: (value : number) => void
}


export function CustomNumberDialog({questionLimit,setQuestionLimit} : CustomNumberDialogProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <BarItem icon={Wrench} isActive={questionLimit != 10 && questionLimit != 25 && questionLimit != 50 && questionLimit != 100}/>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-black">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-white">Test duration</AlertDialogTitle>
          <Input type="number" value={questionLimit} onChange={(e) => setQuestionLimit(e.target.valueAsNumber)}/>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction className="w-full">Ok</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
