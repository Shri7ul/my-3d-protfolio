"use client";

import { motion } from "framer-motion";
import { PROFILE } from "@/app/data/profile";
import { useState } from "react";

// Static positions for the "brain" nodes to ensure consistency (0-100% scale)
const NODES = [
    { id: 0, x: 50, y: 50, label: "CSE Core" },   // Center
    { id: 1, x: 20, y: 30, label: "Python" },
    { id: 2, x: 80, y: 30, label: "JavaScript" },
    { id: 3, x: 20, y: 70, label: "ML / AI" },
    { id: 4, x: 80, y: 70, label: "React" },
    { id: 5, x: 50, y: 15, label: "Automation" },
    { id: 6, x: 50, y: 85, label: "Database" },
    { id: 7, x: 15, y: 50, label: "C++" },
    { id: 8, x: 85, y: 50, label: "Cloud" },
];

const CONNECTIONS = [
    [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7], [0, 8],
    [1, 5], [1, 7], [2, 4], [2, 8], [3, 5], [3, 0], [4, 6], [4, 2]
];

export default function TechStackNetwork() {
    const [hoveredNode, setHoveredNode] = useState<number | null>(null);

    return (
        <section className="relative min-h-[80vh] bg-[#0b0b0f] py-24 px-4 overflow-hidden flex flex-col items-center justify-center">

            <div className="text-center mb-12 z-10">
                <h2 className="text-4xl md:text-6xl font-bold mb-4">Tech Neural Network</h2>
                <p className="text-white/50">Hover nodes to reveal proficiency</p>
            </div>

            {/* DESKTOP NETWORK VISUALIZATION */}
            <div className="hidden md:block relative w-[600px] h-[600px] bg-white/5 rounded-full backdrop-blur-3xl border border-white/5 shadow-2xl shadow-purple-900/20">
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    {CONNECTIONS.map(([start, end], i) => {
                        const s = NODES[start];
                        const e = NODES[end];
                        return (
                            <motion.line
                                key={i}
                                x1={`${s.x}%`} y1={`${s.y}%`}
                                x2={`${e.x}%`} y2={`${e.y}%`}
                                stroke="white"
                                strokeOpacity={0.1}
                                strokeWidth="1"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                transition={{ duration: 1.5, delay: 0.5 }}
                            />
                        );
                    })}
                </svg>

                {NODES.map((node) => (
                    <motion.div
                        key={node.id}
                        className="absolute w-12 h-12 -ml-6 -mt-6 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 border border-white/20 flex items-center justify-center cursor-pointer z-10 shadow-lg shadow-purple-500/30"
                        style={{ left: `${node.x}%`, top: `${node.y}%` }}
                        whileHover={{ scale: 1.2 }}
                        onMouseEnter={() => setHoveredNode(node.id)}
                        onMouseLeave={() => setHoveredNode(null)}
                    >
                        <div className="w-3 h-3 bg-white rounded-full animate-pulse" />

                        {/* Tooltip */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: hoveredNode === node.id ? 1 : 0, y: hoveredNode === node.id ? -40 : 10 }}
                            className="absolute whitespace-nowrap bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-sm font-mono border border-white/20 pointer-events-none"
                        >
                            {node.label}
                        </motion.div>
                    </motion.div>
                ))}
            </div>

            {/* MOBILE GRID FALLBACK */}
            <div className="md:hidden grid grid-cols-2 gap-4 w-full max-w-sm">
                {PROFILE.techStack.map((tech, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 p-3 rounded-lg text-center text-sm font-mono">
                        {tech}
                    </div>
                ))}
            </div>

        </section>
    );
}
