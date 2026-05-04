/**
 * Container — the grid foundation for every section.
 * Max-width 1200px, responsive horizontal padding.
 * Use `narrow` prop for text-heavy sections (case study, etc.)
 */
function Container({ children, narrow = false, className = '' }) {
    return (
        <div
            className={`
        mx-auto w-full px-6 md:px-10 lg:px-16
        ${narrow ? 'max-w-3xl' : 'max-w-[1200px]'}
        ${className}
        `}
        >
            {children}
        </div>
    )
}

export default Container