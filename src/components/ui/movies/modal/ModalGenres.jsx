const ModalGenres = ({ genres = [] }) => {
    if (!Array.isArray(genres) || genres.length === 0) return null;

    return (
        <div className="flex flex-wrap gap-1.5">
            {genres.map((genre) => (
                <span
                    key={genre}
                    className="text-xs font-medium text-slate-200 bg-white/10 border border-white/10 px-3 py-1 rounded-full"
                >
                    {genre}
                </span>
            ))}
        </div>
    );
};

export default ModalGenres;
