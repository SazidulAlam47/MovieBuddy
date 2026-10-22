import { Film, RotateCcw } from "lucide-react";

const FeaturedEmptyState = ({ onRetry }) => {
    return (
        <div className="flex flex-col items-center justify-center text-center p-12 bg-white/5 border border-white/10 rounded-3xl max-w-lg mx-auto">
            <Film className="w-12 h-12 text-slate-500 mb-4" aria-hidden="true" />
            <h3 className="text-lg font-bold text-white mb-2">
                Unable to load featured shows
            </h3>
            <p className="text-sm text-slate-400 mb-6">
                Please check your network connection and try again.
            </p>
            {onRetry && (
                <button
                    type="button"
                    onClick={onRetry}
                    className="inline-flex items-center gap-2 bg-[#1e4e9c] hover:bg-[#2563eb] text-white text-xs font-semibold px-5 py-2.5 rounded-full transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-none"
                >
                    <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Try Again</span>
                </button>
            )}
        </div>
    );
};

export default FeaturedEmptyState;
