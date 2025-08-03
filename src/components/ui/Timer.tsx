import { useState, useEffect } from "react";
import { Play, Pause, RotateCcw } from "lucide-react";
interface TimerProps {
  onTimeUpdate?: (time: number) => void;
}
const Timer: React.FC<TimerProps> = ({ onTimeUpdate }) => {
  const [time, setTime] = useState<number>(0);
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    let interval: number | null = null;

    if (isActive) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          const newTime = prevTime + 1;
          onTimeUpdate?.(newTime);
          return newTime;
        });
      }, 1000);
    } else if (!isActive && time !== 0) {
      if (interval) clearInterval(interval);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, time, onTimeUpdate]);
  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    if (hrs > 0) {
      return `${hrs.toString().padStart(2, "0")}:${mins
        .toString()
        .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
    }
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };
  const handlePlayPause = () => {
    setIsActive(!isActive);
  };
  const handleReset = () => {
    setTime(0);
    setIsActive(false);
  };
  return (
    <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-6 text-white shadow-lg">
      <div className="text-center">
        <h3 className="text-sm font-medium text-emerald-100 mb-2">
          Session Duration
        </h3>
        <div className="text-4 font-bold mb-4 font-mono tracking-wider">
          {formatTime(time)}
        </div>
        <div className="flex justify-center space-x-3">
          <button
            onClick={handlePlayPause}
            className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-200 hover:scale-105"
          >
            {!isActive ? (
              <Play className="w-6 h-6 ml-0.5" />
            ) : (
              <Pause className="w-6 h-6" />
            )}
          </button>
          <button
            onClick={handleReset}
            className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-200 hover:scale-105"
          >
            <RotateCcw className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
