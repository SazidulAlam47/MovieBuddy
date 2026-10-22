import heroBackground from "../../assets/hero-background.jpg";
import HeroLeft from "../../components/ui/home/hero/HeroLeft";
import HeroRight from "../../components/ui/home/hero/HeroRight";

const Hero = () => {
    return (
        <section
            aria-label="Hero Section"
            className="relative w-full overflow-hidden bg-[#0b1226] flex flex-col justify-between min-h-screen"
        >
            <img
                src={heroBackground}
                alt="Friends enjoying movies"
                fetchPriority="high"
                loading="eager"
                className="absolute inset-0 w-full h-full object-cover object-center select-none"
            />

            <div
                className="absolute top-0 inset-x-0 h-44 bg-linear-to-b from-cyan-400/20 via-teal-500/10 to-transparent pointer-events-none"
                aria-hidden="true"
            />

            <div
                className="absolute inset-0 bg-linear-to-r from-[#0b1226] via-[#0b1226]/85 via-45% to-[#0b1226]/40 pointer-events-none"
                aria-hidden="true"
            />

            <div
                className="absolute inset-0 bg-linear-to-t from-[#0b1226] via-[#0b1226]/85 via-25% to-transparent pointer-events-none"
                aria-hidden="true"
            />

            <div className="relative z-20 flex-1 flex flex-col justify-center px-6 sm:px-12 lg:px-16 pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 lg:pb-16">
                <div className="max-w-340 mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <HeroLeft />
                    <HeroRight />
                </div>
            </div>

            <div className="h-2 w-full" aria-hidden="true" />
        </section>
    );
};

export default Hero;
