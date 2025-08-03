import { Star, Award, Users, Calendar } from "lucide-react";
interface TrainerData {
  name: string;
  avatar: string;
  specialization: string;
  rating: number;
  totalSessions: number;
  yearsExperience: number;
  certifications: string[];
  isLive: boolean;
}

interface TrainerProfileProps {
  trainer: TrainerData;
}
const TrainerProfile: React.FC<TrainerProfileProps> = ({ trainer }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
      <div className="flex items-center space-x-4 mb-6">
        <div className="relative">
          <img
            src={trainer.avatar}
            alt={trainer.name}
            className="w-16 h-16 rounded-full object-cover border-4 border-emerald-100"
          />
          {trainer.isLive && (
            <div className="absolute -top-1 -right-1">
              <div className="relative">
                <div className="w-6 h-6 bg-red-500 rounded-full border-2 border-white"></div>
                <div className="absolute inset-0 w-6 h-6 bg-red-500 rounded-full animate-ping opacity-75"></div>
              </div>
            </div>
          )}
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-bold text-gray-900 mb-1">
            {trainer.name}
          </h2>
          <p className="text-emerald-600 font-medium mb-2">
            {trainer.specialization}
          </p>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-gray-700 font-medium">{trainer.rating}</span>
            <span className="text-gray-500 text-sm">
              ({trainer.totalSessions} sessions)
            </span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-emerald-50 rounded-xl p-4 text-center">
          <Calendar className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
          <div className="text-emerald-700 font-bold text-2xl">
            {trainer.yearsExperience}
          </div>
          <div className="text-emerald-600 text-sm">Years Exp,</div>
        </div>
        <div className="bg-blue-50 rounded-xl p-4 text-center">
          <Users className="w-6 h-6 text-blue-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-blue-700">
            {trainer.totalSessions}
          </div>
          <div className="text-sm text-blue-600">Sessions</div>
        </div>
      </div>
      <div className="flex items-center mb-3">
        <Award className="w-5 h-5 text-gray-600  mr-2" />
        <h3 className="font-semibold text-gray-900">Certifications</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {trainer.certifications.map((certification, index) => (
          <span
            key={index}
            className="bg-gray-100 rounded-full px-3 py-1 text-gray-700 text-sm"
          >
            {certification}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TrainerProfile;
