import { motion } from 'framer-motion'
import {
    ArrowUpRight, Database, Shield, GitBranch,
    Layers, CheckCircle2, AlertTriangle, Lightbulb,
    Server, Zap, CreditCard, Image
} from 'lucide-react'
import Container from '../layout/Container'
import SectionLabel from '../ui/SectionLabel'
import Tag from '../ui/Tag'
import Button from '../ui/Button'
import { featuredProject } from '../../data/projects'

const p = featuredProject

const flowSteps = [
    {
        step: '01',
        title: 'Register & Verify',
        desc: 'User signs up with email and password. JWT access + refresh tokens are issued. Optional blue-tick verification unlocks full posting privileges.',
    },
    {
        step: '02',
        title: 'Build Your Profile',
        desc: 'Users set up a profile with Cloudinary-hosted avatar, bio, and preferences. Profile data feeds into all seven systems.',
    },
    {
        step: '03',
        title: 'Post or Browse',
        desc: 'Post a product, job, or housing listing — or browse what others have posted. Each system has its own filtered feed.',
    },
    {
        step: '04',
        title: 'Connect & Chat',
        desc: 'Socket.IO powers real-time messaging between users. Notifications fire instantly for messages, applications, and interactions.',
    },
    {
        step: '05',
        title: 'Transact Securely',
        desc: 'Paystack handles in-app payments. Users can receive payments, request withdrawals, and track transaction history.',
    },
    {
        step: '06',
        title: 'Engage Socially',
        desc: 'The social feed shows posts, likes, and comments from followed users — keeping the community active beyond transactional use.',
    },
]

const tables = [
    { name: 'users', cols: ['id', 'name', 'email', 'password_hash', 'role', 'verified', 'avatar_url', 'created_at'] },
    { name: 'listings', cols: ['id', 'user_id', 'type', 'title', 'description', 'price', 'media_urls', 'status'] },
    { name: 'jobs', cols: ['id', 'poster_id', 'title', 'description', 'budget', 'status', 'created_at'] },
    { name: 'applications', cols: ['id', 'job_id', 'applicant_id', 'cover_letter', 'status'] },
    { name: 'messages', cols: ['id', 'sender_id', 'receiver_id', 'content', 'read', 'created_at'] },
    { name: 'transactions', cols: ['id', 'user_id', 'amount', 'type', 'reference', 'status'] },
]

function SubHeader({ children }) {
    return (
        <h3 className="text-xl sm:text-2xl font-bold text-[#1A1A1A] tracking-tight mb-8">
            {children}
        </h3>
    )
}

