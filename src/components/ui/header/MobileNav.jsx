import { NAV_LINKS } from "../../../constants/navLinks";
import MobileNavItem from "./MobileNavItem";

const MobileNav = ({ onSelect }) => {
    return (
        <nav
            aria-label="Mobile Navigation"
            className="flex flex-col gap-1.5"
        >
            {NAV_LINKS.map((link) => (
                <MobileNavItem
                    key={link.to}
                    to={link.to}
                    label={link.label}
                    end={link.end}
                    onSelect={onSelect}
                />
            ))}
        </nav>
    );
};

export default MobileNav;
