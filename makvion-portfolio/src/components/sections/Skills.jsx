import { motion } from 'framer-motion'
import Container from '../layout/Container'
import SectionLabel from '../ui/SectionLabel'

const skillGroups = [
    {
        category: 'Frontend',
        color: '#0F4C5C',
        skills: [
            { name: 'React', level: 93 },
            { name: 'Tailwind CSS', level: 90 },
            { name: 'JavaScript', level: 91 },
            { name: 'HTML / CSS', level: 95 },
            { name: 'Framer Motion', level: 78 },
            { name: 'Vite', level: 85 },
        ],
    },
    {
        category: 'Backend',
        color: '#0F4C5C',
        skills: [
            { name: 'Node.js', level: 92 },
            { name: 'Express', level: 90 },
            { name: 'REST API', level: 91 },
            { name: 'JWT Auth', level: 87 },
            { name: 'Middleware', level: 85 },
            { name: 'bcrypt', level: 82 },
        ],
    },
    {
        category: 'Database',
        color: '#E36414',
        skills: [
            { name: 'PostgreSQL', level: 88 },
            { name: 'SQL', level: 87 },
            { name: 'Schema Design', level: 84 },
            { name: 'Joins / CTE', level: 80 },
        ],
    },
    {
        category: 'DevOps & Tools',
        color: '#E36414',
        skills: [
            { name: 'Git / GitHub', level: 90 },
            { name: 'Vercel', level: 88 },
            { name: 'Render', level: 82 },
            { name: 'VS Code', level: 95 },
            { name: 'Postman', level: 85 },
        ],
    },
]

function SkillBar({ name, level, color, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
        >
            <div className="flex justify-between items-center mb-1.5">
                <span className="text-xs font-medium text-[#1A1A1A]/70">{name}</span>
                <span className="text-[10px] font-semibold text-[#1A1A1A]/30">{level}%</span>
            </div>
            <div className="h-1 bg-black/5 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.75, ease: 'easeOut', delay: 0.15 + index * 0.05 }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: color }}
                />
            </div>
        </motion.div>
    )
}

function Skills() {
    return (
        <section id="skills" className="py-24 md:py-32 bg-white">
            <Container>

                <div className="mb-14">
                    <SectionLabel>Technical Skills</SectionLabel>
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] tracking-tight leading-tight">
                        Built across the{' '}
                        <span className="text-[#0F4C5C]">full stack.</span>
                    </h2>
                </div>

                {/* 2×2 grid of skill groups */}
                <div className="grid sm:grid-cols-2 gap-8 lg:gap-10">
                    {skillGroups.map((group, gi) => (
                        <motion.div
                            key={group.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ duration: 0.5, delay: gi * 0.1 }}
                            className="bg-[#F5F7F6] rounded-xl p-7 border border-black/5"
                        >
                            {/* Group header */}
                            <div className="flex items-center gap-2.5 mb-7">
                                <span
                                    className="w-2 h-2 rounded-full"
                                    style={{ backgroundColor: group.color }}
                                />
                                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#1A1A1A]/50">
                                    {group.category}
                                </span>
                            </div>

                            {/* Skill bars */}
                            <div className="space-y-4">
                                {group.skills.map((skill, si) => (
                                    <SkillBar
                                        key={skill.name}
                                        name={skill.name}
                                        level={skill.level}
                                        color={group.color}
                                        index={si}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom note */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-xs text-[#1A1A1A]/30 text-center mt-10 font-medium"
                >
                    Percentages reflect practical, production-level confidence — not self-inflation.
                </motion.p>

            </Container>
        </section>
    )
}

export default Skills