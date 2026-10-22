import { BOTTOM_LINKS } from "../../../constants/footerData";
import FooterLinkItem from "./FooterLinkItem";

const FooterBottom = () => {
    const currentYear = 2026;

    return (
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1">
                <span>© {currentYear} MovieExplorer.</span>
                <span>All rights reserved.</span>
            </div>

            <ul className="flex items-center gap-6">
                {BOTTOM_LINKS.map((link) => (
                    <FooterLinkItem
                        key={link.label}
                        label={link.label}
                        to={link.to}
                        href={link.href}
                        isExternal={link.isExternal}
                    />
                ))}
            </ul>
        </div>
    );
};

export default FooterBottom;
