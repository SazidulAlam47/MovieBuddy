import { Link } from "react-router";

const FooterLinkItem = ({ label, to, href, isExternal = false }) => {
    const commonClasses =
        "text-sm text-slate-300 hover:text-white transition-colors duration-150 inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-none rounded";

    if (isExternal && href) {
        return (
            <li>
                <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={commonClasses}
                >
                    {label}
                </a>
            </li>
        );
    }

    return (
        <li>
            <Link to={to || "/"} className={commonClasses}>
                {label}
            </Link>
        </li>
    );
};

export default FooterLinkItem;
