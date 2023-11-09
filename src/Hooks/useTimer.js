import { useState, useEffect } from "react";

export const useTimer = (time) => {
  const [totalTimeInSeconds, setTotalTimeInSeconds] = useState(30);

  const minutes = Math.floor(totalTimeInSeconds / 60);
  const seconds = totalTimeInSeconds % 60;

  useEffect(() => {
    if (totalTimeInSeconds === 0) {
      return;
    } else {
      setTimeout(() => {
        setTotalTimeInSeconds(totalTimeInSeconds - 1);
      }, 1000);
    }
  }, [totalTimeInSeconds]);

  return { minutes, seconds };
};
