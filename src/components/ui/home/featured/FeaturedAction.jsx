import { Link } from "react-router";
import { ArrowRight, Film } from "lucide-react";

const FeaturedAction = () => {
    return (
        <Link
            to="/movies"
            className="inline-flex items-center gap-2.5 bg-white/5 hover:bg-blue-600 border border-white/10 hover:border-blue-500 text-slate-200 hover:text-white text-sm font-semibold px-6 py-3 rounded-full transition-all duration-200 hover:-translate-y-0.5 shadow-md shadow-black/20 hover:shadow-blue-600/30 shrink-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-none"
        >
            <Film className="w-4 h-4 text-blue-400 group-hover:text-white" aria-hidden="true" />
            <span>View All Shows</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </Link>
    );
};

export default FeaturedAction;
