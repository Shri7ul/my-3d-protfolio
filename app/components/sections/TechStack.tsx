"use client";

import { motion } from "framer-motion";
import { SKILLS, getSkillLevel, Skill } from "@/app/data/skillsData";

export default function TechStack() {
    const coreSkills = SKILLS.filter((s) => s.category === "Core").sort((a, b) => b.percentage - a.percentage);
    const toolSkills = SKILLS.filter((s) => s.category === "Tools & Platforms").sort((a, b) => b.percentage - a.percentage);

    const SkillBar = ({ skill, index }: { skill: Skill; index: number }) => (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
            viewport={{ once: true }}
            className="group mb-6"
        >
            <div className="flex justify-between items-end mb-2">
                <div className="flex items-center gap-2">
                    <span className="text-lg font-medium text-white/90">{skill.name}</span>
                    <span className="text-xs text-white/40 bg-white/5 px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        {getSkillLevel(skill.percentage)}
                    </span>
                </div>
                <span className="text-sm font-mono text-purple-400">{skill.percentage}%</span>
            </div>

            <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    className="h-full bg-gradient-to-r from-purple-600 to-blue-500 rounded-full group-hover:brightness-125 transition-all"
                />
            </div>
        </motion.div>
    );

    return (
        <section className="py-24 px-4 bg-[#0b0b0f] relative border-b border-white/5">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills Dashboard</h2>
                    <p className="text-white/50 text-lg">Technical Proficiency & Toolset</p>
                </div>

                <div className="grid md:grid-cols-2 gap-16">
                    {/* COLUMN 1: CORE SKILLS */}
                    <div>
                        <h3 className="text-xl font-mono text-white/60 mb-8 uppercase tracking-widest border-b border-white/10 pb-2">
                            Core Engineering
                        </h3>
                        <div>
                            {coreSkills.map((skill, i) => (
                                <SkillBar key={skill.name} skill={skill} index={i} />
                            ))}
                        </div>
                    </div>

                    {/* COLUMN 2: TOOLS & PLATFORMS */}
                    <div>
                        <h3 className="text-xl font-mono text-white/60 mb-8 uppercase tracking-widest border-b border-white/10 pb-2">
                            Tools & Platforms
                        </h3>
                        <div>
                            {toolSkills.map((skill, i) => (
                                <SkillBar key={skill.name} skill={skill} index={i} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