function CaseStudy() {
    return (
        <section id="workdone-case-study" className="py-24 md:py-32 bg-white border-t border-black/5">
            <Container narrow>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55 }}
                    className="mb-16"
                >
                    <SectionLabel>Case Study</SectionLabel>
                    <h2 className="text-4xl sm:text-5xl font-bold text-[#1A1A1A] tracking-tight leading-tight mb-4">
                        WorkDone
                    </h2>
                    <p className="text-lg text-[#1A1A1A]/50 leading-relaxed max-w-xl">
                        A deep dive into building a unified student platform — architecture,
                        decisions, real-time systems, and payment integration.
                    </p>
                </motion.div>

                <div className="w-full h-px bg-black/5 mb-16" />

                {/* ── CASE STUDY SCREENSHOT PLACEHOLDER ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 w-full h-72 rounded-2xl border border-black/5 overflow-hidden bg-[#0F4C5C]/4"
                >
                    <img
                        src="/workdone-preview.png"
                        alt="WorkDone dashboard"
                        className="w-full h-full object-cover object-top"
                    />
                </motion.div>

                {/* 1. Overview */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <SubHeader>01 — Project Overview</SubHeader>
                    <p className="text-[#1A1A1A]/60 leading-relaxed mb-8">
                        WorkDone is a unified student platform built to replace the fragmented
                        ecosystem students rely on today. Instead of switching between Facebook
                        Marketplace, LinkedIn, WhatsApp groups, and housing apps — WorkDone
                        brings everything into one trusted, verified environment built
                        specifically for student life.
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {[
                            { label: 'Role', value: 'Full-Stack Dev' },
                            { label: 'Stack', value: 'PERN + Socket.IO' },
                            { label: 'Type', value: 'Student Platform' },
                            { label: 'Status', value: 'In Development' },
                        ].map(({ label, value }) => (
                            <div key={label} className="bg-[#F5F7F6] rounded-lg p-4 border border-black/5">
                                <div className="text-[10px] uppercase tracking-widest font-semibold text-[#1A1A1A]/35 mb-1">{label}</div>
                                <div className="text-sm font-semibold text-[#0F4C5C]">{value}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* 2. Problem & Solution */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <SubHeader>02 — Problem & Solution</SubHeader>
                    <div className="grid sm:grid-cols-2 gap-6">
                        {[
                            { heading: 'The Problem', color: '#E36414', body: p.problem },
                            { heading: 'The Solution', color: '#0F4C5C', body: p.solution },
                        ].map(({ heading, color, body }) => (
                            <div key={heading} className="bg-[#F5F7F6] rounded-xl p-6 border border-black/5">
                                <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color }}>
                                    {heading}
                                </div>
                                <p className="text-sm text-[#1A1A1A]/60 leading-relaxed">{body}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* 3. Core Systems */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <SubHeader>03 — Core Systems</SubHeader>
                    <p className="text-sm text-[#1A1A1A]/50 leading-relaxed mb-8">
                        Seven interconnected systems — each with its own data layer, API routes,
                        and UI — unified under one authentication context.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3">
                        {p.systems.map(({ name, desc }, i) => (
                            <motion.div
                                key={name}
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.07 }}
                                className="flex gap-4 p-5 bg-[#F5F7F6] rounded-xl border border-black/5 group hover:border-[#0F4C5C]/20 transition-colors"
                            >
                                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#0F4C5C]/8 flex items-center justify-center group-hover:bg-[#0F4C5C] transition-colors duration-200">
                                    <span className="text-[10px] font-bold text-[#0F4C5C] group-hover:text-white transition-colors">
                                        {String(i + 1).padStart(2, '0')}
                                    </span>
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-[#1A1A1A] mb-1">{name}</div>
                                    <p className="text-xs text-[#1A1A1A]/50 leading-relaxed">{desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* 4. How It Works */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <SubHeader>04 — How It Works</SubHeader>
                    <div className="space-y-3">
                        {flowSteps.map(({ step, title, desc }, i) => (
                            <motion.div
                                key={step}
                                initial={{ opacity: 0, x: -16 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.07 }}
                                className="flex gap-5 p-5 bg-[#F5F7F6] rounded-xl border border-black/5 group hover:border-[#0F4C5C]/20 transition-colors"
                            >
                                <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-[#0F4C5C]/8 flex items-center justify-center group-hover:bg-[#0F4C5C] transition-colors duration-200">
                                    <span className="text-[11px] font-bold text-[#0F4C5C] group-hover:text-white transition-colors duration-200">
                                        {step}
                                    </span>
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-[#1A1A1A] mb-1">{title}</div>
                                    <p className="text-sm text-[#1A1A1A]/50 leading-relaxed">{desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* 5. Database Schema */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <SubHeader>05 — Database Schema</SubHeader>
                    <p className="text-sm text-[#1A1A1A]/50 leading-relaxed mb-8">
                        PostgreSQL with a normalized relational design. Six core tables
                        with clean foreign key relationships across all seven systems.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {tables.map(({ name, cols }, i) => (
                            <motion.div
                                key={name}
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.07 }}
                                className="bg-[#F5F7F6] rounded-xl border border-black/5 overflow-hidden"
                            >
                                <div className="flex items-center gap-2.5 px-5 py-3.5 border-b border-black/5 bg-[#0F4C5C]/4">
                                    <Database size={12} className="text-[#0F4C5C]" />
                                    <span className="text-xs font-bold text-[#0F4C5C] font-mono">{name}</span>
                                </div>
                                <div className="px-5 py-4 space-y-1.5">
                                    {cols.map((col) => (
                                        <div key={col} className="flex items-center gap-2">
                                            <span className="w-1 h-1 rounded-full bg-[#E36414]/50 flex-shrink-0" />
                                            <span className="text-xs font-mono text-[#1A1A1A]/55">{col}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* 6. Technical Architecture */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <SubHeader>06 — Technical Architecture</SubHeader>
                    <div className="grid sm:grid-cols-2 gap-6">
                        {[
                            { label: 'Frontend', icon: Layers, items: p.architecture.frontend },
                            { label: 'Backend', icon: Server, items: p.architecture.backend },
                        ].map(({ label, icon: Icon, items }) => (
                            <div key={label} className="bg-[#F5F7F6] rounded-xl p-6 border border-black/5">
                                <div className="flex items-center gap-2 mb-5">
                                    <Icon size={14} className="text-[#0F4C5C]" />
                                    <span className="text-xs font-semibold uppercase tracking-widest text-[#0F4C5C]">{label}</span>
                                </div>
                                <ul className="space-y-3">
                                    {items.map((item) => (
                                        <li key={item} className="flex items-center gap-3">
                                            <CheckCircle2 size={12} className="text-emerald-500 flex-shrink-0" />
                                            <span className="text-sm text-[#1A1A1A]/65">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* 7. Challenges & Decisions */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <SubHeader>07 — Challenges & Decisions</SubHeader>
                    <div className="space-y-4">
                        {p.decisions.map(({ challenge, decision }, i) => (
                            <motion.div
                                key={challenge}
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.08 }}
                                className="grid sm:grid-cols-[200px_1fr] gap-4 p-6 bg-[#F5F7F6] rounded-xl border border-black/5"
                            >
                                <div>
                                    <div className="w-8 h-8 rounded-lg bg-[#E36414]/10 flex items-center justify-center mb-3">
                                        <AlertTriangle size={14} className="text-[#E36414]" />
                                    </div>
                                    <div className="text-xs font-semibold text-[#E36414] uppercase tracking-widest mb-1">Challenge</div>
                                    <p className="text-xs text-[#1A1A1A]/60 leading-relaxed">{challenge}</p>
                                </div>
                                <div className="sm:border-l sm:border-black/5 sm:pl-6">
                                    <div className="text-xs font-semibold text-[#0F4C5C] uppercase tracking-widest mb-1">Decision</div>
                                    <p className="text-sm text-[#1A1A1A]/60 leading-relaxed">{decision}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* 8. Key Highlights */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <SubHeader>08 — Key Highlights</SubHeader>
                    <div className="grid sm:grid-cols-2 gap-3">
                        {p.highlights.map((h, i) => (
                            <motion.div
                                key={h}
                                initial={{ opacity: 0, x: -8 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.35, delay: i * 0.06 }}
                                className="flex items-start gap-3 p-4 bg-[#F5F7F6] rounded-lg border border-black/5"
                            >
                                <CheckCircle2 size={14} className="text-[#0F4C5C] flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-[#1A1A1A]/65 leading-relaxed">{h}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* 9. Stack */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <SubHeader>09 — Stack</SubHeader>
                    <div className="flex flex-wrap gap-2">
                        {p.stack.map((tech) => <Tag key={tech}>{tech}</Tag>)}
                    </div>
                </motion.div>

                {/* Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="pt-10 border-t border-black/5"
                >
                    <div className="flex flex-wrap gap-4 items-center justify-between">
                        <div>
                            <div className="text-xs uppercase tracking-widest font-semibold text-[#1A1A1A]/30 mb-3">
                                Project Links
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {p.links.live ? (
                                    <Button as="a" href={p.links.live} target="_blank" rel="noreferrer">
                                        Live Site <ArrowUpRight size={13} />
                                    </Button>
                                ) : (
                                    <span className="inline-flex items-center px-4 py-2.5 text-sm font-medium text-[#1A1A1A]/30 border border-dashed border-black/10 rounded-sm">
                                        Live site coming soon
                                    </span>
                                )}
                                {p.links.github && (
                                    <Button variant="outline" as="a" href={p.links.github} target="_blank" rel="noreferrer">
                                        GitHub <ArrowUpRight size={13} />
                                    </Button>
                                )}
                            </div>
                        </div>
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="text-xs text-[#1A1A1A]/30 hover:text-[#0F4C5C] font-medium transition-colors cursor-pointer"
                        >
                            ↑ Back to top
                        </button>
                    </div>
                </motion.div>

            </Container>
        </section>
    )
}

export default CaseStudy