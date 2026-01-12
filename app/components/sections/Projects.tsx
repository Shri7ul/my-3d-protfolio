"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/app/components/ui/button";

const projects = [
    {
        title: "Rabexon",
        description: "A comprehensive web platform showcasing modern web development practices and user experience design.",
        tech: "React, TypeScript, Tailwind CSS",
        role: "Full Stack Developer",
        demo: "https://rabexon.com/",
        status: "Live"
    },
    {
        title: "InitForge",
        description: "Bootstrap Python projects in seconds: clean structure, zero chaos. CLI tool automating: folder structure, proper README, presets.",
        tech: "Python, PyPI, CLI",
        role: "Creator",
        demo: "https://pypi.org/project/initforge/",
        status: "Live"
    },
    {
        title: "UIU Assignment Cover Page Generator",
        description: "A streamlined tool for generating professional cover pages for academic assignments with customizable templates and automated formatting.",
        tech: "HTML, CSS, JavaScript",
        role: "Front-End Developer",
        demo: "https://uiu-assignment-cover.netlify.app/",
        github: "https://github.com/Shri7ul/UIU-Cover-Letter-Generator",
        status: "Live"
    },
    {
        title: "Bangladesh Railway Auto Ticket Bot",
        description: "An automated ticket booking system for Bangladesh Railway, helping users secure tickets efficiently through intelligent automation.",
        tech: "Python, Selenium",
        role: "Automation Developer",
        github: "https://github.com/Shri7ul/Railway-Ticket-automate",
        status: "Completed"
    },
    {
        title: "QR Code Generator",
        description: "A simple yet powerful tool to generate custom QR codes for various purposes including URLs, text, and contact information.",
        tech: "HTML, CSS, JavaScript",
        role: "Developer",
        github: "https://github.com/Shri7ul/Mini_python_project/tree/main/Qr_Code_Generator",
        status: "Live"
    },
    {
        title: "USA Visa Prediction ML Project",
        description: "A machine learning model that predicts USA visa approval likelihood based on applicant profiles and historical data patterns.",
        tech: "Python, Scikit-learn, Pandas, NumPy",
        role: "ML Engineer",
        github: "https://github.com/Shri7ul/usa-visa-prediction",
        status: "In Progress"
    },
    {
        title: "Speak Without Words",
        description: "Hand gesture recognition system translating sign language to text/speech for improved accessibility.",
        tech: "Computer Vision, Python",
        role: "Developer",
        github: "https://github.com/Shri7ul/Speak-Without-Words",
        status: "Completed"
    },
    {
        title: "Study Summarizer",
        description: "Automated summarization tool for PDF documents and PowerPoint presentations using NLP techniques.",
        tech: "NLP, Python",
        role: "Developer",
        github: "https://github.com/Shri7ul/study-summarizer",
        status: "Completed"
    },
    {
        title: "Universal Downloader",
        description: "Multi-platform video downloader supporting various streaming sites with quality selection.",
        tech: "Python",
        role: "Developer",
        github: "https://github.com/Shri7ul/Universal-Downloader",
        status: "Completed"
    },
    {
        title: "YouTube Video Summarizer",
        description: "AI-powered tool that generates concise summaries from YouTube video transcripts.",
        tech: "AI, Python",
        role: "Developer",
        github: "https://github.com/Shri7ul/Youtube-Video-summarizer",
        status: "Completed"
    },
    {
        title: "Cutie Voice Assistance",
        description: "Voice-controlled personal assistant for PC automation and information retrieval.",
        tech: "AI, Python",
        role: "Developer",
        github: "https://github.com/Shri7ul/Cutie-Voice-Assistance",
        status: "Completed"
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 px-4 bg-gradient-to-b from-[#0b0b0f] via-background/50 to-[#0b0b0f] relative overflow-hidden">

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
                        Projects
                    </h2>
                    <p className="text-white/50 text-xl font-light">
                        Building solutions that matter ⚡
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="group relative bg-[#121212]/80 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-purple-500/30 hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.15)] transition-all duration-300 hover:-translate-y-1"
                        >
                            {/* Status Badge */}
                            <div className="flex items-center justify-between mb-4">
                                <span
                                    className={`px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider ${project.status === "Live"
                                        ? "bg-green-500/10 text-green-400 border border-green-500/20"
                                        : project.status === "In Progress"
                                            ? "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20"
                                            : "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                                        }`}
                                >
                                    {project.status}
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors">
                                {project.title}
                            </h3>

                            {/* Description */}
                            <p className="text-white/60 mb-6 leading-relaxed min-h-[50px]">
                                {project.description}
                            </p>

                            {/* Tech Stack */}
                            <div className="mb-6">
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.split(",").map(t => (
                                        <span key={t.trim()} className="text-xs font-mono text-white/50 bg-white/5 px-2 py-1 rounded border border-white/5">
                                            {t.trim()}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Footer: Role + Buttons */}
                            <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                                <p className="text-xs font-mono text-white/40 uppercase tracking-widest">{project.role}</p>

                                <div className="flex gap-3">
                                    {project.demo && (
                                        <Button
                                            asChild
                                            size="sm"
                                            className="bg-purple-600/20 hover:bg-purple-600/40 text-purple-300 border border-purple-500/30"
                                        >
                                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                                <ExternalLink className="w-4 h-4 mr-2" />
                                                Live
                                            </a>
                                        </Button>
                                    )}
                                    {project.github && (
                                        <Button
                                            asChild
                                            variant="outline"
                                            size="sm"
                                            className="border-white/10 hover:bg-white/10 hover:text-white"
                                        >
                                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                                                <Github className="w-4 h-4 mr-2" />
                                                Code
                                            </a>
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
