"use client";

import { motion } from "framer-motion";
import { Project } from "@/app/data/profile";

interface NodeProps {
    x: number;
    y: number;
    project: Project;
    isActive: boolean;
    onHover: (p: Project | null) => void;
    onClick: (p: Project) => void;
    delay: number;
}

export default function ProjectNode({ x, y, project, isActive, onHover, onClick, delay }: NodeProps) {
    return (
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: delay * 0.05, duration: 0.5, type: "spring" }}
            viewport={{ once: true }}
            className="absolute"
            style={{ left: x, top: y, transform: 'translate(-50%, -50%)' }}
        >
            <div
                className="relative group cursor-pointer"
                onMouseEnter={() => onHover(project)}
                onMouseLeave={() => onHover(null)}
                onClick={() => onClick(project)}
                tabIndex={0}
                onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        onClick(project);
                    }
                }}
            >
                {/* Glow Ring */}
                <div className={`absolute -inset-4 rounded-full bg-purple-500/20 blur-md transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />

                {/* Node Body */}
                <div className={`w-4 h-4 md:w-6 md:h-6 rounded-full border-2 transition-all duration-300 ${isActive ? 'bg-purple-500 border-white scale-125' : 'bg-[#0b0b0f] border-white/30 group-hover:border-purple-400 group-hover:scale-110'}`}>
                    <div className={`absolute inset-1 rounded-full bg-white opacity-0 transition-opacity ${isActive ? 'opacity-100' : ''}`} />
                </div>

                {/* Label (Always visible on hover or active) */}
                <motion.div
                    animate={{
                        opacity: isActive ? 1 : 0,
                        y: isActive ? 10 : 0,
                        pointerEvents: isActive ? 'auto' : 'none'
                    }}
                    className="absolute left-1/2 top-full -translate-x-1/2 mt-2"
                >
                    <div className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10 whitespace-nowrap">
                        <span className="text-xs md:text-sm font-medium text-white">{project.title}</span>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}
