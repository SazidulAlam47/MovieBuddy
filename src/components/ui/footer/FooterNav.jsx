import { FOOTER_COLUMNS } from "../../../constants/footerData";
import FooterColumn from "./FooterColumn";

const FooterNav = () => {
    return (
        <nav
            aria-label="Footer Navigation"
            className="grid grid-cols-2 gap-8 sm:gap-12"
        >
            {FOOTER_COLUMNS.map((column) => (
                <FooterColumn
                    key={column.title}
                    title={column.title}
                    links={column.links}
                />
            ))}
        </nav>
    );
};

export default FooterNav;
