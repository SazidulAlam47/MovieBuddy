import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import heroBackground from '../assets/hero-background.jpg';
import robotMascot from '../assets/robot.png';
import MatchCard from '../components/ui/MatchCard';

const Hero = () => {
  return (
    <section
      aria-label="Hero Section"
      className="relative w-full rounded-3xl lg:rounded-[36px] overflow-hidden bg-[#0b1226] border border-white/5 shadow-2xl flex flex-col justify-between min-h-[calc(100vh-1.5rem)] sm:min-h-[calc(100vh-2.5rem)] lg:min-h-[calc(100vh-3.5rem)]"
    >
      <img
        src={heroBackground}
        alt="Friends enjoying movies"
        fetchPriority="high"
        loading="eager"
        className="absolute inset-0 w-full h-full object-cover object-center select-none"
      />

      <div
        className="absolute top-0 inset-x-0 h-44 bg-gradient-to-b from-cyan-400/20 via-teal-500/10 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 bg-gradient-to-r from-[#0b1226] via-[#0b1226]/85 via-45% to-[#0b1226]/40 pointer-events-none"
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 bg-gradient-to-t from-[#0b1226] via-[#0b1226]/85 via-25% to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-20 flex-1 flex flex-col justify-center px-6 sm:px-12 lg:px-16 pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 lg:pb-16">
        <div className="max-w-[1360px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 flex flex-col justify-center text-left z-20">
            <h1 className="font-serif-heading text-[36px] sm:text-5xl lg:text-[64px] font-bold text-white tracking-tight leading-[1.08]">
              Discover Movies<br />
              &amp; Shows to Watch<br />
              With Friends
            </h1>

            <p className="text-white/90 text-base sm:text-lg lg:text-[18px] leading-relaxed max-w-lg mt-6">
              Explore and discover your favorite movies from around the world.
            </p>

            <div className="flex items-center mt-10 w-full sm:w-auto">
              <Link
                to="/movies"
                className="inline-flex items-center justify-center gap-2.5 bg-[#1e4e9c] hover:bg-[#2563eb] text-white text-base font-semibold px-8 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-600/35 focus:outline-none focus:ring-2 focus:ring-blue-400 active:translate-y-0 w-full sm:w-auto text-center cursor-pointer shadow-md shadow-blue-950/50"
              >
                <span>Explore Now</span>
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-end relative mt-10 lg:mt-0 z-20 self-end lg:translate-x-4 xl:translate-x-8">
            <div className="relative inline-flex flex-col items-center lg:items-end">
              <div className="relative mb-3 lg:mb-0 lg:absolute lg:-top-16 lg:-left-28 z-30">
                <MatchCard />
              </div>

              <img
                src={robotMascot}
                alt="MovieExplorer Mascot Robot"
                className="w-[200px] sm:w-[260px] lg:w-[320px] max-w-full h-auto object-contain drop-shadow-[0_25px_40px_rgba(0,0,0,0.7)] animate-mascot-float select-none"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="h-2 w-full" aria-hidden="true" />
    </section>
  );
};

export default Hero;
