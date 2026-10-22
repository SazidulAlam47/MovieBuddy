import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HeroLeft = () => {
    return (
        <div className="lg:col-span-7 flex flex-col justify-center text-left z-20">
            <h1 className="font-serif-heading text-[36px] sm:text-5xl lg:text-[64px] font-bold text-white tracking-tight leading-[1.08]">
                Discover Movies
                <br />
                &amp; Shows to Watch
                <br />
                With Friends
            </h1>

            <p className="text-white/90 text-base sm:text-lg lg:text-[18px] leading-relaxed max-w-lg mt-6">
                Explore and discover your favorite movies from around the world.
            </p>

            <div className="flex items-center mt-10 w-full sm:w-auto">
                <Link
                    to="/movies"
                    className="inline-flex items-center justify-center gap-2.5 bg-[#1e4e9c] hover:bg-[#2563eb] text-white text-base font-semibold px-8 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-600/35 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-none active:translate-y-0 w-full sm:w-auto text-center cursor-pointer shadow-md shadow-blue-950/50"
                >
                    <span>Explore Now</span>
                    <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </Link>
            </div>
        </div>
    );
};

export default HeroLeft;
