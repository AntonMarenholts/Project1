import { cn } from "clsx-for-tailwind";
import { useState } from "react";

export const ToogleCard = () => {
  const [isBlue, setBlue] = useState(false);

  return (
    <div>
      <h2>Toogle Card</h2>
      <div
        className={cn(
          "min-h-10 w-10 m-4 rounded shadow",
          isBlue ? "bg-blue-200 " : "bg-amber-300",
          { "bg-blue-200": isBlue }
        )}
      ></div>
      <button type="button" className="border py-2 px-4 m-4 rounded" onClick={()=>setBlue((prev)=>!prev)}>change color</button>
    </div>
  );
};
