import { Link } from "react-router";
import { Film } from "lucide-react";

const DesktopMenu = () => {
    return (
        <div className="hidden md:flex items-center shrink-0">
            <Link
                to="/movies"
                className="inline-flex items-center gap-2 bg-[#1e4e9c] hover:bg-[#2563eb] text-white text-sm font-medium px-5 py-2 rounded-full transition-all duration-200 shadow-md shadow-blue-900/40 hover:shadow-blue-600/50 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-none whitespace-nowrap cursor-pointer"
            >
                <Film className="w-4 h-4" aria-hidden="true" />
                <span>Movies</span>
            </Link>
        </div>
    );
};

export default DesktopMenu;
