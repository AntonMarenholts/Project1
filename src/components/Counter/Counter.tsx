import style from "./Counter.module.css";
import { useCounter } from "../../hooks/useCounter";

export const Counter = () => {
  const { counter, increment, decrement, reset } = useCounter(10);
  return (
    <div className={style.counterCard}>
      <h2>Counter: {counter}</h2>
      <button type="button" onClick={decrement}>
        -1
      </button>
      <button type="button" onClick={increment}>
        +1
      </button>
      <button type="button" onClick={reset}>
        Reset
      </button>
    </div>
  );
};

// создайте кнопку -1, которая бы уменьшала значения counter на 1 
// дополнительно создайте кнопку reset, которая бы сбрасывала значения counter до нуля
// дополнительно, добавьте стили

