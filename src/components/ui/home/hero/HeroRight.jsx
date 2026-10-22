import robotMascot from "../../../../assets/robot.png";
import MatchCard from "./MatchCard";

const HeroRight = () => {
    return (
        <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-end relative mt-12 lg:mt-0 z-20 self-end lg:translate-x-4 xl:translate-x-8">
            <div className="relative inline-flex flex-col items-center lg:items-end">
                <div className="relative mb-4 lg:mb-0 lg:absolute lg:-top-20 lg:-left-36 z-30">
                    <MatchCard />
                </div>
                <img
                    src={robotMascot}
                    alt="MovieExplorer Mascot Robot"
                    className="w-50 sm:w-65 lg:w-[320px] max-w-full h-auto object-contain drop-shadow-[0_25px_40px_rgba(0,0,0,0.7)] animate-mascot-float select-none"
                />
            </div>
        </div>
    );
};

export default HeroRight;
