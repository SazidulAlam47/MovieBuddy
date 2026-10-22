const FeaturedTitle = () => {
    return (
        <div className="flex flex-col gap-2">
            <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                Featured Spotlight
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl">
                Discover six handpicked highlights from our live catalog, refreshed every time you visit.
            </p>
        </div>
    );
};

export default FeaturedTitle;
