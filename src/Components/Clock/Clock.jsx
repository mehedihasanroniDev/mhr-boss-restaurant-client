import { useState, useEffect } from 'react';
import moment from 'moment';

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(moment().format(' h:mm:ss a'));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(moment().format(' h:mm:ss A'));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
      <>
      {currentTime}
      </>
  );
};

export default Clock;
