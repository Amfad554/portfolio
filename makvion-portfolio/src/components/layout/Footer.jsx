import Container from './Container'

function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className="border-t border-black/6 bg-[#F5F7F6] py-8">
            <Container>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

                    {/* Brand */}
                    <div className="flex items-center gap-2">
                        <span className="relative flex items-center justify-center w-6 h-6 bg-[#0F4C5C] rounded-sm">
                            <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-[#E36414]" />
                            <span className="text-[#F5F7F6] text-[9px] font-bold">M</span>
                        </span>
                        <span className="text-sm font-semibold text-[#1A1A1A]">
                            Makvion<span className="text-[#E36414]">.</span>
                        </span>
                    </div>

                    {/* Copyright */}
                    <p className="text-xs text-[#1A1A1A]/30 font-medium">
                        © {year} Makvion Tech. Designed & built from scratch.
                    </p>

                    {/* Stack note */}
                    <p className="text-xs text-[#1A1A1A]/25 font-medium">
                        React · Tailwind · Framer Motion
                    </p>

                </div>
            </Container>
        </footer>
    )
}

export default Footer