import { useState } from "react";

import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface GamePageProps {
  onEnd: any;//type
}

export const GamePage = ({onEnd} : GamePageProps) => {
  const [value, setValue] = useState("");
  const [index, setIndex] = useState(0);
  const [isEnded, setIsEnded] = useState(false);

  //get data from db
  let data:any = [
    {text:"Apple", imageUrl:"https://cdn.britannica.com/22/187222-050-07B17FB6/apples-on-a-tree-branch.jpg"},
    {text:"Banana", imageUrl:"https://images.everydayhealth.com/images/diet-nutrition/all-about-bananas-nutrition-facts-health-benefits-recipes-and-more-rm-722x406.jpg"}]

  function handleInput(event : any) {
    if(event.target.value.slice(-1) === " ")
      checkAnswer(event.target.value)
    else
      setValue(event.target.value);
  }

  function checkAnswer(userAnswer : string) {
    const dbAnswer = "db" + " ";
    const result = (userAnswer === dbAnswer);
    
    if(result)
      toast.success("", {position: "top-left", theme: "dark",autoClose: 5000});
    else
      toast.error(`${dbAnswer}✅ ,not: ${userAnswer}❌`, {position: "top-left", theme: "dark",autoClose: 15000});

    if(index >= data.length-1){
      setIsEnded(true);

      setTimeout(function() {
        onEnd();
        setIsEnded(false);
      }, 15000);
    }
    else{
      setIndex(index + 1);
      //db add
      setValue("");
    }
  }

	return (
    <div className={cn("text-center bg-gray-900 h-screen flex flex-col justify-center items-center text-white px-6")}>
      <div> 
        {!isEnded
        ? <div>
            <div className="border-solid border-4 border-green-600 rounded-xl">
              <img className="object-cover h-[50vh] rounded-t-md" src={data[index].imageUrl}/>
              <p className="border-solid border-t-[6px] border-green-600">{data[index].text}</p>
            </div>
            <div>
              <Input value={value} onChange={(event) => handleInput(event)} placeholder="What is it?" className="mt-[5%] bg-gray-800 border-solid border-2 border-purple-500 rounded-2xl text-center text-white focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"/>
            </div>
          </div>
        : <div>Game Over</div>
        }
      </div>
      <ToastContainer stacked style={{ width: "200  px" }}/>
      
    </div>
	)
}