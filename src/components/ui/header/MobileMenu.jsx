import { Link } from "react-router";
import { Film } from "lucide-react";
import MobileNav from "./MobileNav";

const MobileMenu = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div
            id="mobile-nav-menu"
            className="md:hidden mt-4 pt-4 border-t border-white/10 flex flex-col gap-3 pb-2 transition-all duration-200"
        >
            <MobileNav onSelect={onClose} />

            <div className="pt-2 border-t border-white/10">
                <Link
                    to="/movies"
                    onClick={onClose}
                    className="w-full flex items-center justify-center gap-2 bg-[#1e4e9c] hover:bg-[#2563eb] text-white text-sm font-medium py-2.5 rounded-full shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-none transition-colors cursor-pointer"
                >
                    <Film className="w-4 h-4" aria-hidden="true" />
                    <span>Movies</span>
                </Link>
            </div>
        </div>
    );
};

export default MobileMenu;
