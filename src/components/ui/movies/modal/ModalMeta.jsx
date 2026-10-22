import { Calendar, Clock, Globe, Tv, Layers } from "lucide-react";

const ModalMeta = ({ premiered, runtime, networkName, language, type }) => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 border-t border-white/10 text-xs text-slate-300">
            {premiered && (
                <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-400 shrink-0" aria-hidden="true" />
                    <span>{premiered}</span>
                </div>
            )}

            {runtime && (
                <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-400 shrink-0" aria-hidden="true" />
                    <span>{runtime} mins</span>
                </div>
            )}

            {networkName && (
                <div className="flex items-center gap-2">
                    <Tv className="w-4 h-4 text-blue-400 shrink-0" aria-hidden="true" />
                    <span className="truncate">{networkName}</span>
                </div>
            )}

            {language && (
                <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-blue-400 shrink-0" aria-hidden="true" />
                    <span>{language}</span>
                </div>
            )}

            {type && (
                <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-blue-400 shrink-0" aria-hidden="true" />
                    <span>{type}</span>
                </div>
            )}
        </div>
    );
};

export default ModalMeta;
