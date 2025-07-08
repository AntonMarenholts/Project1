import { useState } from "react";
import style from './Counter.module.css'

export const Counter = () => {

    const [counter, setCounter] = useState<number>(0);
    // tuple - кортеж
    // state, local state - состояние
    // setter function - функция сеттер

    function handlePlus(){
        // setCounter(counter+1);
        setCounter((prev) => prev + 1);
    }
    function handleMinus(){
        setCounter((i) => i - 1);
    }
    function handleReset() {
    setCounter(0);
  }
  return (
    <div className= {style.counterCard}>
        <h2>Counter: {counter}</h2>
        <button type="button" onClick={handleMinus}>-1</button>
        <button type="button" onClick={handlePlus}>+1</button>
        <button type="button" onClick={handleReset}>Reset</button>
        
    </div>
  )
}

// создайте кнопку -1, которая бы уменьшала значения counter на 1 
// дополнительно создайте кнопку reset, которая бы сбрасывала значения counter до нуля
// дополнительно, добавьте стили

