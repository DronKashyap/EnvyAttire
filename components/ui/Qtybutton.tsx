"use client";
import { useState } from "react";

function QtyButton() {
  const [num, setNum] = useState(0); // Corrected casing for setNum

  function increase() {
    setNum(num + 1); // Use setNum to update the state
  }

  function decrease() {
    if (num > 0) {
      setNum(num - 1); // Use setNum to update the state
    }
  }

  return (
    <div className="flex rounded-xl bg-gray-300 w-24 justify-center">
      <button onClick={decrease} className="font-semibold">-</button>
      <h1 className="mx-3 mt-1 font-bold">{num}</h1>
      <button onClick={increase} className="font-semibold">+</button>
    </div>
  );
}

export default QtyButton;
