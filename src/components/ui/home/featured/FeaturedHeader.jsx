import FeaturedTitle from "./FeaturedTitle";
import FeaturedAction from "./FeaturedAction";

const FeaturedHeader = () => {
    return (
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-white/10">
            <div className="flex flex-col gap-3">
                <FeaturedTitle />
            </div>
            <FeaturedAction />
        </div>
    );
};

export default FeaturedHeader;
