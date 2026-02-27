"use client"

import { motion, useInView, type Variants } from "framer-motion"
import { Check } from "lucide-react"
import Image from 'next/image'
import { useRef } from "react"

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

interface DetailsSectionProps {
  title: string
  description: string
  points: string[]
  imageSide: "left" | "right"
  illustrationColor: string
  emoji: string
}

// Variants
const textBlockVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE },
  },
}

const listItemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: EASE },
  },
}

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.92, y: 24 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE },
  },
}

const floatVariants: Variants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 4.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
}

export function DetailsSection({ title, description, points, imageSide, illustrationColor, emoji }: DetailsSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section className="bg-white overflow-hidden pb-12 sm:pb-16 lg:pb-20" ref={ref}>
      <div
        className={`flex container mx-auto flex-col gap-8 sm:gap-12 lg:gap-16 lg:flex-row lg:items-center px-4 sm:px-6 md:px-0 ${imageSide === "left" ? "lg:flex-row-reverse" : ""
          }`}
      >
        {/* Text Part */}
        <motion.div
          className="content-part flex-1"
          variants={textBlockVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2
            variants={fadeUp}
            className="text-2xl font-semibold text-slate-900 md:text-4xl"
          >
            {title}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-4 sm:mt-6 lg:mt-8 text-sm sm:text-base lg:text-lg text-slate-500 font-normal leading-relaxed"
          >
            {description}
          </motion.p>

          <motion.ul
            variants={textBlockVariants}
            className="mt-6 sm:mt-8 space-y-3 sm:space-y-4"
          >
            {points.map((point, i) => (
              <motion.li
                key={i}
                variants={listItemVariants}
                className="flex items-center gap-3 sm:gap-4 text-sm sm:text-base text-slate-700 font-medium"
              >
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.2 }}
                  className="flex h-5 w-5 sm:h-6 sm:w-6 shrink-0 items-center justify-center rounded-full bg-brand text-white shadow-lg shadow-brand/20"
                >
                  <Check className="h-3 w-3 sm:h-4 sm:w-4 stroke-[4px]" />
                </motion.div>
                {point}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Image / Illustration Part */}
        <motion.div
          className="image-part flex-1 flex justify-center"
          variants={imageVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            variants={floatVariants}
            animate="animate"
            className={`relative aspect-square w-full rounded-3xl max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] ${illustrationColor} p-2 flex items-center justify-center`}
          >
            {/* Simulated UI View */}
            <div className="relative h-full w-full rounded overflow-hidden flex flex-col">
              {emoji === "📱" ? (
                <div>
                  <Image
                    src="/images/image2.png"
                    alt="mobile"
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <>
                  <div>
                    <Image
                      src="/images/image1.png"
                      alt="mobile"
                      width={1000}
                      height={1000}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </>
              )}
            </div>

            {/* Floating Accents */}
            <motion.div
              className="absolute -top-6 -right-6 h-24 w-24 bg-brand/10 rounded-full blur-2xl opacity-50"
              animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -bottom-6 -left-6 h-32 w-32 bg-slate-100 rounded-full blur-3xl opacity-50"
              animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.6, 0.4] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
