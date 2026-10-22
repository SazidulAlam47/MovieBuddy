import { NavLink } from "react-router";

const DesktopNavItem = ({ to, label, end = false }) => {
    return (
        <NavLink
            to={to}
            end={end}
            className={({ isActive }) =>
                `relative py-2 px-3 flex items-center justify-center font-medium transition-colors duration-150 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-none ${
                    isActive
                        ? "text-white"
                        : "text-slate-300 hover:text-white"
                }`
            }
        >
            {({ isActive }) => (
                <>
                    {isActive && (
                        <>
                            <span
                                className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-[2.5px] bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.95)]"
                                aria-hidden="true"
                            />
                            <div
                                className="absolute inset-x-0 top-0 bottom-0 bg-linear-to-b from-white/20 via-white/5 to-transparent pointer-events-none rounded-t-sm"
                                style={{
                                    clipPath:
                                        "polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%)",
                                }}
                                aria-hidden="true"
                            />
                        </>
                    )}
                    {label}
                </>
            )}
        </NavLink>
    );
};

export default DesktopNavItem;
