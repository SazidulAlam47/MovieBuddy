import { NAV_LINKS } from "../../../constants/navLinks";
import DesktopNavItem from "./DesktopNavItem";

const DesktopNav = () => {
    return (
        <nav
            aria-label="Main"
            className="hidden md:flex items-center gap-6 lg:gap-8 text-[15px] whitespace-nowrap"
        >
            {NAV_LINKS.map((link) => (
                <DesktopNavItem
                    key={link.to}
                    to={link.to}
                    label={link.label}
                    end={link.end}
                />
            ))}
        </nav>
    );
};

export default DesktopNav;
