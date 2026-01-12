import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/app/components/ui/button";

const Projects = () => {
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
        }
    ];

    return (
        <section id="projects" className="py-20 px-4 bg-gradient-to-b from-black via-background/50 to-black relative overflow-hidden">
            {/* Animated thread connections */}
            <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    {[...Array(5)].map((_, i) => (
                        <line
                            key={i}
                            x1={`${20 + i * 15}%`}
                            y1="0%"
                            x2={`${20 + i * 15}%`}
                            y2="100%"
                            className="stroke-primary"
                            strokeWidth="1"
                            strokeDasharray="10,10"
                        >
                            <animate
                                attributeName="stroke-dashoffset"
                                from="0"
                                to="20"
                                dur="3s"
                                repeatCount="indefinite"
                            />
                        </line>
                    ))}
                </svg>
            </div>

            <div className="container mx-auto max-w-6xl relative z-10">
                <h2 className="text-4xl md:text-6xl font-bold text-center mb-6 gradient-text animate-fade-in">
                    Projects
                </h2>
                <p className="text-center text-muted-foreground mb-16 text-lg animate-fade-in">
                    Building solutions that matter ⚡
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={project.title}
                            className="relative group animate-slide-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Thread connection node */}
                            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-primary rounded-full animate-glow-pulse" style={{ zIndex: 20 }} />

                            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-accent to-secondary rounded-2xl opacity-0 group-hover:opacity-75 blur transition-all duration-500" />
                            <div className="relative p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-primary/30 hover:border-primary/60 transition-all duration-300 h-full flex flex-col neon-border">
                                {/* Status Badge */}
                                <div className="flex items-center justify-between mb-4">
                                    <span
                                        className={`px-3 py-1 rounded-full text-xs font-semibold ${project.status === "Live"
                                                ? "bg-primary/20 text-primary animate-pulse"
                                                : project.status === "In Progress"
                                                    ? "bg-accent/20 text-accent"
                                                    : "bg-secondary/20 text-secondary"
                                            }`}
                                    >
                                        {project.status}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-bold mb-3 gradient-text group-hover:scale-105 transition-transform">
                                    {project.title}
                                </h3>

                                {/* Description */}
                                <p className="text-muted-foreground mb-4 flex-grow">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="mb-4">
                                    <p className="text-sm font-semibold text-primary mb-2">Technologies:</p>
                                    <p className="text-sm text-muted-foreground">{project.tech}</p>
                                </div>

                                {/* Role */}
                                <div className="mb-6">
                                    <p className="text-sm font-semibold text-accent mb-1">Role:</p>
                                    <p className="text-sm text-muted-foreground">{project.role}</p>
                                </div>

                                {/* Buttons */}
                                <div className="flex gap-3 mt-auto">
                                    {project.demo && (
                                        <Button
                                            asChild
                                            size="sm"
                                            className="flex-1 bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-secondary neon-glow"
                                        >
                                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                                <ExternalLink className="w-4 h-4 mr-2" />
                                                Live Demo
                                            </a>
                                        </Button>
                                    )}
                                    {project.github && (
                                        <Button
                                            asChild
                                            variant="outline"
                                            size="sm"
                                            className="flex-1 border-primary/50 hover:border-primary neon-border"
                                        >
                                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                                                <Github className="w-4 h-4 mr-2" />
                                                Code
                                            </a>
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
