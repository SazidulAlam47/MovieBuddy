import { NavLink } from "react-router";

const MobileNavItem = ({ to, label, end = false, onSelect }) => {
    return (
        <NavLink
            to={to}
            end={end}
            onClick={onSelect}
            className={({ isActive }) =>
                `py-2.5 px-3.5 rounded-lg font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-none ${
                    isActive
                        ? "bg-white/15 text-white font-semibold"
                        : "text-slate-300 hover:text-white hover:bg-white/5"
                }`
            }
        >
            {label}
        </NavLink>
    );
};

export default MobileNavItem;
