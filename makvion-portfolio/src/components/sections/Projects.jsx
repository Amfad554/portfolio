import { motion } from 'framer-motion'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import Container from '../layout/Container'
import SectionLabel from '../ui/SectionLabel'
import Tag from '../ui/Tag'
import { secondaryProjects } from '../../data/projects'

function ProjectCard({ project, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
            className="group bg-white border border-black/6 rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-300"
        >
            {/* Card top bar */}
            <div
                className="h-1.5 w-full"
                style={{ backgroundColor: project.accent }}
            />

            <div className="p-7">
                {/* Header */}
                <div className="flex items-start justify-between mb-5">
                    <div>
                        <span className="text-[10px] uppercase tracking-[0.16em] font-semibold text-[#1A1A1A]/35 block mb-1.5">
                            {project.role}
                        </span>
                        <h3 className="text-xl font-bold text-[#1A1A1A] tracking-tight">
                            {project.name}
                        </h3>
                    </div>

                    {/* External link icon — appears on hover */}
                    {project.links.live && (
                        <a
                            href={project.links.live}
                            target="_blank"
                            rel="noreferrer"
                            className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-8 h-8 rounded-full border border-black/10 flex items-center justify-center hover:border-[#0F4C5C] hover:text-[#0F4C5C] text-[#1A1A1A]/40"
                            aria-label={`Visit ${project.name}`}
                        >
                            <ExternalLink size={13} />
                        </a>
                    )}
                </div>

                {/* Description */}
                <p className="text-sm text-[#1A1A1A]/55 leading-relaxed mb-6">
                    {project.description}
                </p>

                {/* Problem / Solution — compact */}
                <div className="space-y-3 mb-6">
                    {[
                        { label: 'Problem', body: project.problem },
                        { label: 'Solution', body: project.solution },
                    ].map(({ label, body }) => (
                        <div key={label} className="flex gap-3">
                            <span
                                className="mt-1 flex-shrink-0 w-0.5 rounded-full self-stretch"
                                style={{ backgroundColor: project.accent + '66' }}
                            />
                            <div>
                                <span className="text-[10px] font-semibold uppercase tracking-widest block mb-0.5"
                                    style={{ color: project.accent }}>
                                    {label}
                                </span>
                                <p className="text-xs text-[#1A1A1A]/50 leading-relaxed">{body}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stack tags */}
                <div className="flex flex-wrap gap-1.5 mb-7">
                    {project.stack.map((tech) => (
                        <Tag key={tech}>{tech}</Tag>
                    ))}
                </div>

                {/* Links row */}
                <div className="flex items-center gap-4 pt-5 border-t border-black/5">
                    {project.links.live && (
                        <a
                            href={project.links.live}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F4C5C] hover:text-[#E36414] transition-colors"
                        >
                            Live Site <ArrowUpRight size={12} />
                        </a>
                    )}
                    {project.links.github && (
                        <a
                            href={project.links.github}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1A1A1A]/40 hover:text-[#0F4C5C] transition-colors"
                        >
                            GitHub <ArrowUpRight size={12} />
                        </a>
                    )
                    }
                    {
                        !project.links.live && !project.links.github && (
                            <span className="text-xs text-[#1A1A1A]/25 font-medium">Coming soon</span>
                        )
                    }
                </div >
            </div >
        </motion.div >
    )
}

function Projects() {
    return (
        <section className="py-24 md:py-28 bg-[#F5F7F6]">
            <Container>

                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
                    <div>
                        <SectionLabel>More Work</SectionLabel>
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] tracking-tight leading-tight">
                            Other projects
                        </h2>
                    </div>
                    <p className="text-sm text-[#1A1A1A]/40 max-w-xs leading-relaxed">
                        More projects coming as I build. This portfolio is structured to scale.
                    </p>
                </div>

                {/* Project grid — scales as you add more to projects.js */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {secondaryProjects.map((project, i) => (
                        <ProjectCard key={project.id} project={project} index={i} />
                    ))}

                    {/* Placeholder card — remove when you have more projects */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: secondaryProjects.length * 0.1 }}
                        className="bg-white/50 border border-dashed border-black/10 rounded-xl p-7 flex flex-col items-center justify-center text-center min-h-[280px]"
                    >
                        <div className="w-10 h-10 rounded-full border-2 border-dashed border-[#0F4C5C]/20 flex items-center justify-center mb-4">
                            <span className="text-[#0F4C5C]/40 text-xl font-light">+</span>
                        </div>
                        <p className="text-sm font-medium text-[#1A1A1A]/30">Next project</p>
                        <p className="text-xs text-[#1A1A1A]/20 mt-1">In progress</p>
                    </motion.div>
                </div>

            </Container>
        </section>
    )
}

export default Projects