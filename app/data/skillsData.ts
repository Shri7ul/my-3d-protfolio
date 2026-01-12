export interface Skill {
    name: string;
    percentage: number;
    category: "Core" | "Tools & Platforms";
    icon?: string; // Optional icon or emoji
}

export const SKILLS: Skill[] = [
    // Core Skills
    { name: "C", percentage: 92, category: "Core" },
    { name: "C++", percentage: 90, category: "Core" },
    { name: "HTML5", percentage: 90, category: "Core" },
    { name: "Java", percentage: 75, category: "Core" },
    { name: "Python", percentage: 85, category: "Core" },
    { name: "Pandas", percentage: 88, category: "Core" },
    { name: "NumPy", percentage: 90, category: "Core" },

    // Tools & Platforms
    { name: "Firebase", percentage: 70, category: "Tools & Platforms" },
    { name: "Netlify", percentage: 85, category: "Tools & Platforms" },
    { name: "Vercel", percentage: 65, category: "Tools & Platforms" },
    { name: "Anaconda", percentage: 80, category: "Tools & Platforms" },
    { name: "MongoDB", percentage: 75, category: "Tools & Platforms" },
    { name: "Supabase", percentage: 65, category: "Tools & Platforms" },
];

export const getSkillLevel = (percentage: number): string => {
    if (percentage >= 85) return "Advanced";
    if (percentage >= 70) return "Strong";
    if (percentage >= 55) return "Growing";
    return "Learning";
};
