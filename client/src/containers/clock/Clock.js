import React, { useState } from "react";
import { useEffect } from "react";

function Clock() {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }
  return (
    <div>
      <div className="clock">{date.toLocaleTimeString()}</div>
    </div>
  );
}

export default Clock;
