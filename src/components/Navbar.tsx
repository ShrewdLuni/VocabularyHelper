import { Button } from "./ui/button"

import { User,Settings  } from 'lucide-react';

export const Navbar = () => {
  return (
    <div className="flex justify-end">
      <div className="flex flex-row">
        <Button>
          <Settings/>
        </Button>
        <Button>
          <User/>
        </Button>
      </div>
    </div>
  )
}