// 13. Create a counter with Increase and Decrease buttons. Update the counter when the buttons are clicked.

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  return (
    <div className="p-5 m-10 flex gap-5 font-bold text-2xl items-center">
      <button className="" onClick={increase}>+</button>
      <h1>{count}</h1>
      <button className="" onClick={decrease}>-</button>
    </div>
  );
}