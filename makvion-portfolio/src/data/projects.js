export const projects = [
    {
        id: 'workdone',
        role: 'Full-Stack Developer',
        label: 'Featured Project',
        name: 'WorkDone',
        tagline: 'A platform where work gets done.',
        description:
            'WorkDone is a freelance and work management platform built for the real world — connecting clients with skilled professionals through a structured, trust-driven workflow.',
        problem:
            'Freelance platforms are either too bloated, too expensive, or designed for a Western market. There was no clean, developer-built alternative focused on structured work delivery.',
        solution:
            'A full-stack PERN platform with real authentication, role-based access, job posting, proposal submission, and a clean dashboard — built from scratch with production-level backend architecture.',
        stack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'JWT', 'REST API', 'Vercel', 'Render'],
        highlights: [
            'Role-based auth (client / freelancer) with JWT',
            'Job posting, proposal flow, and contract states',
            'PostgreSQL relational schema with normalized tables',
            'Protected REST API with middleware validation',
            'Deployed frontend (Vercel) + backend (Render)',
        ],
        architecture: {
            frontend: ['React (Vite)', 'Tailwind CSS', 'Axios', 'React Router'],
            backend: ['Node.js', 'Express', 'PostgreSQL', 'JWT Auth', 'bcrypt', 'REST API'],
        },
        links: {
            live: null,           // add when live
            github: 'https://github.com/makvion/workdone', // update with real URL
        },
        featured: true,
        // Placeholder colors for the mock UI preview
        accent: '#0F4C5C',
    },
    {
        id: 'apex',
        role: 'Frontend Developer',
        label: 'Project',
        name: 'Apex',
        tagline: 'Clean frontend. Sharp execution.',
        description:
            'Apex is a polished frontend project demonstrating component architecture, responsive design, and attention to detail in UI development.',
        problem:
            'Needed a real-world frontend project that showed layout thinking, responsive design, and production-level component structure.',
        solution:
            'Built a clean, fast frontend application deployed on Vercel with a focus on code quality and visual polish.',
        stack: ['React', 'Tailwind CSS', 'Vite', 'Vercel'],
        highlights: [
            'Clean component architecture',
            'Fully responsive across all breakpoints',
            'Deployed and live on Vercel',
        ],
        links: {
            live: 'https://apex-frontend-sage.vercel.app/',
            github: null,
        },
        featured: false,
        accent: '#E36414',
    },
]

export const featuredProject = projects.find((p) => p.featured)
export const secondaryProjects = projects.filter((p) => !p.featured)