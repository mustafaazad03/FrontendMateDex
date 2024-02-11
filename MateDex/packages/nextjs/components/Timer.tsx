import React, { useEffect, useState } from 'react';

const Timer = ({ callQueuedTime }: { callQueuedTime: any }) => {
  const [time, setTime] = useState(() => new Date().getHours());
  useEffect(() => {
    const queuedTime = new Date(callQueuedTime).getHours();
    const intervalId = setInterval(function () {
      setTime(new Date().getTime() - queuedTime);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    }
  }, [callQueuedTime]);
  return <p>{time}</p>;
};

export default Timer;
