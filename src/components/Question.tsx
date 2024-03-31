interface QuestionProps {
  imageSource: string;
  label: string;
}

export const Question = ({imageSource, label} : QuestionProps) => {
  return (
    <div className="border-solid border-4 border-green-600 rounded-xl bg-gray-900 text-white">
      <img className="object-cover h-[50vh] rounded-t-md" src={imageSource}/>
      <p className="border-solid border-t-[6px] border-green-600 min-w-full min-h-full">{label}</p>
    </div>
  )
}