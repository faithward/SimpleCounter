import React, { useState, useEffect } from "react";

//export this component in the form of html that's being rendered in home
//useEffect triggers something with a change
//useState changes variable value dynamically
//use useEffect to set the timer for the seconds useState

const Counter = () => {
  const [seconds, setSeconds] = useState(0);
  let singleDigit = Math.floor((seconds / 1) % 10);
  let tensDigit = Math.floor((seconds / 10) % 10);
  let hundredsDigit = Math.floor((seconds / 100) % 10);
  let thousandsDigit = Math.floor((seconds / 1000) % 10);

  useEffect(() => {
    setTimeout(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
  });

  return (
    <div>
      <div className="d-flex flex-row clock-BG">
        <div className="clock-indices">
          <h1>
            <i class="fas fa-clock"></i>
          </h1>
        </div>
        <ClockDigits value={thousandsDigit} />
        <ClockDigits value={hundredsDigit} />
        <ClockDigits value={tensDigit} />
        <ClockDigits value={singleDigit} />
      </div>
    </div>
  );
};

export default Counter;
