import { Globe } from "lucide-react";

const ModalActions = ({ officialSite, onClose }) => {
    return (
        <div className="pt-4 mt-auto flex items-center justify-end gap-3 border-t border-white/10">
            {officialSite && (
                <a
                    href={officialSite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-none"
                >
                    <Globe className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Official Website</span>
                </a>
            )}

            <button
                type="button"
                onClick={onClose}
                className="bg-[#1e4e9c] hover:bg-[#2563eb] text-white text-xs font-semibold px-5 py-2 rounded-full transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-none"
            >
                Close
            </button>
        </div>
    );
};

export default ModalActions;
