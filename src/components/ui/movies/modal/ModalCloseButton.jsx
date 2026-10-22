import { X } from "lucide-react";

const ModalCloseButton = ({ onClose }) => {
    return (
        <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-white/20 border border-white/10 text-white flex items-center justify-center transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-none"
        >
            <X className="w-5 h-5" aria-hidden="true" />
        </button>
    );
};

export default ModalCloseButton;
