'use client';

import { useEffect, useRef, useState } from 'react';

interface Props {
  second: number;
}

export const Timer = ({ second }: Props) => {
  const [time, setTime] = useState(second);
  const timerId = useRef<NodeJS.Timeout>(null);

  const m = Math.floor(time / 60)
    .toString()
    .padStart(2, '0');
  const s = (time % 60).toString().padStart(2, '0');

  useEffect(() => {
    timerId.current = setInterval(() => {
      setTime((t) => {
        if (t <= 1) {
          if (timerId.current) {
            clearInterval(timerId.current);
            timerId.current = null;
          }
        }
        return t - 1;
      });
    }, 1000);

    return () => {
      if (timerId.current) {
        clearInterval(timerId.current);
      }
    };
  }, []);

  if (time <= 0) {
    return null;
  }

  return (
    <div className="text-emp">
      <span>{m}</span>
      <span>:</span>
      <span>{s}</span>
    </div>
  );
};
