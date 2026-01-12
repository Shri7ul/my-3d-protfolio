"use client";

import { motion } from "framer-motion";
import { PROFILE } from "@/app/data/profile";
import { Brain, Code, Lightbulb, User } from "lucide-react";

export default function AboutSection() {
    const cards = [
        { title: "Bio", content: PROFILE.about.bio, icon: User, color: "bg-blue-500/10 border-blue-500/20" },
        { title: "Vision", content: PROFILE.about.vision, icon: Lightbulb, color: "bg-amber-500/10 border-amber-500/20" },
        { title: "Current Focus", content: PROFILE.about.currentFocus, icon: Brain, color: "bg-purple-500/10 border-purple-500/20" },
        { title: "Personality", content: PROFILE.about.personality, icon: Code, color: "bg-emerald-500/10 border-emerald-500/20" },
    ];

    return (
        <section className="relative min-h-screen py-24 px-4 bg-[#0b0b0f] text-white overflow-hidden">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

                {/* LEFT COLUMN: Intro */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-sm font-mono text-purple-400 mb-4 tracking-widest uppercase">About Me</h2>
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
                        Driven by <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Innovation</span>
                    </h1>
                    <p className="text-xl text-white/70 mb-8 leading-relaxed">
                        {PROFILE.tagline}
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-[1px] bg-white/20"></div>
                            <span className="text-white/50 text-sm font-mono">BUILDING SOLUTIONS THAT MATTER ⚡</span>
                        </div>
                    </div>
                </motion.div>

                {/* RIGHT COLUMN: Grid Cards */}
                <div className="grid md:grid-cols-2 gap-6">
                    {cards.map((card, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className={`p-6 rounded-2xl backdrop-blur-md border ${card.color} hover:bg-opacity-20 transition-all duration-300 group`}
                        >
                            <card.icon className="w-8 h-8 mb-4 text-white/80 group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                            <p className="text-white/60 text-sm leading-relaxed">{card.content}</p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
