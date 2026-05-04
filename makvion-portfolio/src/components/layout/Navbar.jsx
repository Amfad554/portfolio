import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Container from './Container'

const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
]

function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const handleNav = (href) => {
        setMobileOpen(false)
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <>
            <motion.header
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${scrolled
                        ? 'py-3 bg-[#F5F7F6]/90 backdrop-blur-md shadow-sm border-b border-black/5'
                        : 'py-5 bg-transparent'
                    }
        `}
            >
                <Container>
                    <nav className="flex items-center justify-between">

                        {/* Brand */}
                        <a
                            href="#"
                            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
                            className="flex items-center gap-2 group"
                        >
                            <span className="relative flex items-center justify-center w-7 h-7 bg-[#0F4C5C] rounded-sm">
                                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#E36414]" />
                                <span className="text-[#F5F7F6] text-xs font-bold tracking-tight">M</span>
                            </span>
                            <span className="text-[#1A1A1A] font-semibold text-sm tracking-wide group-hover:text-[#0F4C5C] transition-colors">
                                Makvion<span className="text-[#E36414]">.</span>
                            </span>
                        </a>

                        {/* Desktop links */}
                        <ul className="hidden md:flex items-center gap-8">
                            {navLinks.map(({ label, href }) => (
                                <li key={label}>
                                    <button
                                        onClick={() => handleNav(href)}
                                        className="text-sm text-[#1A1A1A]/60 hover:text-[#0F4C5C] font-medium tracking-wide transition-colors duration-200 cursor-pointer"
                                    >
                                        {label}
                                    </button>
                                </li>
                            ))}
                        </ul>

                        {/* CTA — desktop */}
                        <a
                            href="mailto:hello@makvion.dev"
                            className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-[#0F4C5C] text-[#F5F7F6] text-sm font-medium rounded-sm hover:bg-[#0F4C5C]/85 transition-colors duration-200"
                        >
                            Let's Talk
                        </a>

                        {/* Mobile hamburger */}
                        <button
                            onClick={() => setMobileOpen((v) => !v)}
                            className="md:hidden text-[#1A1A1A] p-1"
                            aria-label="Toggle menu"
                        >
                            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>

                    </nav>
                </Container >
            </motion.header >

            {/* Mobile menu drawer */}
            <AnimatePresence AnimatePresence >
                {mobileOpen && (
                    <motion.div
                        key="mobile-menu"
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                        className="fixed top-[56px] left-0 right-0 z-40 bg-[#F5F7F6] border-b border-black/10 px-6 py-6 flex flex-col gap-5 md:hidden"
                    >
                        {navLinks.map(({ label, href }) => (
                            <button
                                key={label}
                                onClick={() => handleNav(href)}
                                className="text-left text-base font-medium text-[#1A1A1A] hover:text-[#0F4C5C] transition-colors cursor-pointer"
                            >
                                {label}
                            </button>
                        ))}
                        <a
                            href="mailto:hello@makvion.dev"
                            className="mt-2 inline-flex justify-center px-4 py-2.5 bg-[#0F4C5C] text-[#F5F7F6] text-sm font-medium rounded-sm"
                        >
                            Let's Talk
                        </a>
                    </motion.div>
                )
                }
            </AnimatePresence >
        </>
    )
}

export default Navbar