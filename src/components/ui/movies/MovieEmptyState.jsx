import { SearchX, RotateCcw } from "lucide-react";

const MovieEmptyState = ({ query, onReset }) => {
    return (
        <div className="w-full py-20 px-4 flex flex-col items-center justify-center text-center gap-4 bg-[#0d1630]/60 border border-white/10 rounded-3xl max-w-xl mx-auto backdrop-blur-md">
            <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400">
                <SearchX className="w-8 h-8" aria-hidden="true" />
            </div>

            <div className="flex flex-col gap-1.5 max-w-md">
                <h2 className="text-xl font-bold text-white tracking-tight">
                    No results found
                </h2>
                <p className="text-sm text-slate-300">
                    {query
                        ? `We couldn't find any shows or movies matching "${query}". Try checking for spelling or searching a different term.`
                        : "No shows are currently available. Please check back in a few moments."}
                </p>
            </div>

            {onReset && (
                <button
                    type="button"
                    onClick={onReset}
                    className="inline-flex items-center gap-2 bg-[#1e4e9c] hover:bg-[#2563eb] text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-200 shadow-md shadow-blue-900/40 hover:shadow-blue-600/50 hover:-translate-y-0.5 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-none"
                >
                    <RotateCcw className="w-4 h-4" aria-hidden="true" />
                    <span>Reset to Full Catalog</span>
                </button>
            )}
        </div>
    );
};

export default MovieEmptyState;
