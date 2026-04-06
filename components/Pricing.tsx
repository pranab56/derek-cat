"use client"

import { Button } from "@/components/ui/button"
import { motion, useInView, type Variants } from "framer-motion"
import { Check, Loader2 } from "lucide-react"
import { useRef } from "react"
import { useGetPackagesQuery } from "@/redux/api/packageApi"

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

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
  const { data: response, isLoading, error } = useGetPackagesQuery()

  const packages = response?.data || []

  return (
    <section
      className="bg-white py-20 sm:py-24 lg:py-32 px-4 sm:px-6 md:px-10 lg:px-24"
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
            Choose the plan that&apos;s right for your events. Save with our packages.
          </motion.p>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="h-10 w-10 animate-spin text-brand" />
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center py-20 text-red-500 font-medium">
            Failed to load packages. Please try again later.
          </div>
        )}

        {/* Pricing Cards */}
        {!isLoading && !error && (
          <motion.div
            variants={gridVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12 items-stretch justify-center"
          >
            {packages.map((pkg, index) => {
              // Find the monthly price if available, otherwise use free or the first price
              const monthlyPrice = pkg.planPrices.find(p => p.type === "month")?.price ?? pkg.planPrices[0]?.price ?? 0;
              const isFree = pkg.title.toLowerCase().includes("free");
              const isPremium = pkg.title.toLowerCase().includes("premium");

              return (
                <motion.div
                  key={pkg._id}
                  variants={cardVariants}
                  whileHover={!isPremium ? { y: -12, transition: { duration: 0.3, ease: EASE } } : {}}
                  className={`group relative rounded-2xl p-6 sm:p-8 md:p-8 lg:p-10 duration-500 shadow-2xl ${isPremium
                    ? "bg-[#0b0e1f] text-white z-10 scale-100 md:scale-105"
                    : "bg-white text-slate-900 shadow-slate-200/50 border border-slate-100"
                    }`}
                >
                  <div className="flex flex-col h-full">

                    {/* Plan name */}
                    <span className={`text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 capitalize group-hover:text-brand transition-colors`}>
                      {pkg.title}
                    </span>

                    {/* Price */}
                    <div className="flex items-baseline gap-1 mb-7 sm:mb-10">
                      <motion.span
                        initial={{ opacity: 0, scale: 0.7 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.7 }}
                        transition={{ duration: 0.55, ease: EASE, delay: 0.4 + index * 0.13 }}
                        className="text-5xl sm:text-6xl font-bold tracking-tighter"
                      >
                        ${monthlyPrice}
                      </motion.span>
                      <span className="text-base sm:text-lg font-medium opacity-60">
                        {isFree ? "" : "/mo"}
                      </span>
                    </div>

                    {/* Features list */}
                    <ul className="space-y-4 sm:space-y-6 mb-8 sm:mb-12 flex-1">
                      {pkg.benefits.length > 0 ? (
                        pkg.benefits.map((benefit, i) => (
                          <motion.li
                            key={i}
                            custom={i}
                            variants={featureVariants}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            className={`flex items-start gap-3 sm:gap-4 text-xs sm:text-sm font-medium ${isPremium ? "text-white/90" : "text-slate-700"}`}
                          >
                            <div className={`flex h-5 w-5 sm:h-6 sm:w-6 shrink-0 items-center justify-center rounded-full border-2 ${isPremium ? "border-white text-white" : "border-brand text-brand"}`}>
                              <Check className="h-2.5 w-2.5 sm:h-3 sm:w-3 stroke-[4px]" />
                            </div>
                            <span className="leading-snug">{benefit}</span>
                          </motion.li>
                        ))
                      ) : (
                        <li className={`text-sm italic ${isPremium ? "text-white/50" : "text-slate-400"}`}>No specific benefits listed.</li>
                      )}
                    </ul>

                    {/* CTA Button */}
                    {/* <motion.div
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <Button
                        className={`w-full rounded-xl cursor-pointer py-6 sm:py-7 text-base sm:text-lg font-medium transition-all shadow-xl ${isPremium
                          ? "bg-white text-black hover:bg-white/90 shadow-white/10"
                          : "bg-brand text-white hover:bg-brand/90 shadow-brand/20"
                          }`}
                      >
                        {isFree ? "Start for Free" : "Upgrade Now"}
                      </Button>
                    </motion.div> */}

                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}

      </div>
    </section>
  )
}
