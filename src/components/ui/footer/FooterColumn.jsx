import FooterLinkItem from "./FooterLinkItem";

const FooterColumn = ({ title, links = [] }) => {
    return (
        <div className="flex flex-col gap-3.5">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                {title}
            </h3>
            <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
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

export default FooterColumn;
