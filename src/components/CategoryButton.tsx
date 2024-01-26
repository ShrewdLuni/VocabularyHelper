import { Button } from "./ui/button"
import { cn } from "@/lib/utils";

interface CategoryButtonProps {
  title: string;
  key: string;
  categories: Record<string, boolean>;
  updateCategories: any;
  setOneCategory : any;
}

export const CategoryButton = ({title, key, categories, setOneCategory} : CategoryButtonProps) => {

  return (
    <Button className={cn("bg-rose-500 text-white w-full h-full max-w-[170px]",categories[key] && "border-solid border-green-500 border-2 p-[2px]")} variant="ghost" onClick={() => {setOneCategory(key)}}>{title}</Button>
  )
}