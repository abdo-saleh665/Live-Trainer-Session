import { Mic, MicOff, VideoOff, Video } from "lucide-react";
import { useState, useEffect } from "react";
import TrainerProfile from "./TrainerProfile";
import MessageOverlay from "./MessageOverlay";
import Timer from "./Timer";

const LiveTrainerSession = () => {
  const [sessionTime, setSessionTime] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);

  const mockTrainer = {
    name: "John Doe",
    avatar:
      "https://images.pexels.com/photos/6389075/pexels-photo-6389075.jpeg?_gl=1*nbkwjc*_ga*MTkzNjc2NDY4LjE3NTQyMjM3NTA.*_ga_8JE65Q40S6*czE3NTQyMjM3NDkkbzEkZzEkdDE3NTQyMjM4MDQkajUkbDAkaDA",
    specialization: "HIIT & Strength Training",
    rating: 4.9,
    totalSessions: 1587,
    yearsExperience: 9,
    certifications: ["NASM-CPT", "HIIT Certified", "Nutrition Coach"],
    isLive: true,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="bg-white shadow-sm border-b border-gray-200 px-4 py-3">
        <div className="max-w-7xl  flex items-center justify-start">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">
                LIVE SESSION
              </span>
            </div>
            <div className="text-sm text-gray-500">
              {Math.floor(sessionTime / 60)}:
              {(sessionTime % 60).toString().padStart(2, "0")} Elapsed
            </div>
          </div>
        </div>
      </div>
      {/*Session Section*/}
      <div className="mx-w-7xl mx-auto p-4 lg:p-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <div className="relative bg-black rounded-2xl overflow-hidden shadow-xl aspect-video">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to gray-900 flex items-center justify-center"></div>

              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <div className="flex items-center space-x-4 bg-black/50 backdrop-blur-sm rounded-full px-6 py-3">
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className={`p-3 rounded-full transition-all duration-200 ${
                      isMuted
                        ? "bg-red-500 hover:bg-red-600 text-white"
                        : "bg-white/20 hover:bg-white/30 text-white"
                    }`}
                  >
                    {isMuted ? (
                      <MicOff className="w-5 h-5" />
                    ) : (
                      <Mic className="w-5 h-5" />
                    )}
                  </button>
                  <button
                    onClick={() => setIsVideoOff(!isVideoOff)}
                    className={`p-3 rounded-full transition-all duration-200 ${
                      isVideoOff
                        ? "bg-red-500 hover:bg-red-600 text-white"
                        : "bg-white/20 hover:bg-white/30 text-white"
                    }`}
                  >
                    {isVideoOff ? (
                      <VideoOff className="w-5 h-5" />
                    ) : (
                      <Video className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <div className="flex items-center space-x-4 bg-black/50 backdrop-blur-sm rounded-full px-6 py-3">
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className={`p-3 rounded-full transition-all duration-200 ${
                      isMuted
                        ? "bg-red-500 hover:bg-red-600 text-white"
                        : "bg-white/20 hover:bg-white/30 text-white"
                    }`}
                  >
                    {isMuted ? (
                      <MicOff className="w-5 h-5" />
                    ) : (
                      <Mic className="w-5 h-5" />
                    )}
                  </button>
                  <button
                    onClick={() => setIsVideoOff(!isVideoOff)}
                    className={`p-3 rounded-full transition-all duration-200 ${
                      isVideoOff
                        ? "bg-red-500 hover:bg-red-600 text-white"
                        : "bg-white/20 hover:bg-white/30 text-white"
                    }`}
                  >
                    {isVideoOff ? (
                      <VideoOff className="w-5 h-5" />
                    ) : (
                      <Video className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <div className="flex items-center space-x-4 bg-white/50 backdrop-blur-sm rounded-full px-6 py-3">
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className={`p-3 rounded-full transition-all duration-200 ${
                      isMuted
                        ? "bg-red-500 hover:bg-red-600 text-white"
                        : "bg-white/20 hover:bg-white/30 text-white"
                    }`}
                  >
                    {isMuted ? (
                      <MicOff className="w-5 h-5" />
                    ) : (
                      <Mic className="w-5 h-5" />
                    )}
                  </button>
                  <button
                    onClick={() => setIsVideoOff(!isVideoOff)}
                    className={`p-3 rounded-full transition-all duration-200 ${
                      isVideoOff
                        ? "bg-red-500 hover:bg-red-600 text-white"
                        : "bg-white/20 hover:bg-white/30 text-white"
                    }`}
                  >
                    {isVideoOff ? (
                      <VideoOff className="w-5 h-5" />
                    ) : (
                      <Video className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              <div className="absolute top-4 left-4">
                <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                  <span>LIVE</span>
                </div>
              </div>
            </div>
            <div className="mt-4 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg text-gray-900 font-bold">
                    Full Body HIIT Workout
                  </h2>
                  <p className="text-gray-600 text-sm">
                    High Intensity Interval Training (HIIT) is a type of workout
                    that involves short bursts of high-intensity exercises
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500">Next Exercise</div>
                  <div className="font-semibold text-gray-900">
                    Burpees - 45s
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1 space-y-6">
            <Timer onTimeUpdate={setSessionTime} />
            <TrainerProfile trainer={mockTrainer} />
          </div>
        </div>
      </div>
      <MessageOverlay />
    </div>
  );
};

export default LiveTrainerSession;
