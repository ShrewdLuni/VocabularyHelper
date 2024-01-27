import { useEffect, useState } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";

import { cn } from "@/lib/utils";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface GamePageProps {
  onEnd: any;
  data: any;
  gameModeType: boolean;
}

export const GamePage = ({onEnd, data, gameModeType} : GamePageProps) => {
  const [value, setValue] = useState("");
  const [index, setIndex] = useState(0);
  const [isEnded, setIsEnded] = useState(false);

  const [right,setRight] = useState(0);
  const [wrong,setWrong] = useState(0);

  const [answerOptions, setAnswerOptions] = useState<number[]>([index,index,index]);

  useEffect(() => {
    getNames(0);
  }, [])

  function handleInput(event : any) {
    if(event.target.value.slice(-1) === " ")
      checkAnswer(event.target.value)
    else
      setValue(event.target.value);
  }

  function checkAnswer(userAnswer : string) {
    const answer = data[index].answer + " ";
    const result = (userAnswer.toLocaleLowerCase() === answer.toLocaleLowerCase());
    
    if(result){
      toast.success("", {position: "top-left", theme: "dark",autoClose: 5000});
      setRight(right + 1);
    }
    else{
      toast.error(`${answer}✅ ,not: ${userAnswer}❌`, {position: "top-left", theme: "dark",autoClose: 15000});
      setWrong(wrong + 1);
    }

    if(index >= data.length-1)
    {
      setIsEnded(true);
    }
    else
    {
      //if(!(word results.includes(data[index].title)){
      //  word results.add([key : data[index].title] : {number : 1, streak: 0})
      //}
      //else{
      //   word results.update([key : data[index].title] : {number : 1, streak: 0})
      //}
      getNames(1);
      setIndex(index + 1);
      setValue("");
    }
  }

  function getNames(extra : number){
    let one = Math.floor(Math.random()*data.length);
    let two = Math.floor(Math.random()*data.length);
    while(one == two){
      two = Math.floor(Math.random()*data.length);
    }
    const tempData : number[] = [one, index+extra, two]
    for (let i = tempData.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [tempData[i], tempData[j]] = [tempData[j], tempData[i]];
    }
    setAnswerOptions(tempData)
  }

	return (
    <div className={cn("text-center bg-gray-900 h-screen flex flex-col justify-center items-center text-white px-6")}>
      <div> 
        {!isEnded
        ? <div>
            <div className="border-solid border-4 border-green-600 rounded-xl">
              <img className="object-cover h-[50vh] rounded-t-md" src={data[index].imageSource}/>
              <p className="border-solid border-t-[6px] border-green-600 min-w-full min-h-full">{data[index].title}</p>
            </div>
            <div>
              {gameModeType
              ? <div>
                  <Input value={value} onChange={(event) => handleInput(event)} placeholder="What is it?" className="mt-[5%] bg-gray-800 border-solid border-2 border-purple-500 rounded-2xl text-center text-white focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"/>
                </div>
              : <div className="flex gap-x-3">
                  <Button className={"bg-rose-500 text-white w-full h-full mt-4"} variant="ghost" onClick={() => {checkAnswer(data[answerOptions[0]].answer + " ")}}>{data[answerOptions[0]].answer}</Button>
                  <Button className={"bg-rose-500 text-white w-full h-full mt-4"} variant="ghost" onClick={() => {checkAnswer(data[answerOptions[1]].answer + " ")}}>{data[answerOptions[1]].answer}</Button>
                  <Button className={"bg-rose-500 text-white w-full h-full mt-4"} variant="ghost" onClick={() => {checkAnswer(data[answerOptions[2]].answer + " ")}}>{data[answerOptions[2]].answer}</Button>
                </div>
              }
            </div>
          </div>
        : <div>
            Game Over
            <div className="flex gap-x-3 items-center justify-center my-2">
              <p>✅:{right}</p>
              <p>❌:{wrong}</p>
            </div>
            <p>{Math.ceil((right / (wrong + right)) * 100)}%</p>
            <Button className={"bg-rose-500 text-white w-full h-full mt-4"} variant="ghost" onClick={() => {onEnd();setIsEnded(false)}}>Exit</Button>
          </div>
        }
      </div>
      <ToastContainer stacked style={{ width: "200  px" }}/>
    </div>
	)
}