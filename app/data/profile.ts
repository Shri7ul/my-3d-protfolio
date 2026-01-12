export interface Project {
    title: string;
    role: string;
    tech: string[];
    status: "Live" | "Completed" | "In Progress" | "Prototype";
    description: string;
    demoUrl?: string; // e.g. Live link, Demo
    repoUrl?: string; // GitHub
    oneLiner?: string;
}

export interface SocialLink {
    platform: string;
    url: string;
}

export const PROFILE = {
    name: "Shriful Islam",
    tagline: "B.Sc. in CSE | Passionate About AI, ML & Automation | Building Skills for the Future 🔥",
    shortTagline: "Building solutions that matter ⚡",
    education: "B.Sc. in Computer Science & Engineering (currently pursuing)",

    about: {
        bio: "Passionate about AI, automation, building solutions that matter.",
        vision: "Master AI + automation to solve real-world problems; tech is impact.",
        currentFocus: "Machine Learning projects, automation tools, exploring AI; always learning & building.",
        personality: "Problem solver, tech enthusiast, continuous learner; turning ideas into reality through code + innovation."
    },

    socials: {
        email: "smislam5959@gmail.com",
        github: "https://github.com/Shri7ul",
        linkedin: "https://www.linkedin.com/in/shri7ul/",
        facebook: "https://www.facebook.com/shri7ul"
    },

    techStack: [
        "C", "C++", "HTML5", "Java", "Python",
        "Firebase", "Netlify", "Vercel", "Anaconda",
        "MongoDB", "Supabase", "Pandas", "NumPy",
        "ML", "Automation", "Computer Vision", "Web Dev"
    ],

    projects: [
        {
            title: "Rabexon",
            role: "Full Stack Developer",
            tech: ["React", "TypeScript", "Tailwind CSS"],
            status: "Live",
            description: "A comprehensive web platform showcasing modern web development practices and user experience design.",
            demoUrl: "https://rabexon.com/"
        },
        {
            title: "InitForge",
            role: "Creator",
            tech: ["Python", "PyPI", "CLI"],
            status: "Live",
            description: "Bootstrap Python projects in seconds: clean structure, zero chaos. CLI tool automating: folder structure, proper README, presets.",
            demoUrl: "https://pypi.org/project/initforge/",
            oneLiner: "Bootstrap Python projects in seconds"
        },
        {
            title: "UIU Assignment Cover Page Generator",
            role: "Front-End Developer",
            tech: ["HTML", "CSS", "JavaScript"],
            status: "Live",
            description: "A streamlined tool for generating professional cover pages for academic assignments with customizable templates and automated formatting.",
            demoUrl: "https://uiu-assignment-cover.netlify.app/",
            repoUrl: "https://github.com/Shri7ul/UIU-Cover-Letter-Generator"
        },
        {
            title: "Bangladesh Railway Auto Ticket Bot",
            role: "Automation Developer",
            tech: ["Python", "Selenium"],
            status: "Completed",
            description: "An automated ticket booking system for Bangladesh Railway, helping users secure tickets efficiently through intelligent automation.",
            repoUrl: "https://github.com/Shri7ul/Railway-Ticket-automate"
        },
        {
            title: "QR Code Generator",
            role: "Developer",
            tech: ["HTML", "CSS", "JavaScript"],
            status: "Live",
            description: "A simple yet powerful tool to generate custom QR codes for various purposes including URLs, text, and contact information.",
            repoUrl: "https://github.com/Shri7ul/Mini_python_project/tree/main/Qr_Code_Generator"
        },
        {
            title: "USA Visa Prediction ML Project",
            role: "ML Engineer",
            tech: ["Python", "Scikit-learn", "Pandas", "NumPy"],
            status: "In Progress",
            description: "A machine learning model that predicts USA visa approval likelihood based on applicant profiles and historical data patterns.",
            repoUrl: "https://github.com/Shri7ul/usa-visa-prediction"
        },
        {
            title: "Speak Without Words",
            role: "Developer",
            tech: ["Computer Vision", "Python"],
            status: "Completed",
            description: "Hand gesture recognition system translating sign language to text/speech for improved accessibility.",
            repoUrl: "https://github.com/Shri7ul/Speak-Without-Words",
            oneLiner: "hand gesture → intent/communication"
        },
        {
            title: "Study Summarizer",
            role: "Developer",
            tech: ["NLP", "Python"],
            status: "Completed",
            description: "Automated summarization tool for PDF documents and PowerPoint presentations using NLP techniques.",
            repoUrl: "https://github.com/Shri7ul/study-summarizer",
            oneLiner: "summarize PDF/PPTX"
        },
        {
            title: "Universal Downloader",
            role: "Developer",
            tech: ["Python"],
            status: "Completed",
            description: "Multi-platform video downloader supporting various streaming sites with quality selection.",
            repoUrl: "https://github.com/Shri7ul/Universal-Downloader",
            oneLiner: "download videos"
        },
        {
            title: "YouTube Video Summarizer",
            role: "Developer",
            tech: ["AI", "Python"],
            status: "Completed",
            description: "AI-powered tool that generates concise summaries from YouTube video transcripts.",
            repoUrl: "https://github.com/Shri7ul/Youtube-Video-summarizer",
            oneLiner: "paste YouTube link → summary"
        },
        {
            title: "Cutie Voice Assistance",
            role: "Developer",
            tech: ["AI", "Python"],
            status: "Completed",
            description: "Voice-controlled personal assistant for PC automation and information retrieval.",
            repoUrl: "https://github.com/Shri7ul/Cutie-Voice-Assistance",
            oneLiner: "voice-controlled PC assistant/agent"
        }
    ] as Project[]
};
