"use client";

import { motion } from "framer-motion";
import { Project } from "@/app/data/profile";
import { ExternalLink, Github, X } from "lucide-react";
import { useEffect } from "react";

interface ProjectModalProps {
    project: Project | null;
    onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
    // Handle ESC key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [onClose]);

    if (!project) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            />

            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative w-full max-w-2xl bg-[#0b0b0f]/90 border border-white/10 rounded-2xl p-8 shadow-2xl overflow-hidden"
            >
                {/* Glow Effects */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" />

                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors"
                >
                    <X size={20} className="text-white/60" />
                </button>

                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-2">
                        <span className={`px-3 py-1 text-xs font-mono rounded-full border ${project.status === "Live" ? "border-green-500/30 text-green-400 bg-green-500/10" :
                                project.status === "Completed" ? "border-blue-500/30 text-blue-400 bg-blue-500/10" :
                                    "border-yellow-500/30 text-yellow-400 bg-yellow-500/10"
                            }`}>
                            {project.status}
                        </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h2>

                    <p className="text-lg text-white/70 mb-6 leading-relaxed border-l-2 border-purple-500/50 pl-4">
                        {project.description}
                    </p>

                    <div className="grid grid-cols-2 gap-8 mb-8">
                        <div>
                            <h3 className="text-sm font-mono text-white/40 mb-2 uppercase">Role</h3>
                            <p className="font-medium text-white/90">{project.role}</p>
                        </div>
                        <div>
                            <h3 className="text-sm font-mono text-white/40 mb-2 uppercase">Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map(t => (
                                    <span key={t} className="text-sm text-white/60 bg-white/5 px-2 py-1 rounded">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        {project.demoUrl && (
                            <a
                                href={project.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-white/90 transition-colors"
                            >
                                <ExternalLink size={18} />
                                Live Demo
                            </a>
                        )}
                        {project.repoUrl && (
                            <a
                                href={project.repoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-colors"
                            >
                                <Github size={18} />
                                Code
                            </a>
                        )}
                    </div>

                </div>
            </motion.div>
        </div>
    );
}
