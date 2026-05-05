import { motion } from 'framer-motion'
import { ArrowUpRight, Mail, MapPin } from 'lucide-react'
import Container from '../layout/Container'
import SectionLabel from '../ui/SectionLabel'
import Button from '../ui/Button'

const links = [
    {
        icon: Mail,
        label: 'Email',
        value: 'hello@makvion.dev',
        href: 'mailto:hello@makvion.dev',
    },
    {
        icon: ArrowUpRight,
        label: 'GitHub',
        value: 'github.com/makvion',
        href: 'https://github.com/makvion',
    },
    {
        icon: ArrowUpRight,
        label: 'LinkedIn',
        value: 'linkedin.com/in/makvion',
        href: 'https://linkedin.com/in/makvion',
    },
]

function Contact() {
    return (
        <section id="contact" className="py-24 md:py-32 bg-[#F5F7F6]">
            <Container>

                <div className="grid lg:grid-cols-[1fr_400px] gap-16 items-start">

                    {/* LEFT: Copy */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <SectionLabel>Contact</SectionLabel>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight leading-[1.1] mb-6">
                            Let's build
                            <br />
                            <span className="text-[#0F4C5C]">something real.</span>
                        </h2>

                        <p className="text-base text-[#1A1A1A]/50 leading-relaxed max-w-md mb-10">
                            I'm open to full-time roles, freelance contracts, and interesting
                            collaborations. If you're building something and need a developer
                            who thinks about the full picture — reach out.
                        </p>

                        <Button as="a" href="mailto:hello@makvion.dev">
                            Send a Message
                            <ArrowUpRight size={14} />
                        </Button>

                        <div className="flex items-center gap-2 mt-8 text-xs text-[#1A1A1A]/35 font-medium">
                            <MapPin size={12} />
                            Based in Lagos, Nigeria — open to remote worldwide
                        </div>
                    </motion.div>

                    {/* RIGHT: Contact cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                        className="space-y-3"
                    >
                        {links.map(({ icon: Icon, label, value, href }, i) => (
                            <motion.a
                                key={label}
                                href={href}
                                target={href.startsWith('mailto') ? undefined : '_blank'}
                                rel="noreferrer"
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                                whileHover={{ x: 4 }}
                                className="flex items-center justify-between p-5 bg-white border border-black/6 rounded-xl group hover:border-[#0F4C5C]/25 hover:shadow-sm transition-all duration-200"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-9 h-9 rounded-lg bg-[#0F4C5C]/6 flex items-center justify-center group-hover:bg-[#0F4C5C] transition-colors duration-200">
                                        <Icon size={15} className="text-[#0F4C5C] group-hover:text-white transition-colors duration-200" />
                                    </div>
                                    <div>
                                        <div className="text-[10px] uppercase tracking-widest font-semibold text-[#1A1A1A]/30 mb-0.5">
                                            {label}
                                        </div>
                                        <div className="text-sm font-medium text-[#1A1A1A]">{value}</div>
                                    </div>
                                </div>
                                <ArrowUpRight size={14} className="text-[#1A1A1A]/20 group-hover:text-[#0F4C5C] transition-colors duration-200" />
                            </motion.a>
                        ))}

                        {/* Availability card */}
                        <div className="mt-2 p-5 bg-[#0F4C5C] rounded-xl">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                <span className="text-xs font-semibold text-white/70 uppercase tracking-widest">
                                    Availability
                                </span>
                            </div>
                            <p className="text-sm text-white/80 leading-relaxed">
                                Currently available for new projects.
                                Typical response time is{' '}
                                <span className="text-white font-semibold">within 24 hours.</span>
                            </p>
                        </div>

                    </motion.div>
                </div>
            </Container>
        </section>
    )
}

export default Contact