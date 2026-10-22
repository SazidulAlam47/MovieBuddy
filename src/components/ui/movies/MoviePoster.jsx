import { useState } from "react";
import { Film } from "lucide-react";

const MoviePoster = ({ src, alt, className = "" }) => {
    const [hasError, setHasError] = useState(false);

    if (!src || hasError) {
        return (
            <div
                className={`w-full aspect-2/3 bg-slate-800/80 border-b border-white/10 flex flex-col items-center justify-center gap-2 text-slate-400 select-none ${className}`}
            >
                <Film className="w-10 h-10 opacity-50" aria-hidden="true" />
                <span className="text-xs font-medium tracking-wide">
                    No Poster
                </span>
            </div>
        );
    }

    return (
        <div className={`relative w-full aspect-2/3 overflow-hidden bg-slate-900 ${className}`}>
            <img
                src={src}
                alt={alt || "Movie poster"}
                loading="lazy"
                onError={() => setHasError(true)}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#0d1630] via-transparent to-transparent opacity-60 pointer-events-none" />
        </div>
    );
};

export default MoviePoster;
