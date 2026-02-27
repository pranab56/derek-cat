"use client"

import { motion, useInView, type Variants } from "framer-motion"
import Link from "next/link"
import { useRef } from "react"

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

// Variants
const phoneVariants: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.85, ease: EASE },
  },
}

const floatVariants: Variants = {
  animate: {
    y: [0, -12, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
}

const contentVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.13, delayChildren: 0.3 },
  },
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE },
  },
}

const buttonVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: EASE, delay: i * 0.12 },
  }),
}

const decorVariants: Variants = {
  animate: {
    scale: [1, 1.15, 1],
    opacity: [0.6, 0.9, 0.6],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
  },
}

export function CTASection() {
  const phoneRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" })

  return (
    <section
      className="bg-background py-16 sm:py-20 lg:py-32 px-4 sm:px-6 md:px-12 lg:px-24 overflow-visible relative"
      ref={sectionRef}
    >
      <div className="mx-auto container">
        {/* Main Blue Container */}
        <div className="relative rounded-[2rem] lg:rounded-[3rem] bg-brand pt-12 sm:pt-16 pb-12 sm:pb-16 px-6 sm:px-10 md:px-16 lg:px-24 shadow-2xl shadow-brand/20">

          {/* Decorative blobs */}
          <motion.div
            variants={decorVariants}
            animate="animate"
            className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-3xl pointer-events-none"
          />
          <motion.div
            variants={decorVariants}
            animate="animate"
            style={{ animationDelay: "1.5s" }}
            className="absolute -left-20 -bottom-20 h-80 w-80 rounded-full bg-black/10 blur-3xl pointer-events-none"
          />

          <div className="flex flex-col lg:flex-row items-center gap-10 sm:gap-16 lg:gap-24 relative">

            {/* Left Side: Phone Mockup */}
            <motion.div
              className="relative flex-1 w-full max-w-[280px] sm:max-w-[340px] lg:max-w-none flex justify-center lg:justify-end"
              variants={phoneVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <motion.div
                ref={phoneRef}
                variants={floatVariants}
                animate="animate"
                className="relative z-20 w-[260px] sm:w-[300px] lg:w-[320px] -mt-24 sm:-mt-40 lg:-mt-60 filter drop-shadow-[0_50px_100px_rgba(0,0,0,0.3)]"
              >
                <div className="aspect-[1/2.05] rounded-[2rem] h-[480px] sm:h-[540px] lg:h-[580px] top-16 w-full border-[5px] border-[#1a1f36] bg-white overflow-hidden relative">
                  {/* Notch / Dynamic Island */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 sm:w-28 h-7 sm:h-8 bg-[#1a1f36] rounded-full z-30 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-[#1a1f36] ml-auto mr-4 border border-white/10" />
                  </div>

                  {/* App UI Re-creation */}
                  <div className="h-full w-full bg-[#f8faff] flex flex-col pt-12">
                    {/* Header */}
                    <div className="px-4 sm:px-6 flex items-center justify-between mb-6 sm:mb-8">
                      <div className="h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center rounded-2xl bg-brand/10 text-brand shadow-sm">
                        <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6" stroke="currentColor" strokeWidth="2.5" fill="none">
                          <line x1="17" y1="10" x2="3" y2="10"></line>
                          <line x1="21" y1="6" x2="3" y2="6"></line>
                          <line x1="21" y1="14" x2="3" y2="14"></line>
                          <line x1="15" y1="18" x2="3" y2="18"></line>
                        </svg>
                      </div>
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="text-right">
                          <p className="text-[9px] sm:text-[10px] uppercase font-bold text-slate-400">Welcome back!</p>
                          <p className="text-[11px] sm:text-[12px] font-black text-slate-900">Jane Cooper</p>
                        </div>
                        <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-2xl border-2 border-white overflow-hidden shadow-lg bg-slate-200">
                          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Jane" alt="User" />
                        </div>
                      </div>
                    </div>

                    <h4 className="px-4 sm:px-6 text-base sm:text-lg font-black text-slate-900 mb-4 sm:mb-6">Upcoming Events</h4>

                    {/* Timeline Data */}
                    <div className="flex-1 overflow-y-auto px-3 sm:px-4 space-y-6 sm:space-y-8 pb-10">
                      {/* Event 1 */}
                      <div className="flex gap-3 sm:gap-4">
                        <div className="flex flex-col items-center gap-2 pt-2">
                          <div className="w-10 h-14 sm:w-12 sm:h-16 bg-brand rounded-xl flex flex-col items-center justify-center text-white shadow-lg shadow-brand/30">
                            <span className="text-[9px] sm:text-[10px] uppercase font-bold opacity-80">Jan</span>
                            <span className="text-lg sm:text-xl font-black">29</span>
                          </div>
                          <div className="w-0.5 flex-1 bg-slate-100 rounded-full" />
                        </div>
                        <div className="flex-1">
                          <div className="rounded-[2rem] bg-white p-2 shadow-2xl shadow-slate-200/50 border border-slate-50">
                            <div className="relative aspect-video rounded-[1.5rem] overflow-hidden mb-3 sm:mb-4 bg-slate-100">
                              <img src="/images/steak.png" alt="Dinner" className="w-full h-full object-cover" />
                            </div>
                            <div className="px-2 sm:px-3 pb-2 sm:pb-3">
                              <div className="flex items-center gap-2 mb-2">
                                <span className="bg-green-100 text-green-600 text-[9px] sm:text-[10px] font-black px-2 sm:px-3 py-1 rounded-full uppercase tracking-wider">Confirmed</span>
                                <span className="text-[9px] sm:text-[10px] font-bold text-slate-400">10:00 PM, Dubai</span>
                              </div>
                              <p className="text-xs sm:text-sm font-black text-slate-900 leading-tight mb-3 sm:mb-4">Saturday Dinner Plan....</p>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <div className="flex -space-x-3">
                                    {[...Array(4)].map((_, i) => (
                                      <div key={i} className="h-6 w-6 sm:h-8 sm:w-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                                        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 10}`} alt="attendee" />
                                      </div>
                                    ))}
                                    <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-full border-2 border-white bg-brand flex items-center justify-center text-white text-[9px] sm:text-[10px] font-black z-10 shadow-lg">
                                      20+
                                    </div>
                                  </div>
                                </div>
                                <span className="text-[9px] sm:text-[10px] font-bold text-slate-400">5 Going/2 Not Going</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side: Content */}
            <motion.div
              className="flex-[1.5] text-center lg:text-left z-10 pt-4 sm:pt-8 lg:pt-0"
              variants={contentVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <motion.h2
                variants={fadeUp}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-[1.1]"
              >
                Ready to organize your <br className="hidden lg:block" />
                next big event?
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="mt-5 sm:mt-8 text-base sm:text-lg md:text-xl text-white/90 font-normal max-w-xl mx-auto lg:mx-0 leading-relaxed"
              >
                Join 10,000+ organizers worldwide and streamline your <br className="hidden lg:block" />
                planning workflow today.
              </motion.p>

              {/* CTA Buttons */}
              <div className="mt-8 sm:mt-12 flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-5">
                {/* App Store */}
                <motion.div
                  custom={0}
                  variants={buttonVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Link
                    href="#"
                    className="flex items-center gap-3 sm:gap-4 bg-black text-white px-4 sm:px-5 h-14 sm:h-16 rounded-2xl hover:bg-neutral-900 transition-colors shadow-2xl shadow-black/30"
                  >
                    {/* Apple Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 20 24" fill="none" className="shrink-0">
                      <path d="M16.7045 12.7632C16.7166 11.8433 16.9669 10.9414 17.4321 10.1413C17.8972 9.34117 18.5621 8.66894 19.3648 8.18712C18.8548 7.47607 18.1821 6.8909 17.4 6.47809C16.6178 6.06529 15.7479 5.83622 14.8592 5.80907C12.9635 5.6148 11.1258 6.91653 10.1598 6.91653C9.17506 6.91653 7.68776 5.82836 6.08616 5.86053C5.05021 5.8932 4.04059 6.18731 3.15568 6.7142C2.27077 7.24108 1.54075 7.98277 1.03674 8.867C-1.14648 12.5574 0.482005 17.981 2.57338 20.9641C3.61975 22.4248 4.84264 24.0565 6.44279 23.9986C8.00863 23.9352 8.59344 23.0238 10.4835 23.0238C12.3561 23.0238 12.9048 23.9986 14.5374 23.9618C16.2176 23.9352 17.2762 22.4946 18.2859 21.0201C19.0377 19.9793 19.6162 18.8289 20 17.6117C19.0238 17.2086 18.1908 16.5339 17.6048 15.6717C17.0187 14.8095 16.7056 13.798 16.7045 12.7632Z" fill="white" />
                      <path d="M13.621 3.84713C14.5372 2.77343 14.9885 1.39335 14.8792 0C13.4796 0.143519 12.1867 0.796596 11.2582 1.82911C10.8043 2.33351 10.4566 2.92033 10.235 3.55601C10.0135 4.19168 9.92244 4.86375 9.9671 5.5338C10.6672 5.54084 11.3597 5.3927 11.9927 5.10054C12.6256 4.80838 13.1824 4.37982 13.621 3.84713Z" fill="white" />
                    </svg>
                    <div className="flex flex-col items-start leading-none">
                      <span className="text-xs sm:text-sm font-normal text-slate-400 mb-1">Download on the</span>
                      <span className="text-lg sm:text-xl font-medium tracking-tight">App Store</span>
                    </div>
                  </Link>
                </motion.div>

                {/* Google Play */}
                <motion.div
                  custom={1}
                  variants={buttonVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Link
                    href="#"
                    className="flex items-center gap-3 sm:gap-4 bg-black text-white px-4 sm:px-5 h-14 sm:h-16 rounded-2xl hover:bg-neutral-900 transition-colors shadow-2xl shadow-black/30"
                  >
                    {/* Google Play Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="24" viewBox="0 0 21 24" fill="none" className="shrink-0">
                      <path d="M9.80506 11.4617L0.0898438 22.0059C0.0907562 22.0078 0.0907561 22.0106 0.0916686 22.0125C0.390051 23.1574 1.41203 24 2.62564 24C3.11108 24 3.56641 23.8656 3.95695 23.6305L3.98798 23.6118L14.9232 17.1593L9.80506 11.4617Z" fill="#EA4335" />
                      <path d="M19.6332 9.66619L19.624 9.65966L14.9029 6.86123L9.58398 11.7013L14.922 17.1582L19.6177 14.3878C20.4407 13.9324 21.0001 13.045 21.0001 12.0223C21.0001 11.0052 20.4489 10.1225 19.6332 9.66619Z" fill="#FBBC04" />
                      <path d="M0.0894234 1.99325C0.0310244 2.21346 0 2.44488 0 2.68376V21.3163C0 21.5552 0.0310245 21.7866 0.0903359 22.0059L10.1386 11.7313L0.0894234 1.99325Z" fill="#4285F4" />
                      <path d="M9.87617 12L14.904 6.85945L3.98152 0.383598C3.58459 0.140054 3.12105 8.67844e-05 2.62557 8.67844e-05C1.41197 8.67844e-05 0.388161 0.84456 0.0897792 1.99043C0.0897792 1.99136 0.0888672 1.9923 0.0888672 1.99323L9.87617 12Z" fill="#34A853" />
                    </svg>
                    <div className="flex flex-col items-start leading-none">
                      <span className="text-xs sm:text-sm font-normal text-slate-400 mb-1">GET IT ON</span>
                      <span className="text-lg sm:text-xl font-medium tracking-tight">Google Play</span>
                    </div>
                  </Link>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
