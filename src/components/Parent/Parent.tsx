import { cn } from "clsx-for-tailwind";
import { useState } from "react";
import AptonKid from "./AptonKid";
import Frederika from "./Frederica";

export const Parent = () => {
    console.log("Parent rendered");
  const [isBlue, setBlue] = useState(false);
  const ball = "Ball";

  return (
    <div className="border bg-amber-200 m-4">
      <h2>Parent</h2>
      <div
        className={cn("min-h-10 w-10 rounded shadow bg-amber-300 m-4", {
          "bg-blue-200": isBlue,
        })}
      ></div>
      <button
        type="button"
        className="border py-2 px-4 m-4 rounded"
        onClick={() => setBlue((prev) => !prev)}
      >
        change color
      </button>
      <AptonKid toy= {ball} />
      <Frederika />
    </div>
  );
};
