import MovieCard from "./MovieCard";

const MovieGrid = ({ movies = [], onSelect }) => {
    return (
        <section aria-label="Movies Catalog" className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
                {movies.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        movie={movie}
                        onSelect={onSelect}
                    />
                ))}
            </div>
        </section>
    );
};

export default MovieGrid;
