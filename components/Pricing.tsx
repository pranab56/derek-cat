"use client"

import { Button } from "@/components/ui/button"
import { motion, useInView, type Variants } from "framer-motion"
import { Check } from "lucide-react"
import { useRef } from "react"

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

const plans = [
  {
    name: "Weekly",
    price: "0",
    features: ["1 Event per month", "50 Attendees", "Basic Support"],
    highlighted: false,
    color: "bg-white",
    textColor: "text-slate-900",
    checkColor: "text-brand",
  },
  {
    name: "Yearly",
    price: "49",
    features: ["Unlimited Events", "1,000 Attendees", "Priority Support", "Advanced Analytics"],
    highlighted: true,
    color: "bg-[#0b0e1f]",
    textColor: "text-white",
    checkColor: "text-white",
  },
  {
    name: "Monthly",
    price: "5.5",
    features: ["3 Event per month", "1,000 Attendees", "Priority Support", "Advanced Analytics"],
    highlighted: false,
    color: "bg-white",
    textColor: "text-slate-900",
    checkColor: "text-brand",
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

const subheadingVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE, delay: 0.15 },
  },
}

const gridVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.13,
      delayChildren: 0.3,
    },
  },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: EASE },
  },
}

const featureVariants: Variants = {
  hidden: { opacity: 0, x: -14 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: EASE, delay: 0.5 + i * 0.08 },
  }),
}

export function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section
      className="bg-background py-20 sm:py-24 lg:py-32 px-4 sm:px-6 md:px-10 lg:px-24"
      ref={ref}
    >
      <div className="mx-auto container">

        {/* Section Header */}
        <div className="mb-12 sm:mb-16 lg:mb-20 text-center">
          <motion.h2
            variants={headingVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-2xl font-semibold text-slate-900 md:text-4xl"
          >
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p
            variants={subheadingVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="mt-4 sm:mt-6 text-sm sm:text-base text-slate-800 font-medium"
          >
            Choose the plan that&apos;s right for your events. Save 20% with annual billing.
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3 lg:gap-12 items-stretch"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={!plan.highlighted ? { y: -12, transition: { duration: 0.3, ease: EASE } } : {}}
              className={`group relative rounded-xl p-6 sm:p-8 md:p-8 lg:p-10 shadow-xl transition-shadow duration-500 ${plan.color} ${plan.highlighted
                  ? "z-10 scale-100 md:scale-105"
                  : "shadow-slate-200/50 border border-slate-50"
                }`}
            >
              <div className="flex flex-col h-full">

                {/* Plan name */}
                <span className={`text-xl sm:text-2xl font-medium mb-3 sm:mb-4 ${plan.textColor}`}>
                  {plan.name}
                </span>

                {/* Price */}
                <div className="flex items-baseline gap-1 mb-7 sm:mb-10">
                  <motion.span
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.7 }}
                    transition={{ duration: 0.55, ease: EASE, delay: 0.4 + index * 0.13 }}
                    className={`text-5xl sm:text-6xl font-medium tracking-tighter ${plan.textColor}`}
                  >
                    ${plan.price}
                  </motion.span>
                  <span className={`text-base sm:text-lg font-medium opacity-60 ${plan.textColor}`}>
                    /mo
                  </span>
                </div>

                {/* Features list */}
                <ul className="space-y-4 sm:space-y-6 mb-8 sm:mb-12 flex-1">
                  {plan.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      custom={i}
                      variants={featureVariants}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                      className={`flex items-center gap-3 sm:gap-4 text-xs sm:text-sm font-medium ${plan.textColor}`}
                    >
                      <div className={`flex h-5 w-5 sm:h-6 sm:w-6 shrink-0 items-center justify-center rounded-full border-2 border-current opacity-40 ${plan.checkColor}`}>
                        <Check className="h-2.5 w-2.5 sm:h-3 sm:w-3 stroke-[4px]" />
                      </div>
                      <span className="opacity-80">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Button
                    className="w-full rounded-lg cursor-pointer py-5 sm:py-6 text-base sm:text-lg font-bold transition-all shadow-xl shadow-brand/20 bg-brand hover:bg-brand/90 text-white"
                  >
                    Get Started
                  </Button>
                </motion.div>

              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
