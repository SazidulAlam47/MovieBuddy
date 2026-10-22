import MovieCard from "../../movies/MovieCard";

const FeaturedGrid = ({ movies = [], onSelect }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {movies.map((movie) => (
                <MovieCard
                    key={movie.id}
                    movie={movie}
                    onSelect={onSelect}
                />
            ))}
        </div>
    );
};

export default FeaturedGrid;
