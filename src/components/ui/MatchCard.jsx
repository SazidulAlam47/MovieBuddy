import { Star } from 'lucide-react';

const MatchCard = () => {
  return (
    <div
      aria-hidden="true"
      className="relative w-[215px] bg-[#0d1630]/85 backdrop-blur-md border border-white/15 rounded-xl p-3 shadow-2xl z-30 select-none"
    >
      <div className="flex gap-3 items-center">
        <div className="w-[70px] h-[90px] rounded-lg overflow-hidden shrink-0 shadow-md">
          <div className="w-full h-full bg-gradient-to-br from-pink-500 via-fuchsia-600 to-purple-800 flex items-center justify-center p-1.5 shadow-inner">
            <span className="text-white text-[10px] font-black tracking-wider text-center leading-tight drop-shadow uppercase">
              BALLERINA
            </span>
          </div>
        </div>

        <div className="flex flex-col justify-center min-w-0">
          <span className="text-white font-semibold text-sm tracking-wide">
            95% Match
          </span>

          <div className="flex items-center gap-0.5 mt-1.5">
            {[1, 2, 3, 4].map((star) => (
              <Star
                key={star}
                className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
              />
            ))}
            <div className="relative w-3.5 h-3.5">
              <Star className="w-3.5 h-3.5 text-amber-400/40" />
              <div className="absolute inset-0 overflow-hidden w-[60%]">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              </div>
            </div>
          </div>

          <div className="mt-2.5 space-y-1.5">
            <div className="h-1.5 w-20 bg-white/25 rounded-full" />
            <div className="h-1.5 w-12 bg-white/20 rounded-full" />
          </div>
        </div>
      </div>

      <div className="absolute -bottom-2 right-8 w-4 h-4 bg-[#0d1630] border-r border-b border-white/20 transform rotate-45" />
    </div>
  );
};

export default MatchCard;
