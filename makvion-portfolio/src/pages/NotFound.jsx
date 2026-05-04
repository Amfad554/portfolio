import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import Button from '../components/ui/Button'

function NotFound() {
    return (
        <div className="min-h-screen bg-[#F5F7F6] flex items-center justify-center px-6">
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="text-center max-w-md"
            >
                {/* Big 404 */}
                <div className="text-[8rem] font-bold leading-none text-[#0F4C5C]/8 select-none mb-4">
                    404
                </div>

                {/* Logomark */}
                <div className="flex justify-center mb-8 -mt-8">
                    <span className="relative flex items-center justify-center w-12 h-12 bg-[#0F4C5C] rounded-md">
                        <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#E36414]" />
                        <span className="text-[#F5F7F6] text-lg font-bold">M</span>
                    </span>
                </div>

                <h1 className="text-2xl font-bold text-[#1A1A1A] mb-3 tracking-tight">
                    Page not found
                </h1>
                <p className="text-sm text-[#1A1A1A]/45 leading-relaxed mb-10">
                    This route doesn't exist. Maybe it was moved, or you followed a broken link.
                </p>

                <Button
                    as="a"
                    href="/"
                >
                    <ArrowLeft size={14} />
                    Back to Portfolio
                </Button>
            </motion.div>
        </div>
    )
}

export default NotFound