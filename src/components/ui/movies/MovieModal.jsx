import { useEffect } from "react";
import ModalCloseButton from "./modal/ModalCloseButton";
import ModalPoster from "./modal/ModalPoster";
import ModalHeader from "./modal/ModalHeader";
import ModalGenres from "./modal/ModalGenres";
import ModalMeta from "./modal/ModalMeta";
import ModalOverview from "./modal/ModalOverview";
import ModalActions from "./modal/ModalActions";

const MovieModal = ({ movie, onClose }) => {
    useEffect(() => {
        if (!movie) return;

        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                onClose();
            }
        };

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [movie, onClose]);

    if (!movie) return null;

    const posterUrl = movie.image?.original || movie.image?.medium || null;
    const networkName = movie.network?.name || movie.webChannel?.name || null;
    const runtime = movie.runtime || movie.averageRuntime || null;

    return (
        <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="movie-modal-title"
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-3xl bg-[#0d1630] border border-white/15 rounded-3xl overflow-hidden shadow-2xl shadow-black/80 my-8 max-h-[90vh] flex flex-col"
            >
                <ModalCloseButton onClose={onClose} />

                <div className="overflow-y-auto p-6 sm:p-8 flex flex-col md:flex-row gap-6 sm:gap-8">
                    <ModalPoster posterUrl={posterUrl} title={movie.name} />

                    <div className="flex flex-col gap-4 grow">
                        <ModalHeader
                            name={movie.name}
                            rating={movie.rating}
                            status={movie.status}
                        />

                        <ModalGenres genres={movie.genres} />

                        <ModalMeta
                            premiered={movie.premiered}
                            runtime={runtime}
                            networkName={networkName}
                            language={movie.language}
                            type={movie.type}
                        />

                        <ModalOverview summary={movie.summary} />

                        <ModalActions
                            officialSite={movie.officialSite}
                            onClose={onClose}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieModal;
