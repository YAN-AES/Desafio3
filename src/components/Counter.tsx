import React, { useState } from "react";

export function Counter() {
  const [count, setCount] = useState<number>(0);

  const handleIncrease = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrease = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className="flex flex-row gap-6 px-3 h-16 font-poppins font-medium border-gray3 border-2 rounded-lg">
      <button onClick={handleDecrease}>-</button>
      <div className="w-3 flex items-center justify-center"><span>{count}</span></div>
      <button onClick={handleIncrease}>+</button>
    </div>
  );
}
