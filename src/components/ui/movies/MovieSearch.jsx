import { Search, X, Loader2 } from "lucide-react";

const MovieSearch = ({ value, onChange, onSubmit, onClear, isLoading = false }) => {
    return (
        <form onSubmit={onSubmit} className="w-full max-w-2xl mx-auto">
            <div className="relative flex items-center">
                <div className="absolute left-4.5 text-slate-400 pointer-events-none">
                    <Search className="w-5 h-5" aria-hidden="true" />
                </div>

                <input
                    type="text"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder="Search movies, TV shows, titles..."
                    aria-label="Search movies and shows"
                    className="w-full bg-white/5 hover:bg-white/8 border border-white/10 focus:border-blue-400/60 rounded-full pl-12 pr-28 py-3.5 text-white placeholder-slate-400 text-sm sm:text-base backdrop-blur-xl transition-all shadow-inner focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-none"
                />

                <div className="absolute right-1.5 flex items-center gap-1.5">
                    {value && (
                        <button
                            type="button"
                            onClick={onClear}
                            aria-label="Clear search query"
                            className="p-2 text-slate-400 hover:text-white rounded-full hover:bg-white/10 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-none"
                        >
                            <X className="w-4 h-4" aria-hidden="true" />
                        </button>
                    )}

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="inline-flex items-center gap-2 bg-[#1e4e9c] hover:bg-[#2563eb] disabled:opacity-50 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-200 shadow-md shadow-blue-900/40 hover:shadow-blue-600/50 hover:-translate-y-0.5 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-none"
                    >
                        {isLoading ? (
                            <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                        ) : (
                            <Search className="w-4 h-4" aria-hidden="true" />
                        )}
                        <span className="hidden sm:inline">Search</span>
                    </button>
                </div>
            </div>
        </form>
    );
};

export default MovieSearch;
