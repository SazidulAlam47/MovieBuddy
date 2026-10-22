import { useState, useEffect } from "react";
import { fetchShows } from "../../api/fetchShows";
import { getRandomItems } from "../../utils/getRandomItems";
import FeaturedHeader from "../../components/ui/home/featured/FeaturedHeader";
import FeaturedGrid from "../../components/ui/home/featured/FeaturedGrid";
import FeaturedSkeletonGrid from "../../components/ui/home/featured/FeaturedSkeletonGrid";
import FeaturedEmptyState from "../../components/ui/home/featured/FeaturedEmptyState";
import MovieModal from "../../components/ui/movies/MovieModal";

const FeaturedSection = () => {
    const [featuredMovies, setFeaturedMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedMovie, setSelectedMovie] = useState(null);

    const loadFeatured = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const data = await fetchShows();
            const randomPicks = getRandomItems(data, 6);
            setFeaturedMovies(randomPicks);
        } catch (err) {
            setError(err.message || "Failed to load featured movies");
            setFeaturedMovies([]);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        let ignore = false;

        const load = async () => {
            try {
                const data = await fetchShows();
                if (!ignore) {
                    const randomPicks = getRandomItems(data, 6);
                    setFeaturedMovies(randomPicks);
                    setIsLoading(false);
                }
            } catch (err) {
                if (!ignore) {
                    setError(err.message || "Failed to load featured movies");
                    setFeaturedMovies([]);
                    setIsLoading(false);
                }
            }
        };

        load();

        return () => {
            ignore = true;
        };
    }, []);

    return (
        <section
            aria-label="Featured Shows"
            className="w-full bg-[#090e1f] py-20 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t border-white/10"
        >
            <div
                className="absolute top-0 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"
                aria-hidden="true"
            />
            <div
                className="absolute bottom-0 left-10 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"
                aria-hidden="true"
            />

            <div className="max-w-340 mx-auto flex flex-col gap-10 sm:gap-12 relative z-10">
                <FeaturedHeader />

                {isLoading ? (
                    <FeaturedSkeletonGrid count={6} />
                ) : error || featuredMovies.length === 0 ? (
                    <FeaturedEmptyState onRetry={loadFeatured} />
                ) : (
                    <FeaturedGrid
                        movies={featuredMovies}
                        onSelect={(movie) => setSelectedMovie(movie)}
                    />
                )}
            </div>

            <MovieModal
                movie={selectedMovie}
                onClose={() => setSelectedMovie(null)}
            />
        </section>
    );
};

export default FeaturedSection;
