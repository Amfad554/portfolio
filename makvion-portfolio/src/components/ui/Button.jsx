import { motion } from 'framer-motion'

/**
 * Button — two variants used site-wide.
 * 'primary'  — filled teal (main CTAs)
 * 'outline'  — bordered teal (secondary actions)
 *
 * Pass `as="a"` + href to render as a link.
 */
function Button({
    children,
    variant = 'primary',
    as: Tag = 'button',
    className = '',
    ...props
}) {
    const base = `
    inline-flex items-center gap-2 px-5 py-2.5
    text-sm font-medium tracking-wide rounded-sm
    transition-all duration-200 cursor-pointer
  `

    const variants = {
        primary: `
      bg-[#0F4C5C] text-[#F5F7F6]
      hover:bg-[#0F4C5C]/85
    `,
        outline: `
      border border-[#0F4C5C] text-[#0F4C5C] bg-transparent
      hover:bg-[#0F4C5C] hover:text-[#F5F7F6]
    `,
    }

    return (
        <motion.div
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex"
        >
            <Tag className={`${base} ${variants[variant]} ${className}`} {...props}>
                {children}
            </Tag>
        </motion.div>
    )
}

export default Button