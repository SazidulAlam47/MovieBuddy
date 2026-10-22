import { Star } from "lucide-react";

const MovieRating = ({ rating, size = "sm" }) => {
    const numericRating =
        typeof rating === "object" && rating !== null
            ? rating.average
            : rating;

    const formattedRating =
        typeof numericRating === "number" && !isNaN(numericRating)
            ? numericRating.toFixed(1)
            : null;

    const iconSize = size === "lg" ? "w-4 h-4" : "w-3.5 h-3.5";
    const textSize = size === "lg" ? "text-sm font-semibold" : "text-xs font-semibold";

    return (
        <div className="inline-flex items-center gap-1.5 bg-black/50 backdrop-blur-md border border-white/15 px-2.5 py-1 rounded-full text-amber-400">
            <Star className={`${iconSize} fill-amber-400 stroke-none`} aria-hidden="true" />
            <span className={`${textSize} text-slate-200`}>
                {formattedRating ? `${formattedRating}` : "N/A"}
            </span>
        </div>
    );
};

export default MovieRating;
