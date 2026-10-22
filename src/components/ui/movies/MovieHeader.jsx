import MovieSearch from "./MovieSearch";

const MovieHeader = ({
    searchQuery,
    onSearchChange,
    onSearchSubmit,
    onSearchClear,
    isLoading,
    totalResults,
    activeQuery,
}) => {
    return (
        <header className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto pt-4 pb-2">
            <div className="flex flex-col gap-2.5">
                <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold">
                    Free TVMaze Entertainment Catalog
                </span>
                <h1 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                    Explore Movies & Shows
                </h1>
                <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
                    Browse popular broadcasts, discovery picks, or search any title
                    across thousands of television and movie entries.
                </p>
            </div>

            <div className="w-full">
                <MovieSearch
                    value={searchQuery}
                    onChange={onSearchChange}
                    onSubmit={onSearchSubmit}
                    onClear={onSearchClear}
                    isLoading={isLoading}
                />
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                {activeQuery ? (
                    <span>
                        Showing search results for{" "}
                        <strong className="text-white">"{activeQuery}"</strong> (
                        {totalResults} {totalResults === 1 ? "item" : "items"})
                    </span>
                ) : (
                    <span>
                        Browsing featured catalog ({totalResults} available titles)
                    </span>
                )}
            </div>
        </header>
    );
};

export default MovieHeader;
