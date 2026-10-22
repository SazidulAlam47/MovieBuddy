import { Calendar, Eye } from "lucide-react";
import MoviePoster from "./MoviePoster";
import MovieRating from "./MovieRating";

const MovieCard = ({ movie, onSelect }) => {
    if (!movie) return null;

    const posterUrl = movie.image?.medium || movie.image?.original || null;
    const releaseYear = movie.premiered ? movie.premiered.slice(0, 4) : null;
    const primaryGenres = Array.isArray(movie.genres) ? movie.genres.slice(0, 2) : [];

    return (
        <article className="group bg-[#0d1630] border border-white/10 hover:border-blue-500/40 rounded-2xl overflow-hidden shadow-lg shadow-black/30 hover:shadow-blue-900/20 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
            <div className="relative">
                <MoviePoster src={posterUrl} alt={movie.name} />

                <div className="absolute top-3 right-3 z-10">
                    <MovieRating rating={movie.rating} />
                </div>

                {releaseYear && (
                    <div className="absolute bottom-3 left-3 z-10 inline-flex items-center gap-1.5 bg-black/60 backdrop-blur-md border border-white/10 px-2.5 py-0.5 rounded-full text-xs text-slate-300 font-medium">
                        <Calendar className="w-3 h-3 text-blue-400" aria-hidden="true" />
                        <span>{releaseYear}</span>
                    </div>
                )}
            </div>

            <div className="p-4 sm:p-5 flex flex-col gap-3 grow justify-between">
                <div className="flex flex-col gap-2">
                    <h2
                        title={movie.name}
                        className="text-lg font-bold text-white tracking-tight line-clamp-1 group-hover:text-blue-400 transition-colors"
                    >
                        {movie.name}
                    </h2>

                    {primaryGenres.length > 0 && (
                        <div className="flex flex-wrap gap-1.5">
                            {primaryGenres.map((genre) => (
                                <span
                                    key={genre}
                                    className="text-[11px] font-medium text-slate-300 bg-white/5 border border-white/10 px-2 py-0.5 rounded-md"
                                >
                                    {genre}
                                </span>
                            ))}
                        </div>
                    )}
                </div>

                <div className="pt-2">
                    <button
                        type="button"
                        onClick={() => onSelect(movie)}
                        className="w-full inline-flex items-center justify-center gap-2 bg-[#1e4e9c] hover:bg-[#2563eb] text-white text-sm font-medium py-2.5 px-4 rounded-full shadow-md shadow-blue-950/40 hover:shadow-blue-600/40 transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-none"
                    >
                        <Eye className="w-4 h-4" aria-hidden="true" />
                        <span>See Details</span>
                    </button>
                </div>
            </div>
        </article>
    );
};

export default MovieCard;
