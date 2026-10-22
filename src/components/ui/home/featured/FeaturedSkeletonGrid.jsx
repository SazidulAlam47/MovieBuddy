import MovieSkeleton from "../../movies/MovieSkeleton";

const FeaturedSkeletonGrid = ({ count = 6 }) => {
    const placeholders = Array.from({ length: count }, (_, index) => index);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {placeholders.map((key) => (
                <MovieSkeleton key={key} />
            ))}
        </div>
    );
};

export default FeaturedSkeletonGrid;
