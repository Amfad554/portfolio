import { motion } from 'framer-motion'
import { ArrowDownRight } from 'lucide-react'
import Container from '../layout/Container'
import Button from '../ui/Button'

const container = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
}

const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#F5F7F6]">

            {/* Background geometry */}
            <div aria-hidden className="pointer-events-none absolute inset-0">
                <div className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full border border-[#0F4C5C]/6" />
                <div className="absolute -top-20 -right-20 w-[360px] h-[360px] rounded-full border border-[#0F4C5C]/5" />
                <div className="absolute bottom-24 left-10 w-1.5 h-1.5 rounded-full bg-[#E36414]/40" />
                <div className="absolute bottom-20 left-16 w-1 h-1 rounded-full bg-[#E36414]/25" />
                <div className="absolute bottom-28 left-20 w-1 h-1 rounded-full bg-[#0F4C5C]/20" />
                <div className="absolute top-[38%] left-0 w-[18%] h-px bg-gradient-to-r from-transparent via-[#0F4C5C]/12 to-transparent" />
            </div>

            <Container>
                <div className="grid lg:grid-cols-[1fr_340px] gap-16 lg:gap-24 items-center pt-28 pb-16">

                    {/* LEFT: Main copy */}
                    <motion.div variants={container} initial="hidden" animate="show">

                        {/* Availability badge */}
                        <motion.div variants={item} className="mb-8">
                            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-black/8 rounded-full text-xs font-medium text-[#1A1A1A]/60 shadow-sm">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                Available for new projects
                            </span>
                        </motion.div>

                        {/* Headline */}
                        <motion.h1
                            variants={item}
                            className="text-[2.6rem] sm:text-5xl lg:text-[3.4rem] font-bold text-[#1A1A1A] leading-[1.1] tracking-tight mb-6"
                        >
                            Building products
                            <br />
                            <span className="text-[#0F4C5C]">end-to-end.</span>
                            <br />
                            <span className="text-[#1A1A1A]/35 font-light">From schema to UI.</span>
                        </motion.h1>

                        {/* Sub-copy */}
                        <motion.p
                            variants={item}
                            className="text-base sm:text-lg text-[#1A1A1A]/55 leading-relaxed max-w-xl mb-10"
                        >
                            Full-stack developer specializing in the{' '}
                            <span className="text-[#0F4C5C] font-medium">PERN stack</span> —
                            building production-ready web applications with clean architecture,
                            real database design, and interfaces that feel intentional.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div variants={item} className="flex flex-wrap items-center gap-4 mb-14">
                            <Button
                                as="a"
                                href="#work"
                                onClick={(e) => {
                                    e.preventDefault()
                                    document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' })
                                }}
                            >
                                View My Work
                                <ArrowDownRight size={15} />
                            </Button>
                            <Button variant="outline" as="a" href="mailto:hello@makvion.dev">
                                Get In Touch
                            </Button>
                        </motion.div>

                        {/* Social links */}
                        <motion.div variants={item} className="flex items-center gap-5">
                            <a
                                href="https://github.com/makvion"
                                target="_blank"
                                rel="noreferrer"
                                className="text-xs text-[#1A1A1A]/40 hover:text-[#0F4C5C] transition-colors font-medium"
                            >
                                GitHub
                            </a>
                            <span className="w-px h-3 bg-[#1A1A1A]/15" />
                            <a
                                href="https://linkedin.com/in/makvion"
                                target="_blank"
                                rel="noreferrer"
                                className="text-xs text-[#1A1A1A]/40 hover:text-[#0F4C5C] transition-colors font-medium"
                            >
                                LinkedIn
                            </a>
                            <span className="w-px h-3 bg-[#1A1A1A]/15" />
                            <span className="text-xs text-[#1A1A1A]/30 font-medium">Lagos, NG</span>
                        </motion.div>

                    </motion.div>

                    {/* RIGHT: Stats card */}
                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
                        className="hidden lg:block"
                    >
                        <div className="bg-white border border-black/6 rounded-xl p-7 shadow-sm space-y-6">

                            <div className="flex items-center justify-between">
                                <span className="text-xs font-semibold uppercase tracking-widest text-[#1A1A1A]/35">
                                    Stack
                                </span>
                                <span className="w-5 h-5 rounded-sm bg-[#0F4C5C] flex items-center justify-center">
                                    <span className="text-[#F5F7F6] text-[9px] font-bold">M</span>
                                </span>
                            </div>

                            {[
                                { layer: 'Database', tech: 'PostgreSQL', bar: 88 },
                                { layer: 'Runtime', tech: 'Node.js', bar: 92 },
                                { layer: 'Framework', tech: 'Express', bar: 90 },
                                { layer: 'Frontend', tech: 'React', bar: 93 },
                            ].map(({ layer, tech, bar }) => (
                                <div key={layer}>
                                    <div className="flex justify-between text-xs mb-1.5">
                                        <span className="text-[#1A1A1A]/40 font-medium">{layer}</span>
                                        <span className="text-[#0F4C5C] font-semibold">{tech}</span>
                                    </div>
                                    <div className="h-1 bg-[#0F4C5C]/8 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${bar}%` }}
                                            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.7 }}
                                            className="h-full bg-[#0F4C5C] rounded-full"
                                        />
                                    </div>
                                </div>
                            ))}

                            <div className="border-t border-black/5 pt-5 grid grid-cols-2 gap-4">
                                {[
                                    { value: '2+', label: 'Years building' },
                                    { value: 'PERN', label: 'Primary stack' },
                                    { value: '100%', label: 'Full-stack' },
                                    { value: 'Open', label: 'To opportunities' },
                                ].map(({ value, label }) => (
                                    <div key={label}>
                                        <div className="text-lg font-bold text-[#0F4C5C]">{value}</div>
                                        <div className="text-[11px] text-[#1A1A1A]/40 font-medium">{label}</div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </motion.div>

                </div>
            </Container>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
            >
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#1A1A1A]/25 font-medium">Scroll</span>
                <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
                    className="w-px h-6 bg-gradient-to-b from-[#0F4C5C]/30 to-transparent"
                />
            </motion.div>

        </section>
    )
}

export default Hero