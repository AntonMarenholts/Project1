import { cn } from "clsx-for-tailwind";
import { useCallback, useMemo, useState } from "react";
import AptonKid from "./AptonKid";
import Frederika from "./Frederica";

function getBall() {
  return { title: "Ball" };
}
export const Parent = () => {
  console.log("Parent rendered");

  const [isBlue, setBlue] = useState(false);

  const [counter, setCounter] = useState(0);

  const ball = useMemo(getBall, []);

  const paintGiraffe = useCallback(() => {
    console.log("Picture of giraffe");
  }, []);

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
      <p>Counter: {counter}</p>
      <button
        type="button"
        onClick={() => {
          setCounter((prev) => prev + 1);
        }}
      >+1</button>
      <AptonKid toy={ball} paint={paintGiraffe} />
      <Frederika />
    </div>
  );
};
