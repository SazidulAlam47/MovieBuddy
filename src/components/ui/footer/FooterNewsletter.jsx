import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import FooterSocials from "./FooterSocials";

const FooterNewsletter = () => {
    const [email, setEmail] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email.trim()) return;
        setIsSubmitted(true);
        setEmail("");
        setTimeout(() => setIsSubmitted(false), 4000);
    };

    return (
        <div className="flex flex-col gap-4 max-w-sm">
            <div className="flex flex-col gap-1.5">
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                    Stay in the Loop
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                    Get weekly updates on trending titles and intelligent AI recommendations.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                <div className="relative flex items-center">
                    <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full bg-white/5 border border-white/10 rounded-full pl-4 pr-28 py-2.5 text-sm text-white placeholder-slate-400 backdrop-blur-md transition-colors focus:border-blue-400/50 focus:bg-white/8 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-none"
                    />
                    <button
                        type="submit"
                        className="absolute right-1 inline-flex items-center gap-1.5 bg-[#1e4e9c] hover:bg-[#2563eb] text-white text-xs font-semibold px-4 py-2 rounded-full transition-all duration-200 shadow-md shadow-blue-900/40 hover:shadow-blue-600/50 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-none"
                    >
                        <span>Join</span>
                        <Send className="w-3 h-3" aria-hidden="true" />
                    </button>
                </div>

                {isSubmitted && (
                    <div className="inline-flex items-center gap-1.5 text-xs text-emerald-400 pt-1">
                        <CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>Thank you for subscribing!</span>
                    </div>
                )}
            </form>

            <div className="pt-2 flex flex-col gap-2">
                <span className="text-xs text-slate-400 uppercase tracking-wider font-medium">
                    Follow the Community
                </span>
                <FooterSocials />
            </div>
        </div>
    );
};

export default FooterNewsletter;
