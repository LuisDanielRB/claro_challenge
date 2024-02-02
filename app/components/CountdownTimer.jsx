"use client";

import React from "react";
import DateTimeDisplay from "./DateTimeDisplay";
import { useCountdown } from "../hooks/useCountdown";

const ExpiredNotice = () => {
  return (
    <div className="text-white text-3xl text-center">
      <span>TERMINADO</span>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="flex justify-center gap-4">
      <DateTimeDisplay value={days} type={"DÍAS"} isDanger={days <= 3} />
      <DateTimeDisplay value={hours} type={"HRS"} isDanger={false} />
      <DateTimeDisplay value={minutes} type={"MIN"} isDanger={false} />
      <DateTimeDisplay value={seconds} type={"SEG"} isDanger={false} />
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
