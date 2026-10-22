import { Star } from "lucide-react";
import posterImg from "../../../../assets/match-poster.jpg";

const MatchCard = () => {
    return (
        <div
            aria-hidden="true"
            className="relative w-65 sm:w-70 bg-[#0b132b]/90 backdrop-blur-xl border border-white/15 rounded-2xl p-3.5 shadow-[0_20px_50px_rgba(0,0,0,0.65)] z-30 select-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-linear-to-r before:from-transparent before:via-cyan-400/60 before:to-transparent"
        >
            <div className="flex gap-3.5 items-center">
                <div className="relative w-18 h-24.5 rounded-xl overflow-hidden shrink-0 shadow-lg border border-white/10 group">
                    <img
                        src={posterImg}
                        alt="Cyber Odyssey poster"
                        className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    <span className="absolute bottom-1 inset-x-0 text-center text-[9px] font-bold text-cyan-300 tracking-wider uppercase drop-shadow">
                        4K UHD
                    </span>
                </div>

                <div className="flex flex-col justify-center min-w-0 flex-1">
                    <h2 className="text-white font-bold text-sm sm:text-[15px] tracking-tight leading-snug truncate">
                        Cyber Odyssey
                    </h2>

                    <p className="text-slate-300 text-[11px] font-medium tracking-wide mt-0.5">
                        Sci-Fi • Space Adventure
                    </p>

                    <div className="flex items-center gap-1.5 mt-2">
                        <div className="flex items-center gap-0.5">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                    key={star}
                                    className="w-3 h-3 fill-amber-400 text-amber-400"
                                />
                            ))}
                        </div>
                        <span className="text-white/90 text-[11px] font-bold">
                            4.9
                        </span>
                        <span className="text-slate-400 text-[10px]">
                            (1.2k)
                        </span>
                    </div>
                </div>
            </div>

            <div
                className="absolute -bottom-2 right-10 w-4 h-4 bg-[#0b132b] border-r border-b border-white/15 transform rotate-45 shadow-md"
                aria-hidden="true"
            />
        </div>
    );
};

export default MatchCard;
