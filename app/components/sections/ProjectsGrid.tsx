"use client";

import { PROFILE } from "@/app/data/profile";
import ProjectsNetwork from "../projects/ProjectsNetwork";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
    const projects = PROFILE.projects;

    return (
        <section id="projects" className="relative min-h-screen bg-[#0b0b0f] py-24 px-4 overflow-hidden">

            {/* Header */}
            <div className="text-center mb-16 relative z-10">
                <h2 className="text-4xl md:text-6xl font-bold mb-4">Projects Neural Network</h2>
                <p className="text-white/50">Hover nodes to reveal project details</p>
            </div>

            {/* 1. Desktop Layout (The Network) */}
            <div className="hidden lg:flex justify-center items-center relative z-10">
                <ProjectsNetwork projects={projects} />
            </div>

            {/* 2. Mobile/Tablet Layout (Premium Grid Fallback) */}
            <div className="lg:hidden grid gap-6 max-w-md mx-auto relative z-10">
                {projects.map((project, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xl font-bold">{project.title}</h3>
                            <span className={`text-[10px] px-2 py-0.5 rounded-full border ${project.status === 'Live' ? 'border-green-500/30 text-green-400' : 'border-white/20 text-white/50'
                                }`}>
                                {project.status}
                            </span>
                        </div>

                        <p className="text-white/60 text-sm mb-4 line-clamp-3">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.tech.map(t => (
                                <span key={t} className="text-xs text-white/40 bg-white/5 px-2 py-1 rounded">
                                    {t}
                                </span>
                            ))}
                        </div>

                        <div className="flex gap-3">
                            {project.demoUrl && (
                                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-2 bg-white text-black rounded-lg text-sm font-medium">
                                    <ExternalLink size={14} /> Demo
                                </a>
                            )}
                            {project.repoUrl && (
                                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-2 bg-white/10 text-white rounded-lg text-sm font-medium">
                                    <Github size={14} /> Code
                                </a>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>

        </section>
    );
}
