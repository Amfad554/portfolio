import { motion } from 'framer-motion'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'
import Container from '../layout/Container'
import SectionLabel from '../ui/SectionLabel'
import Tag from '../ui/Tag'
import Button from '../ui/Button'
import { featuredProject } from '../../data/projects'

const p = featuredProject

function FeaturedProject() {
    return (
        <section id="work" className="py-24 md:py-32 bg-[#F5F7F6]">
            <Container>

                {/* Header */}
                <div className="mb-16">
                    <SectionLabel>Featured Work</SectionLabel>
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] tracking-tight leading-tight max-w-lg">
                            A platform built for<br />
                            <span className="text-[#0F4C5C]">how students actually live.</span>
                        </h2>
                        <p className="text-sm text-[#1A1A1A]/40 max-w-xs leading-relaxed">
                            Not a demo. Not a tutorial project. A real product solving a real problem.
                        </p>
                    </div>
                </div>

                {/* Main card */}
                <div className="rounded-2xl border border-black/6 overflow-hidden bg-white shadow-sm">

                    {/* Top bar */}
                    <div className="flex items-center justify-between px-8 py-4 border-b border-black/5 bg-[#0F4C5C]">
                        <div className="flex items-center gap-3">
                            <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                            <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                            <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                            <span className="ml-3 text-white/60 text-xs font-mono">workdone.app</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                            <span className="text-[10px] font-semibold uppercase tracking-widest text-white/50">
                                In Development
                            </span>
                        </div>
                    </div>

                    {/* ── PROJECT SCREENSHOT PLACEHOLDER ── */}
                    {/* WorkDone screenshot */}
                    <div className="w-full h-56 border-b border-black/5 overflow-hidden bg-[#0F4C5C]/4">
                        <img
                            src="/workdone-preview.png"
                            alt="WorkDone app screenshot"
                            className="w-full h-full object-cover object-top"
                        />
                    </div>

                    {/* Body */}
                    <div className="grid lg:grid-cols-[1fr_380px]">

                        {/* LEFT */}
                        <div className="p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-black/5">

                            <div className="mb-6">
                                <h3 className="text-4xl font-bold text-[#1A1A1A] tracking-tight mb-1">
                                    {p.name}
                                </h3>
                                <p className="text-[#0F4C5C] font-medium text-sm">{p.tagline}</p>
                            </div>

                            <p className="text-[#1A1A1A]/60 leading-relaxed mb-10 text-sm sm:text-base">
                                {p.shortDesc}
                            </p>

                            {/* Problem / Solution */}
                            <div className="space-y-6 mb-10">
                                {[
                                    { heading: 'The Problem', body: p.problem },
                                    { heading: 'The Solution', body: p.solution },
                                ].map(({ heading, body }) => (
                                    <div key={heading} className="flex gap-4">
                                        <span className="mt-1 flex-shrink-0 w-0.5 rounded-full self-stretch bg-[#E36414]/40" />
                                        <div>
                                            <div className="text-xs font-semibold uppercase tracking-widest text-[#E36414] mb-1.5">
                                                {heading}
                                            </div>
                                            <p className="text-sm text-[#1A1A1A]/55 leading-relaxed">{body}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Stack */}
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
                                    <Button variant="outline" as="a" href={p.links.github} target="_blank" rel="noreferrer">
                                        GitHub <ArrowUpRight size={14} />
                                    </Button>
                                )}
                            </div>

                        </div>

                        {/* RIGHT — Systems */}
                        <div className="p-8 md:p-10 bg-[#F5F7F6]/60">

                            <div className="mb-6">
                                <span className="text-[10px] uppercase tracking-[0.18em] font-semibold text-[#1A1A1A]/35">
                                    Core Systems
                                </span>
                            </div>

                            <div className="space-y-3">
                                {p.systems.map(({ name, desc }, i) => (
                                    <motion.div
                                        key={name}
                                        initial={{ opacity: 0, x: 12 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: i * 0.07 }}
                                        className="flex gap-3 bg-white rounded-lg p-4 border border-black/5"
                                    >
                                        <CheckCircle2 size={14} className="text-[#0F4C5C] flex-shrink-0 mt-0.5" />
                                        <div>
                                            <div className="text-xs font-semibold text-[#1A1A1A] mb-0.5">{name}</div>
                                            <div className="text-[11px] text-[#1A1A1A]/45 leading-relaxed">{desc}</div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Stack split */}
                            <div className="mt-8 pt-6 border-t border-black/5">
                                <div className="text-[10px] uppercase tracking-[0.18em] font-semibold text-[#1A1A1A]/35 mb-4">
                                    Architecture
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    {[
                                        { label: 'Frontend', items: p.architecture.frontend.slice(0, 3) },
                                        { label: 'Backend', items: p.architecture.backend.slice(0, 3) },
                                    ].map(({ label, items }) => (
                                        <div key={label} className="bg-white rounded-lg p-4 border border-black/5">
                                            <div className="text-[10px] font-semibold text-[#0F4C5C] uppercase tracking-widest mb-3">
                                                {label}
                                            </div>
                                            <ul className="space-y-1.5">
                                                {items.map((item) => (
                                                    <li key={item} className="text-[11px] text-[#1A1A1A]/50 flex items-center gap-1.5">
                                                        <span className="w-1 h-1 rounded-full bg-[#E36414]/50 flex-shrink-0" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </Container>
        </section>
    )
}

export default FeaturedProject