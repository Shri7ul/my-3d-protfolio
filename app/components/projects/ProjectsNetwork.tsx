"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/app/data/profile";
import ProjectNode from "./ProjectNode";
import ProjectModal from "./ProjectModal";

interface ProjectsNetworkProps {
    projects: Project[];
}

export default function ProjectsNetwork({ projects }: ProjectsNetworkProps) {
    const [activeProject, setActiveProject] = useState<Project | null>(null);
    const [modalProject, setModalProject] = useState<Project | null>(null);

    // Calculate positions in a circle
    // We use a fixed radius.
    const radius = 300; // px
    const centerX = 400; // px (half of container width approx)
    const centerY = 400; // px

    // Calculate coordinates
    const nodes = useMemo(() => {
        return projects.map((project, i) => {
            const angle = (2 * Math.PI * i) / projects.length - Math.PI / 2; // start from top
            const x = centerX + radius * Math.cos(angle);
            const y = centerY + radius * Math.sin(angle);
            return { x, y, project, angle };
        });
    }, [projects]);

    return (
        <div className="relative w-[800px] h-[800px] mx-auto hidden md:block">

            {/* Background Arena */}
            <div className="absolute inset-0 rounded-full border border-white/5 bg-gradient-radial from-purple-900/10 to-transparent opacity-50" />
            <div className="absolute inset-[150px] rounded-full border border-white/5 border-dashed opacity-30 animate-spin-slow" />

            {/* Center Hub */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-[#0b0b0f] border border-white/10 flex items-center justify-center z-20 shadow-[0_0_50px_rgba(168,85,247,0.2)]">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 opacity-80 animate-pulse" />
            </div>

            {/* Connections SVG */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                {nodes.map((node, i) => (
                    <motion.line
                        key={i}
                        x1={centerX} y1={centerY}
                        x2={node.x} y2={node.y}
                        stroke="white"
                        strokeOpacity={activeProject?.title === node.project.title ? 0.3 : 0.05}
                        strokeWidth={activeProject?.title === node.project.title ? 2 : 1}
                        className="transition-all duration-300"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ delay: 0.5 + i * 0.05, duration: 1 }}
                    />
                ))}
            </svg>

            {/* Nodes */}
            {nodes.map((node, i) => (
                <ProjectNode
                    key={i}
                    x={node.x}
                    y={node.y}
                    project={node.project}
                    isActive={activeProject?.title === node.project.title}
                    onHover={setActiveProject}
                    onClick={setModalProject}
                    delay={i}
                />
            ))}

            {/* Hover Details Panel (Floating) */}
            <AnimatePresence>
                {activeProject && (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="absolute top-10 right-0 w-64 p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 pointer-events-none z-30"
                    >
                        <h3 className="text-lg font-bold text-white mb-1">{activeProject.title}</h3>
                        <p className="text-xs text-white/50 mb-2">{activeProject.role}</p>
                        <p className="text-xs text-white/70 line-clamp-3 mb-3">{activeProject.description}</p>
                        <div className="flex flex-wrap gap-1">
                            {activeProject.tech.slice(0, 3).map(t => (
                                <span key={t} className="text-[10px] uppercase tracking-wider bg-white/10 px-1.5 py-0.5 rounded text-white/60">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Modal */}
            <AnimatePresence>
                {modalProject && <ProjectModal project={modalProject} onClose={() => setModalProject(null)} />}
            </AnimatePresence>

        </div>
    );
}
