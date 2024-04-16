import { LucideIcon } from "lucide-react";
import { Button } from "../../../ui/button"
import { IconType } from "react-icons";
import { cn } from "@/lib/utils";

interface BarItemProps {
  label? : String;
  icon? :  LucideIcon | IconType;
  isNumber?: boolean;
  isActive: boolean

  onClick?: (value: any) => void
}

export const BarItem = ({icon: Icon, label,isNumber,onClick,isActive} : BarItemProps) => {
  return (
    <Button className="text-gray-400 text-xs hover:text-white bg-inherit hover:bg-inherit" onClick={onClick}>
      {Icon && <Icon className={cn("h-4 w-4",isActive && "text-white font-bold")}/>}
      {label && <p className={cn(isNumber && "h-4 w-4", isActive && "text-white font-bold")}>{label}</p>}
    </Button>
  )
}