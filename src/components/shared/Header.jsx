import { useState, useEffect } from "react";
import HeaderLogo from "../ui/header/HeaderLogo";
import DesktopNav from "../ui/header/DesktopNav";
import DesktopMenu from "../ui/header/DesktopMenu";
import MobileToggle from "../ui/header/MobileToggle";
import MobileMenu from "../ui/header/MobileMenu";

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        if (!mobileMenuOpen) return;
        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                setMobileMenuOpen(false);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [mobileMenuOpen]);

    return (
        <header className="absolute top-0 inset-x-0 z-40 pt-4 sm:pt-6 px-4 sm:px-6 lg:px-8">
            <div className="max-w-340 mx-auto bg-white/8 backdrop-blur-xl border border-white/10 rounded-2xl px-4 sm:px-6 py-2.5 sm:py-3 shadow-lg shadow-black/25">
                <div className="flex items-center justify-between gap-4">
                    <HeaderLogo />
                    <DesktopNav />
                    <DesktopMenu />
                    <MobileToggle
                        isOpen={mobileMenuOpen}
                        onToggle={() => setMobileMenuOpen((prev) => !prev)}
                    />
                </div>

                <MobileMenu
                    isOpen={mobileMenuOpen}
                    onClose={() => setMobileMenuOpen(false)}
                />
            </div>
        </header>
    );
};

export default Header;
