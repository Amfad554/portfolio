/**
 * SectionLabel — the small eyebrow text above every section heading.
 * e.g. "Featured Work", "Technical Skills"
 * Keeps visual language consistent across sections.
 */
function SectionLabel({ children }) {
    return (
        <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-5 h-px bg-[#E36414]" />
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#E36414]">
                {children}
            </span>
        </div>
    )
}

export default SectionLabel