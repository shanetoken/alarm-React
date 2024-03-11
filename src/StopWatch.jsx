import { useState, useEffect, useRef } from 'react';
import './App.css';

const sound = new Audio('https://www.sousound.com/music/jazz_fusion/jazz_01.mp3');

function StopWatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  // Update time
  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setElapsedTime((prevTime) => prevTime + 100);
      }, 100);
    }

    return () => clearInterval(interval);
  }, [isRunning]); // Only update effect when isRunning changes

  const formattedTime = () => {
    const minutes = Math.floor((elapsedTime % (60 * 60 * 1000)) / (60 * 1000));
    const seconds = Math.floor((elapsedTime % (60 * 1000)) / 1000);
    const miliseconds = Math.floor(elapsedTime % 1000);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${miliseconds.toString().padStart(3, '0')}`;
  };

  // Play Sound
  useEffect(() => {
    if (seconds >= 3 && isRunning) {
      sound.play().catch((error) => {
        console.error("Error playing sound:", error);
      });
    }
  }, [elapsedTime, isRunning]); // Update when elapsedTime or isRunning changes

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
    sound.pause(); // Pause sound on stop
  };

  const handleReset = () => {
    setIsRunning(false);
    setElapsedTime(0);
    sound.currentTime = 0; // Reset sound position on reset
  };

  return (
    <>
      <div className="stopwatch">
        <div id="stopwatch">{formattedTime()}</div>
        <div id="text-stop-watch">M : S : ML</div>
      </div>
      <div className="btn-watch">
        <button onClick={handleStart} disabled={isRunning}>Start</button>
        <button onClick={handleStop} disabled={!isRunning}>Stop</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </>
  );
}

export default StopWatch;
