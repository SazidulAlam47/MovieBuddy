import FooterBrand from "../ui/footer/FooterBrand";
import FooterNav from "../ui/footer/FooterNav";
import FooterNewsletter from "../ui/footer/FooterNewsletter";
import FooterBottom from "../ui/footer/FooterBottom";

const Footer = () => {
    return (
        <footer className="bg-[#090e1f] border-t border-white/10 text-white relative overflow-hidden">
            <div
                className="absolute top-0 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"
                aria-hidden="true"
            />
            <div
                className="absolute bottom-0 right-1/4 translate-y-1/2 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"
                aria-hidden="true"
            />

            <div className="max-w-340 mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-12">
                    <div className="lg:col-span-5">
                        <FooterBrand />
                    </div>

                    <div className="lg:col-span-3">
                        <FooterNav />
                    </div>

                    <div className="lg:col-span-4">
                        <FooterNewsletter />
                    </div>
                </div>

                <FooterBottom />
            </div>
        </footer>
    );
};

export default Footer;
