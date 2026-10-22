import stripHtml from "../../../../utils/stripHtml";

const ModalOverview = ({ summary }) => {
    const cleanSummary = stripHtml(summary);
    if (!cleanSummary) return null;

    return (
        <div className="flex flex-col gap-1.5 pt-2 border-t border-white/10">
            <h3 className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                Overview
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed max-h-48 overflow-y-auto pr-2">
                {cleanSummary}
            </p>
        </div>
    );
};

export default ModalOverview;
