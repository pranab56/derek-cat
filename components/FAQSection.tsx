"use client"

import { AnimatePresence, motion, useInView, type Variants } from "framer-motion"
import { Minus, Plus } from "lucide-react"
import { useRef, useState } from "react"

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

const faqs = [
  {
    question: "Is there a limit on the number of events?",
    answer: "One Source Process is a document processing company that provides an experienced, efficient, and personal service to our clients. Strategically headquartered in Washington, DC, with locations nationwide, we serve all 50 states and territories, providing a variety of services such as service of process, apostille & legalization, skip tracing, traveling notary, court filing, document retrieval and subpoena preparation. With our vast local and national network, our service of process company is able to treat each case with the utmost priority, assuring that the job is done quickly and correctly the first time."
  },
  {
    question: "How do I export my guest list?",
    answer: "One Source Process is a document processing company that provides an experienced, efficient, and personal service to our clients. Strategically headquartered in Washington, DC, with locations nationwide, we serve all 50 states and territories, providing a variety of services such as service of process, apostille & legalization, skip tracing, traveling notary, court filing, document retrieval and subpoena preparation. With our vast local and national network, our service of process company is able to treat each case with the utmost priority, assuring that the job is done quickly and correctly the first time."
  },
  {
    question: "Can I use it offline?",
    answer: "One Source Process is a document processing company that provides an experienced, efficient, and personal service to our clients. Strategically headquartered in Washington, DC, with locations nationwide, we serve all 50 states and territories, providing a variety of services such as service of process, apostille & legalization, skip tracing, traveling notary, court filing, document retrieval and subpoena preparation. With our vast local and national network, our service of process company is able to treat each case with the utmost priority, assuring that the job is done quickly and correctly the first time."
  },
  {
    question: "Do you offer discounts for non-profits?",
    answer: "One Source Process is a document processing company that provides an experienced, efficient, and personal service to our clients. Strategically headquartered in Washington, DC, with locations nationwide, we serve all 50 states and territories, providing a variety of services such as service of process, apostille & legalization, skip tracing, traveling notary, court filing, document retrieval and subpoena preparation. With our vast local and national network, our service of process company is able to treat each case with the utmost priority, assuring that the job is done quickly and correctly the first time."
  }
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

const listVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE },
  },
}

const answerVariants: Variants = {
  hidden: {
    height: 0,
    opacity: 0,
  },
  visible: {
    height: "auto",
    opacity: 1,
    transition: {
      height: { duration: 0.38, ease: EASE },
      opacity: { duration: 0.28, ease: EASE, delay: 0.08 },
    },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: {
      height: { duration: 0.3, ease: EASE },
      opacity: { duration: 0.18, ease: EASE },
    },
  },
}

const iconVariants: Variants = {
  closed: { rotate: 0 },
  open: { rotate: 90, transition: { duration: 0.25, ease: EASE } },
}

export function FAQSection({ showTitle = true }: { showTitle?: boolean }) {
  const [openIndex, setOpenIndex] = useState<number | null>(1)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section
      className="bg-background py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-10 lg:px-24 mb-20"
      ref={ref}
    >
      <div className="mx-auto max-w-4xl">

        {/* Heading */}
        {showTitle && (
          <motion.h2
            variants={headingVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-3xl sm:text-4xl font-semibold text-[#1a1f36] text-center mb-10 sm:mb-12 lg:mb-16"
          >
            Frequently Asked Questions
          </motion.h2>
        )}

        {/* FAQ accordion list */}
        <motion.div
          className="space-y-3 sm:space-y-4"
          variants={listVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="rounded-xl overflow-hidden shadow-sm"
              >
                {/* Question button */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-4 sm:p-6 text-left hover:bg-slate-50 transition-colors bg-white"
                >
                  <span className="text-sm sm:text-base lg:text-lg font-semibold cursor-pointer text-[#1a1f36] pr-4">
                    {faq.question}
                  </span>

                  <motion.div
                    animate={isOpen ? "open" : "closed"}
                    variants={iconVariants}
                    className={`flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 cursor-pointer items-center justify-center rounded-lg transition-colors ${isOpen ? "bg-brand text-white" : "bg-brand/10 text-brand"
                      }`}
                  >
                    {isOpen
                      ? <Minus className="h-4 w-4 sm:h-5 sm:w-5" />
                      : <Plus className="h-4 w-4 sm:h-5 sm:w-5" />
                    }
                  </motion.div>
                </button>

                {/* Answer — animated with AnimatePresence */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      variants={answerVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="overflow-hidden bg-white"
                    >
                      <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-0 text-sm sm:text-base text-slate-500 leading-relaxed font-normal">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}
