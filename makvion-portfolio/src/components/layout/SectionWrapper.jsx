import { motion } from 'framer-motion'

/**
 * SectionWrapper — consistent vertical rhythm + fade-in-up animation
 * for every major section on the page.
 *
 * Props:
 *  id        — anchor ID for nav links
 *  className — extra classes (bg overrides, etc.)
 *  tight     — reduces vertical padding for compact sections
 */
function SectionWrapper({ id, children, className = '', tight = false }) {
    return (
        <motion.section
            id={id}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className={`
        ${tight ? 'py-16 md:py-20' : 'py-24 md:py-32'}
        ${className}
      `}
        >
            {children}
        </motion.section>
    )
}

export default SectionWrapper