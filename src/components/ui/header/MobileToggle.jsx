import { Menu, X } from "lucide-react";

const MobileToggle = ({ isOpen, onToggle }) => {
    return (
        <button
            type="button"
            onClick={onToggle}
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-none cursor-pointer"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            aria-controls="mobile-nav-menu"
        >
            {isOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
            ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
            )}
        </button>
    );
};

export default MobileToggle;
