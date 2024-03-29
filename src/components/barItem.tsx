import { LucideIcon } from "lucide-react";
import { Button } from "./ui/button"
import { IconType } from "react-icons";
import { cn } from "@/lib/utils";

interface BarItemProps {
  label? : String;
  icon? :  LucideIcon | IconType;
  isNumber?: boolean;
}

export const BarItem = ({icon: Icon, label,isNumber} : BarItemProps) => {
  return (
    <Button className="text-gray-400 text-xs hover:text-white bg-inherit hover:bg-inherit">
      {Icon && <Icon className="h-4 w-4"/>}
      {label && <p className={cn(isNumber && "h-4 w-4")}>{label}</p>}
    </Button>
  )
}