"use client"

import { motion, useInView, type Variants } from "framer-motion"
import { useRef } from "react"

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

const steps = [
  {
    number: 1,
    title: "Download App",
    description: "Available on iOS & Android",
  },
  {
    number: 2,
    title: "Create Event",
    description: "Set your date and details",
  },
  {
    number: 3,
    title: "Invite Guests",
    description: "Send digital invites instantly",
  },
  {
    number: 4,
    title: "Manage & Track",
    description: "Monitor RSVPs in real-time",
  },
]

// Variants
const headingVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
}

const gridVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const stepVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
}

const numberVariants: Variants = {
  hidden: { scale: 0, rotate: -15 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: { duration: 0.55, ease: EASE },
  },
}

const connectorVariants: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.7, ease: EASE, delay: 0.5 },
  },
}

export function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })



  return (
    <section className="py-16 sm:py-20 lg:py-38 px-4 sm:px-6 md:px-10 lg:px-24" ref={ref} style={{
      background: "linear-gradient(98.96deg, #F9F9F9 0%, #EBF0FF 164.61%)",
    }}>
      <div className="mx-auto container">

        {/* Heading */}
        <motion.h2
          variants={headingVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-3xl sm:text-4xl font-semibold text-slate-900 text-center mb-12 sm:mb-16 lg:mb-20"
        >
          How It Works
        </motion.h2>

        {/* Steps Grid */}
        <div className="relative">
          {/* Connector line — desktop only */}
          <motion.div
            variants={connectorVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            style={{ originX: 0 }}
            className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-[2px] bg-gradient-to-r from-brand/20 via-brand/60 to-brand/20"
          />

          <motion.div
            variants={gridVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-2 gap-8 sm:gap-10 md:grid-cols-4 lg:gap-12"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={stepVariants}
                className="step-item flex flex-col items-center text-center"
              >
                {/* Number circle */}
                <motion.div
                  variants={numberVariants}
                  whileHover={{
                    scale: 1.12,
                    boxShadow: "0 12px 32px rgba(var(--color-brand-rgb, 99,102,241), 0.35)",
                  }}
                  transition={{ duration: 0.25 }}
                  className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-brand text-xl sm:text-2xl font-bold text-white shadow-xl shadow-brand/30 mb-4 sm:mb-6 relative z-10 cursor-default"
                >
                  {step.number}
                </motion.div>

                <h3 className="text-base sm:text-xl font-semibold text-slate-900 mb-1 sm:mb-2">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-500 font-medium leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  )
}
