"use client"

import { motion, useInView, type Variants } from "framer-motion"
import { BarChart3, Calendar, Users, Wallet } from "lucide-react"
import { useRef } from "react"

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

const features = [
  {
    title: "Smart Scheduling",
    description: "Intelligent algorithms to find the perfect time for every stakeholder.",
    icon: Calendar,
    color: "bg-brand/10 text-brand",
  },
  {
    title: "Guest Management",
    description: "Manage RSVPs, dietary requirements, and seating charts in one place.",
    icon: Users,
    color: "bg-brand/10 text-brand",
  },
  {
    title: "Budget Tracking",
    description: "Keep your finances under control with automated expense tracking.",
    icon: Wallet,
    color: "bg-brand/10 text-brand",
  },
  {
    title: "Real-time Analytics",
    description: "Monitor event performance and engagement with live data dashboards.",
    icon: BarChart3,
    color: "bg-brand/10 text-brand",
  },
]

// Animation variants
const headingVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
}

const subheadingVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE, delay: 0.15 },
  },
}

const gridVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.25,
    },
  },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: EASE },
  },
}

const iconVariants: Variants = {
  rest: { scale: 1, rotate: 0 },
  hover: {
    scale: 1.15,
    rotate: [0, -8, 8, 0],
    transition: { duration: 0.4, ease: EASE },
  },
}

// Wrapper that triggers animation when in view
function AnimatedSection({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function Features() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-32  px-4 sm:px-6 md:px-10 lg:px-24">
      <div className="mx-auto container">

        {/* Section Header */}
        <AnimatedSection className="mb-10 sm:mb-12 lg:mb-16 text-center">
          <motion.h2
            variants={headingVariants}
            className="text-2xl font-semibold text-slate-900 md:text-4xl"
          >
            What This App Does
          </motion.h2>
          <motion.p
            variants={subheadingVariants}
            className="mx-auto mt-4 sm:mt-6 max-w-2xl text-sm sm:text-base text-dark font-normal leading-relaxed"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </motion.p>
        </AnimatedSection>

        {/* Feature Cards Grid */}
        <AnimatedSection>
          <motion.div
            variants={gridVariants}
            className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:gap-12"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                initial="rest"
                animate="rest"
                className="feature-card group flex items-start gap-4 sm:gap-6 rounded-xl border border-slate-100 bg-white p-4 sm:p-5 shadow-sm transition-shadow hover:shadow-xl hover:shadow-brand/5 cursor-default"
              >
                <motion.div
                  variants={iconVariants}
                  className={`flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl ${feature.color}`}
                >
                  <feature.icon className="h-6 w-6 sm:h-7 sm:w-7" />
                </motion.div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-900">{feature.title}</h3>
                  <p className="mt-1.5 sm:mt-2 text-sm sm:text-base text-slate-500 font-normal leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatedSection>

      </div>
    </section>
  )
}
