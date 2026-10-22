import MovieSkeleton from "./MovieSkeleton";

const MovieSkeletonGrid = ({ count = 8 }) => {
    const placeholders = Array.from({ length: count }, (_, index) => index);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
            {placeholders.map((key) => (
                <MovieSkeleton key={key} />
            ))}
        </div>
    );
};

export default MovieSkeletonGrid;
