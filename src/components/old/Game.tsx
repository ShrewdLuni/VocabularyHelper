import { Progress } from "../ui/progress";

interface GameProps{
  index: number;
  limit:number;
  data: any;
}

export const Game = ({index,limit,data} : GameProps) => {
    return (
      <div>
          <p className="mb-2">{index + 1} / {limit + 1}</p>
          <Progress value={(index + 1) / (limit + 1) * 100} className="mb-3"/>
          <div className="border-solid border-4 border-green-600 rounded-xl bg-gray-900">
            <img className="object-cover h-[50vh] rounded-t-md" src={data[index].imageSource}/>
            <p className="border-solid border-t-[6px] border-green-600 min-w-full min-h-full">{data[index].title}</p>
          </div>
      </div>
    )
}