import { motion } from 'framer-motion'
import { ArrowUpRight, GitBranch, Shield, Database, Layers } from 'lucide-react'
import Container from '../layout/Container'
import SectionLabel from '../ui/SectionLabel'
import Tag from '../ui/Tag'
import Button from '../ui/Button'
import { featuredProject } from '../../data/projects'

const p = featuredProject

/* Architecture pillars shown in the visual panel */
const pillars = [
    {
        icon: Shield,
        title: 'Auth System',
        desc: 'JWT + role-based access for clients and freelancers',
    },
    {
        icon: Database,
        title: 'Database',
        desc: 'Normalized PostgreSQL schema with relational integrity',
    },
    {
        icon: GitBranch,
        title: 'API Layer',
        desc: 'Protected REST endpoints with middleware validation',
    },
    {
        icon: Layers,
        title: 'Frontend',
        desc: 'React SPA with route guards and dynamic dashboards',
    },
]

function FeaturedProject() {
    return (
        <section id="work" className="py-24 md:py-32 bg-[#F5F7F6]">
            <Container>

                {/* ── Section header ── */}
                <div className="mb-16">
                    <SectionLabel>Featured Work</SectionLabel>
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] tracking-tight max-w-lg leading-tight">
                        The project that shows<br />
                        <span className="text-[#0F4C5C]">what I actually build.</span>
                    </h2>
                </div>

                {/* ── Main showcase card ── */}
                <div className="rounded-2xl border border-black/6 overflow-hidden bg-white shadow-sm">

                    {/* Top bar — project identity */}
                    <div className="flex items-center justify-between px-8 py-5 border-b border-black/5 bg-[#0F4C5C]">
                        <div className="flex items-center gap-3">
                            {/* Faux window dots */}
                            <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                            <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                            <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                            <span className="ml-3 text-white/70 text-xs font-mono">workdone.app</span>
                        </div>
                        <span className="text-xs font-semibold uppercase tracking-widest text-white/50">
                            {p.label}
                        </span>
                    </div>

                    {/* Body — two columns on desktop */}
                    <div className="grid lg:grid-cols-[1fr_420px]">

                        {/* LEFT: Copy */}
                        <div className="p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-black/5">

                            <div className="mb-6">
                                <h3 className="text-4xl font-bold text-[#1A1A1A] tracking-tight mb-2">
                                    {p.name}
                                </h3>
                                <p className="text-[#0F4C5C] font-medium text-sm">{p.tagline}</p>
                            </div>

                            <p className="text-[#1A1A1A]/60 leading-relaxed mb-8 text-sm sm:text-base">
                                {p.description}
                            </p>

                            {/* Problem / Solution */}
                            <div className="space-y-5 mb-10">
                                {[
                                    { heading: 'The Problem', body: p.problem },
                                    { heading: 'The Solution', body: p.solution },
                                ].map(({ heading, body }) => (
                                    <div key={heading} className="flex gap-4">
                                        <span className="mt-1 flex-shrink-0 w-1 h-full min-h-[2.5rem] rounded-full bg-[#E36414]/40" />
                                        <div>
                                            <div className="text-xs font-semibold uppercase tracking-widest text-[#E36414] mb-1">
                                                {heading}
                                            </div>
                                            <p className="text-sm text-[#1A1A1A]/55 leading-relaxed">{body}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Tech stack tags */}
                            <div className="flex flex-wrap gap-2 mb-10">
                                {p.stack.map((tech) => (
                                    <Tag key={tech}>{tech}</Tag>
                                ))}
                            </div>

                            {/* CTAs */}
                            <div className="flex flex-wrap gap-3">
                                <Button
                                    as="a"
                                    href="#workdone-case-study"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        document.querySelector('#workdone-case-study')
                                            ?.scrollIntoView({ behavior: 'smooth' })
                                    }}
                                >
                                    Full Case Study
                                    <ArrowUpRight size={14} />
                                </Button>

                                {p.links.github && (
                                    <Button
                                        variant="outline"
                                        as="a"
                                        href={p.links.github}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        GitHub
                                        <ArrowUpRight size={14} />
                                    </Button>
                                )}
                            </div>

                        </div>

                        {/* RIGHT: Architecture visual */}
                        <div className="p-8 md:p-10 bg-[#F5F7F6]/60">

                            {/* Mini header */}
                            <div className="mb-7">
                                <span className="text-[10px] uppercase tracking-[0.18em] font-semibold text-[#1A1A1A]/35">
                                    Technical Architecture
                                </span>
                            </div>

                            {/* Stack layers — frontend to DB */}
                            <div className="mb-8 space-y-2">
                                {[
                                    { label: 'React + Vite', role: 'Client', fill: 93 },
                                    { label: 'Express API', role: 'Server', fill: 90 },
                                    { label: 'PostgreSQL', role: 'Database', fill: 88 },
                                ].map(({ label, role, fill }, i) => (
                                    <motion.div
                                        key={label}
                                        initial={{ opacity: 0, x: 16 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.45, delay: i * 0.1 }}
                                        className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 border border-black/5"
                                    >
                                        <div className="flex-1">
                                            <div className="flex justify-between text-xs mb-1.5">
                                                <span className="font-semibold text-[#1A1A1A]">{label}</span>
                                                <span className="text-[#1A1A1A]/35 font-medium">{role}</span>
                                            </div>
                                            <div className="h-1 bg-[#0F4C5C]/8 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${fill}%` }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 + i * 0.1 }}
                                                    className="h-full bg-[#0F4C5C] rounded-full"
                                                />
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Pillars grid */}
                            <div className="grid grid-cols-2 gap-3">
                                {pillars.map(({ icon: Icon, title, desc }, i) => (
                                    <motion.div
                                        key={title}
                                        initial={{ opacity: 0, y: 12 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                                        className="bg-white rounded-lg p-4 border border-black/5"
                                    >
                                        <div className="w-7 h-7 rounded-md bg-[#0F4C5C]/8 flex items-center justify-center mb-3">
                                            <Icon size={14} className="text-[#0F4C5C]" />
                                        </div>
                                        <div className="text-xs font-semibold text-[#1A1A1A] mb-1">{title}</div>
                                        <div className="text-[11px] text-[#1A1A1A]/45 leading-relaxed">{desc}</div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Key highlights */}
                            <div className="mt-6 pt-6 border-t border-black/5">
                                <div className="text-[10px] uppercase tracking-[0.18em] font-semibold text-[#1A1A1A]/35 mb-4">
                                    Key Highlights
                                </div>
                                <ul className="space-y-2">
                                    {p.highlights.map((h) => (
                                        <li key={h} className="flex items-start gap-2.5 text-xs text-[#1A1A1A]/55">
                                            <span className="mt-1.5 flex-shrink-0 w-1 h-1 rounded-full bg-[#E36414]" />
                                            {h}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>

            </Container>
        </section>
    )
}

export default FeaturedProject