/**
 * Tag — used for tech stack labels on project cards.
 * Variants: 'default' (subtle) | 'accent' (teal fill)
 */
function Tag({ children, variant = 'default' }) {
    const styles = {
        default: 'bg-[#0F4C5C]/8 text-[#0F4C5C] border border-[#0F4C5C]/15',
        accent: 'bg-[#E36414]/10 text-[#E36414] border border-[#E36414]/20',
    }

    return (
        <span className={`
      inline-block px-2.5 py-1 rounded-sm text-xs font-medium tracking-wide
      ${styles[variant]}
    `}>
            {children}
        </span>
    )
}

export default Tag