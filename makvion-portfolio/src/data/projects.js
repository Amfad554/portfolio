export const projects = [
  {
    id: 'workdone',
    role: 'Full-Stack Developer',
    label: 'Featured Project',
    name: 'WorkDone',
    tagline: 'One platform. Every student need.',
    shortDesc:
      'A unified student ecosystem combining marketplace, job board, housing finder, social feed, real-time chat, and payments — built end-to-end on the PERN stack.',
    problem:
      'Students juggle 5+ disconnected platforms for housing, jobs, buying, and socializing. Each platform is generic, untrustworthy, and not built for student life.',
    solution:
      'A single, verified ecosystem purpose-built for students — with real-time features, integrated payments, media storage, and a trust layer through identity verification.',
    systems: [
      {
        name: 'Marketplace',
        desc: 'Buy and sell products with media uploads, search, and category filtering.',
      },
      {
        name: 'Job Board',
        desc: 'Post and apply for student-friendly jobs with application tracking.',
      },
      {
        name: 'Housing Finder',
        desc: 'Find roommates and housing with filters for budget, location, and preferences.',
      },
      {
        name: 'Social Feed',
        desc: 'Posts, likes, comments, and follows — a feed built for student communities.',
      },
      {
        name: 'Real-Time Chat',
        desc: 'Socket.IO powered messaging and notifications across the platform.',
      },
      {
        name: 'Payments',
        desc: 'Paystack integration for secure in-app payments and withdrawals.',
      },
      {
        name: 'Verification',
        desc: 'Blue-tick identity system to build trust between users.',
      },
    ],
    stack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Socket.IO', 'Paystack', 'Cloudinary', 'JWT'],
    architecture: {
      frontend: ['React (Vite)', 'Tailwind CSS', 'Axios', 'React Router', 'Socket.IO Client'],
      backend:  ['Node.js', 'Express', 'PostgreSQL', 'JWT (Access + Refresh)', 'Socket.IO', 'Paystack API', 'Cloudinary API'],
    },
    highlights: [
      'JWT auth with access + refresh token rotation',
      'Real-time messaging and notifications via Socket.IO',
      'Paystack payment and withdrawal integration',
      'Cloudinary media pipeline for product and profile images',
      'Blue-tick verification system for user trust',
      'Normalized PostgreSQL schema across 7 core systems',
    ],
    decisions: [
      {
        challenge: 'Managing real-time events across multiple systems',
        decision: 'Used Socket.IO rooms scoped per user session — keeps chat, notifications, and feed updates isolated without cross-contamination.',
      },
      {
        challenge: 'Handling media uploads at scale without a CDN',
        decision: 'Routed all uploads through Cloudinary with server-side validation before storage — keeping the database clean and assets optimized.',
      },
      {
        challenge: 'Building trust in a peer-to-peer student marketplace',
        decision: 'Implemented a blue-tick verification layer tied to student identity — unverified users have limited posting privileges.',
      },
      {
        challenge: 'Keeping a monorepo clean across 7 feature systems',
        decision: 'Separated each system into its own route/controller/service layer — shared middleware handles auth and validation globally.',
      },
    ],
    links: {
      live:   null,
      github: 'https://github.com/makvion/workdone',
    },
    featured: true,
    accent: '#0F4C5C',
  },
  {
    id: 'apexcare',
    role: 'Frontend Developer',
    label: 'Project',
    name: 'ApexCare',
    tagline: 'Hospital management, simplified.',
    shortDesc:
      'A web-based hospital management system for handling patients, staff, appointments, and medical records in one clean interface.',
    problem:
      'Hospitals rely on manual processes and fragmented systems for records, scheduling, and staff management — leading to errors and inefficiency.',
    solution:
      'A centralized, component-driven React application that gives hospital staff a single, fast interface for all core workflows.',
    systems: [
      {
        name: 'Patient Management',
        desc: 'Full patient profiles with medical history and record tracking.',
      },
      {
        name: 'Appointment Scheduling',
        desc: 'Book, reschedule, and track appointments across departments.',
      },
      {
        name: 'Staff Management',
        desc: 'Manage doctor and staff profiles, roles, and availability.',
      },
      {
        name: 'Medical Records',
        desc: 'Prescriptions, diagnoses, and visit history in structured records.',
      },
    ],
    stack: ['React', 'Tailwind CSS', 'Vite', 'Vercel'],
    highlights: [
      'Component-driven architecture for complex data views',
      'Clean, fast UI designed for non-technical hospital staff',
      'Scalable layout system for adding new departments',
      'Deployed and live on Vercel',
    ],
    links: {
      live:   'https://apex-frontend-sage.vercel.app/',
      github: null,
    },
    featured: false,
    accent: '#E36414',
  },
]

export const featuredProject   = projects.find((p) => p.featured)
export const secondaryProjects = projects.filter((p) => !p.featured)