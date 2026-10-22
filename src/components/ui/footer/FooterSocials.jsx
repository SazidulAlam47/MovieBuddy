import { SOCIAL_LINKS } from "../../../constants/footerData";
import FooterSocialItem from "./FooterSocialItem";

const FooterSocials = () => {
    return (
        <div className="flex items-center gap-2.5">
            {SOCIAL_LINKS.map((social) => (
                <FooterSocialItem
                    key={social.name}
                    name={social.name}
                    href={social.href}
                    icon={social.icon}
                />
            ))}
        </div>
    );
};

export default FooterSocials;
