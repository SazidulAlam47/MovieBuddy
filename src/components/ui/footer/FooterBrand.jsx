import { Link } from "react-router";
import robotMascot from "../../../assets/robot.png";
import { BRAND_NAME } from "../../../constants/common";

const FooterBrand = () => {
    return (
        <div className="flex flex-col gap-4 max-w-sm">
            <Link
                to="/"
                className="inline-flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-none rounded-lg w-fit"
            >
                <img
                    src={robotMascot}
                    alt=""
                    aria-hidden="true"
                    className="w-10 h-10 object-contain select-none transition-transform duration-200 group-hover:scale-105"
                />
                <span className="text-2xl font-bold text-white tracking-tight leading-none font-sans">
                    {BRAND_NAME}
                </span>
            </Link>

            <p className="text-sm text-slate-300 leading-relaxed">
                Your AI-powered cinema companion. Explore curated movies,
                discover trending shows, and find your next unforgettable watch
                in seconds.
            </p>
        </div>
    );
};

export default FooterBrand;
