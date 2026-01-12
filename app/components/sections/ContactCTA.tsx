"use client";

import { PROFILE } from "@/app/data/profile";
import { Mail, Github, Linkedin, Facebook } from "lucide-react";

export default function ContactCTA() {
    return (
        <section className="bg-[#0b0b0f] py-32 px-4 relative overflow-hidden text-center border-t border-white/5">

            {/* Glow Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />

            <h2 className="text-5xl md:text-8xl font-bold mb-12 relative z-10 tracking-tight">
                Let’s Connect <span className="text-yellow-400">⚡</span>
            </h2>

            <div className="flex justify-center gap-8 mb-16 relative z-10">
                <a href={`mailto:${PROFILE.socials.email}`} className="p-4 rounded-full bg-white/5 hover:bg-white hover:text-black transition-all border border-white/10 hover:scale-110">
                    <Mail size={32} />
                </a>
                <a href={PROFILE.socials.github} target="_blank" className="p-4 rounded-full bg-white/5 hover:bg-white hover:text-black transition-all border border-white/10 hover:scale-110">
                    <Github size={32} />
                </a>
                <a href={PROFILE.socials.linkedin} target="_blank" className="p-4 rounded-full bg-white/5 hover:bg-blue-600 hover:text-white transition-all border border-white/10 hover:scale-110">
                    <Linkedin size={32} />
                </a>
                <a href={PROFILE.socials.facebook} target="_blank" className="p-4 rounded-full bg-white/5 hover:bg-blue-500 hover:text-white transition-all border border-white/10 hover:scale-110">
                    <Facebook size={32} />
                </a>
            </div>

            <p className="text-white/40 font-mono relative z-10 max-w-lg mx-auto">
                “Open to mentorship, collaboration, and opportunities to learn and grow! 🚀”
            </p>

        </section>
    );
}
