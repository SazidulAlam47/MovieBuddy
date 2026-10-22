const MovieSkeleton = () => {
    return (
        <div className="bg-[#0d1630] border border-white/10 rounded-2xl overflow-hidden shadow-lg animate-pulse flex flex-col justify-between">
            <div className="w-full aspect-2/3 bg-slate-800/60" />

            <div className="p-4 sm:p-5 flex flex-col gap-3">
                <div className="flex flex-col gap-2">
                    <div className="h-5 bg-white/10 rounded w-3/4" />
                    <div className="flex gap-1.5 pt-1">
                        <div className="h-4 bg-white/5 rounded w-16" />
                        <div className="h-4 bg-white/5 rounded w-14" />
                    </div>
                </div>

                <div className="pt-2">
                    <div className="h-10 bg-white/10 rounded-full w-full" />
                </div>
            </div>
        </div>
    );
};

export default MovieSkeleton;
