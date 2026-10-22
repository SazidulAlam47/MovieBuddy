import MoviePoster from "../MoviePoster";

const ModalPoster = ({ posterUrl, title }) => {
    return (
        <div className="w-full md:w-56 shrink-0 rounded-2xl overflow-hidden border border-white/10 shadow-lg">
            <MoviePoster src={posterUrl} alt={title} />
        </div>
    );
};

export default ModalPoster;
