import { motion, useSpring } from 'framer-motion'
import { useScrollProgress } from '../../hooks/useScrollProgress'

function ScrollProgress() {
    const progress = useScrollProgress()
    const smoothed = useSpring(progress, { stiffness: 200, damping: 30 })

    return (
        <div className="fixed top-0 left-0 right-0 z-[60] h-[2px] bg-transparent pointer-events-none">
            <motion.div
                className="h-full bg-[#E36414] origin-left"
                style={{ scaleX: smoothed.get ? undefined : progress / 100 }}
                animate={{ scaleX: progress / 100 }}
                transition={{ duration: 0 }}
            />
        </div>
    )
}

export default ScrollProgress