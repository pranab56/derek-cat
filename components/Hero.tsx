"use client"

import { motion, type Variants } from "framer-motion"
import Image from 'next/image'

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

// Animation variants
const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: EASE }
  }
}

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.9, ease: EASE, delay: 0.2 }
  }
}

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    }
  }
}

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE }
  }
}

const floatAnimation: Variants = {
  animate: {
    y: [0, -16, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    }
  }
}

export function Hero() {
  return (
    <section className="relative flex bg-[#EBF0FF] min-h-screen items-center overflow-hidden px-4 pt-32 pb-10 sm:px-6 md:px-10 lg:px-24">

      {/* Subtle background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-violet-100/60 blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.7, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -right-20 h-[450px] w-[450px] rounded-full bg-cyan-100/50 blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.65, 0.4] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
      </div>

      <div className="mx-auto flex w-full container flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-0">

        {/* Left Content */}
        <motion.div
          className="flex flex-[1.2] flex-col justify-center py-8 sm:py-10 lg:py-0 z-10 w-full text-center lg:text-left items-center lg:items-start"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            variants={fadeInUp}
            className="mb-4 inline-flex w-fit items-center rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs sm:text-sm font-semibold text-violet-600 shadow-sm"
          >
            ✨ The #1 Event Planning App
          </motion.span>

          <motion.h1
            variants={fadeInLeft}
            className="text-3xl font-bold tracking-tight text-[#1a1f36] sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl leading-[1.08]"
          >
            Plan Events <br />
            <span className="bg-primary bg-clip-text text-transparent">
              Without the Stress.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-4 sm:mt-6 lg:mt-8 max-w-xl text-sm sm:text-base lg:text-lg text-slate-900 leading-relaxed font-normal"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-8 sm:mt-10 lg:mt-14 flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4"
          >
            {/* Apple App Store Button */}
            <motion.button
              whileHover={{ scale: 1.06, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="group flex cursor-pointer items-center gap-2 sm:gap-3 rounded-2xl bg-[#1a1f36] px-5 py-2 sm:px-8 sm:py-3 text-white transition-colors shadow-xl shadow-slate-900/20 hover:bg-slate-800"
            >
              {/* Apple Logo SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 20 24" fill="none">
                <path d="M16.7045 12.7632C16.7166 11.8433 16.9669 10.9414 17.4321 10.1413C17.8972 9.34117 18.5621 8.66894 19.3648 8.18712C18.8548 7.47607 18.1821 6.8909 17.4 6.47809C16.6178 6.06529 15.7479 5.83622 14.8592 5.80907C12.9635 5.6148 11.1258 6.91653 10.1598 6.91653C9.17506 6.91653 7.68776 5.82836 6.08616 5.86053C5.05021 5.8932 4.04059 6.18731 3.15568 6.7142C2.27077 7.24108 1.54075 7.98277 1.03674 8.867C-1.14648 12.5574 0.482005 17.981 2.57338 20.9641C3.61975 22.4248 4.84264 24.0565 6.44279 23.9986C8.00863 23.9352 8.59344 23.0238 10.4835 23.0238C12.3561 23.0238 12.9048 23.9986 14.5374 23.9618C16.2176 23.9352 17.2762 22.4946 18.2859 21.0201C19.0377 19.9793 19.6162 18.8289 20 17.6117C19.0238 17.2086 18.1908 16.5339 17.6048 15.6717C17.0187 14.8095 16.7056 13.798 16.7045 12.7632Z" fill="white" />
                <path d="M13.621 3.84713C14.5372 2.77343 14.9885 1.39335 14.8792 0C13.4796 0.143519 12.1867 0.796596 11.2582 1.82911C10.8043 2.33351 10.4566 2.92033 10.235 3.55601C10.0135 4.19168 9.92244 4.86375 9.9671 5.5338C10.6672 5.54084 11.3597 5.3927 11.9927 5.10054C12.6256 4.80838 13.1824 4.37982 13.621 3.84713Z" fill="white" />
              </svg>
              <div className="flex flex-col items-start leading-none">
                <span className="text-[9px] sm:text-[10px] uppercase font-bold text-gray-200">Download on the</span>
                <span className="text-base sm:text-xl font-medium">App Store</span>
              </div>
            </motion.button>

            {/* Google Play Button */}
            <motion.button
              whileHover={{ scale: 1.06, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="group flex items-center gap-2 cursor-pointer sm:gap-3 rounded-2xl bg-[#1a1f36] px-5 py-3 sm:px-8 sm:py-4 text-white transition-colors shadow-xl shadow-slate-900/20 hover:bg-slate-800"
            >
              {/* Google Play Logo SVG (colored) */}
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="24" viewBox="0 0 21 24" fill="none">
                <path d="M9.80506 11.4617L0.0898438 22.0059C0.0907562 22.0078 0.0907561 22.0106 0.0916686 22.0125C0.390051 23.1574 1.41203 24 2.62564 24C3.11108 24 3.56641 23.8656 3.95695 23.6305L3.98798 23.6118L14.9232 17.1593L9.80506 11.4617Z" fill="#EA4335" />
                <path d="M19.6332 9.66619L19.624 9.65966L14.9029 6.86123L9.58398 11.7013L14.922 17.1582L19.6177 14.3878C20.4407 13.9324 21.0001 13.045 21.0001 12.0223C21.0001 11.0052 20.4489 10.1225 19.6332 9.66619Z" fill="#FBBC04" />
                <path d="M0.0894234 1.99325C0.0310244 2.21346 0 2.44488 0 2.68376V21.3163C0 21.5552 0.0310245 21.7866 0.0903359 22.0059L10.1386 11.7313L0.0894234 1.99325Z" fill="#4285F4" />
                <path d="M9.87617 12L14.904 6.85945L3.98152 0.383598C3.58459 0.140054 3.12105 8.67844e-05 2.62557 8.67844e-05C1.41197 8.67844e-05 0.388161 0.84456 0.0897792 1.99043C0.0897792 1.99136 0.0888672 1.9923 0.0888672 1.99323L9.87617 12Z" fill="#34A853" />
              </svg>
              <div className="flex flex-col items-start leading-none">
                <span className="text-[9px] sm:text-[10px] uppercase font-bold text-gray-200">GET IT ON</span>
                <span className="text-base sm:text-xl font-medium">Google Play</span>
              </div>
            </motion.button>
          </motion.div>


        </motion.div>

        {/* Right Content - Hero Image */}
        <motion.div
          className="relative flex flex-1 items-center justify-center w-full"
          variants={fadeInRight}
          initial="hidden"
          animate="visible"
        >
          {/* Glow ring behind image */}
          <motion.div
            className="absolute inset-0 m-auto h-[420px] w-[420px] rounded-full bg-gradient-to-br from-violet-300/40 to-indigo-300/30 blur-2xl"
            animate={{ scale: [1, 1.08, 1], opacity: [0.6, 0.9, 0.6] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Floating image */}
          <motion.div
            className="relative z-10 drop-shadow-2xl"
            variants={floatAnimation}
            animate="animate"
          >
            <Image
              src={"/images/hero.png"}
              height={600}
              width={560}
              alt="hero-phone"
              className="w-full h-auto max-w-[280px] sm:max-w-[340px] md:max-w-[400px] lg:max-w-[520px] xl:max-w-[580px] object-contain"
              priority
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}
