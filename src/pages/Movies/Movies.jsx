import { useState, useEffect } from "react";
import { fetchShows } from "../../api/fetchShows";
import { searchShows } from "../../api/searchShows";
import MovieHeader from "../../components/ui/movies/MovieHeader";
import MovieGrid from "../../components/ui/movies/MovieGrid";
import MovieSkeletonGrid from "../../components/ui/movies/MovieSkeletonGrid";
import MovieEmptyState from "../../components/ui/movies/MovieEmptyState";
import MovieModal from "../../components/ui/movies/MovieModal";

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const [activeQuery, setActiveQuery] = useState("");
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        let ignore = false;

        const load = async () => {
            try {
                const data = await fetchShows();
                if (!ignore) {
                    setMovies(Array.isArray(data) ? data : []);
                    setIsLoading(false);
                }
            } catch (err) {
                if (!ignore) {
                    setError(err.message || "Failed to load movie catalog");
                    setMovies([]);
                    setIsLoading(false);
                }
            }
        };

        load();

        return () => {
            ignore = true;
        };
    }, []);

    const resetToCatalog = async () => {
        setIsLoading(true);
        setError(null);
        setActiveQuery("");
        setSearchQuery("");
        try {
            const data = await fetchShows();
            setMovies(Array.isArray(data) ? data : []);
        } catch (err) {
            setError(err.message || "Failed to load movie catalog");
            setMovies([]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSearchSubmit = async (e) => {
        if (e && e.preventDefault) {
            e.preventDefault();
        }

        const trimmed = searchQuery.trim();
        if (!trimmed) {
            resetToCatalog();
            return;
        }

        setIsLoading(true);
        setError(null);
        try {
            const results = await searchShows(trimmed);
            setMovies(results);
            setActiveQuery(trimmed);
        } catch (err) {
            setError(err.message || "Failed to perform search");
            setMovies([]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSearchClear = () => {
        setSearchQuery("");
        if (activeQuery) {
            resetToCatalog();
        }
    };

    return (
        <main className="min-h-screen bg-[#0b1226] text-white pt-28 sm:pt-36 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <div
                className="absolute top-0 right-1/4 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"
                aria-hidden="true"
            />
            <div
                className="absolute top-1/3 left-10 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"
                aria-hidden="true"
            />

            <div className="max-w-340 mx-auto flex flex-col gap-10 sm:gap-12 relative z-10">
                <MovieHeader
                    searchQuery={searchQuery}
                    onSearchChange={setSearchQuery}
                    onSearchSubmit={handleSearchSubmit}
                    onSearchClear={handleSearchClear}
                    isLoading={isLoading}
                    totalResults={movies.length}
                    activeQuery={activeQuery}
                />

                {isLoading ? (
                    <MovieSkeletonGrid count={8} />
                ) : error ? (
                    <MovieEmptyState query={activeQuery} onReset={resetToCatalog} />
                ) : movies.length === 0 ? (
                    <MovieEmptyState query={activeQuery} onReset={resetToCatalog} />
                ) : (
                    <MovieGrid
                        movies={movies}
                        onSelect={(movie) => setSelectedMovie(movie)}
                    />
                )}
            </div>

            <MovieModal
                movie={selectedMovie}
                onClose={() => setSelectedMovie(null)}
            />
        </main>
    );
};

export default Movies;
