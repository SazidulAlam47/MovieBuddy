import MovieRating from "../MovieRating";

const ModalHeader = ({ name, rating, status }) => {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex flex-wrap items-center gap-3">
                <MovieRating rating={rating} size="lg" />
                {status && (
                    <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-2.5 py-0.5 rounded-full">
                        {status}
                    </span>
                )}
            </div>

            <h2
                id="movie-modal-title"
                className="font-serif-heading text-2xl sm:text-3xl font-bold text-white tracking-tight"
            >
                {name}
            </h2>
        </div>
    );
};

export default ModalHeader;
