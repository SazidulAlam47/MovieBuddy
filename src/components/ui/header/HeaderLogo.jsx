import { Link } from "react-router";
import robotMascot from "../../../assets/robot.png";

const BRAND_NAME = "MovieExplorer";

const HeaderLogo = () => {
    return (
        <Link
            to="/"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-none rounded-lg"
        >
            <img
                src={robotMascot}
                alt=""
                aria-hidden="true"
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain select-none transition-transform duration-200 group-hover:scale-105"
            />
            <span className="text-2xl sm:text-[28px] font-bold text-white tracking-tight leading-none font-sans">
                {BRAND_NAME}
            </span>
        </Link>
    );
};

export default HeaderLogo;
