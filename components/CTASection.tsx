"use client"

import { motion, useInView, type Variants } from "framer-motion"
import Image from 'next/image'
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

export function CTASection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section
      className="bg-background py-16 sm:py-24 lg:py-52 px-4 sm:px-6 md:px-12 lg:px-24 overflow-visible relative"
      ref={sectionRef}
    >
      <div className="mx-auto container">
        {/* Main Blue Container */}
        <div className="relative rounded-2xl lg:rounded-3xl bg-brand flex flex-col lg:flex-row items-center shadow-2xl shadow-brand/20 overflow-visible mt-20 lg:mt-0">

          {/* Left Side: Phone Mockup */}
          <div className="relative w-full lg:w-[45%] flex justify-center lg:justify-center overflow-visible">
            <motion.div
              variants={phoneVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="relative -top-24 sm:-top-32 lg:-top-[340px] xl:-top-[373px] lg:absolute z-20 mb-[-60px] sm:mb-[-80px] lg:mb-0"
            >
              <Image
                src="/images/Mockup.png"
                alt="Eventify App Mockup"
                width={1000}
                height={1000}
                className="w-[220px] sm:w-[300px] md:w-[340px] lg:w-[420px] xl:w-full h-full "
                priority
              />
            </motion.div>
          </div>

          {/* Right Side: Content */}
          <motion.div
            className="w-full lg:w-[55%] text-center lg:text-left z-10 pt-4 pb-16 lg:py-20 px-6 sm:px-12 lg:px-0 lg:pr-16"
            variants={contentVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl xs:text-4xl sm:text-5xl lg:text-[54px] font-normal text-white tracking-tight leading-[1.1] lg:leading-[1.05] mb-6"
            >
              Ready to organize your <br className="hidden xl:block" />
              next big event?
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-base sm:text-lg lg:text-xl text-white/90 font-normal max-w-lg mx-auto lg:mx-0 leading-relaxed mb-10"
            >
              Join 10,000+ organizers worldwide and streamline your planning workflow today.
            </motion.p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
              {/* App Store */}
              <motion.div
                custom={0}
                variants={buttonVariants}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="#"
                  className="flex items-center gap-3 bg-black text-white px-5 sm:px-8 h-[56px] sm:h-[64px] rounded-xl sm:rounded-2xl hover:bg-neutral-900 transition-all shadow-xl shadow-black/20"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="26" viewBox="0 0 20 24" fill="none" className="shrink-0">
                    <path d="M16.7045 12.7632C16.7166 11.8433 16.9669 10.9414 17.4321 10.1413C17.8972 9.34117 18.5621 8.66894 19.3648 8.18712C18.8548 7.47607 18.1821 6.8909 17.4 6.47809C16.6178 6.06529 15.7479 5.83622 14.8592 5.80907C12.9635 5.6148 11.1258 6.91653 10.1598 6.91653C9.17506 6.91653 7.68776 5.82836 6.08616 5.86053C5.05021 5.8932 4.04059 6.18731 3.15568 6.7142C2.27077 7.24108 1.54075 7.98277 1.03674 8.867C-1.14648 12.5574 0.482005 17.981 2.57338 20.9641C3.61975 22.4248 4.84264 24.0565 6.44279 23.9986C8.00863 23.9352 8.59344 23.0238 10.4835 23.0238C12.3561 23.0238 12.9048 23.9986 14.5374 23.9618C16.2176 23.9352 17.2762 22.4946 18.2859 21.0201C19.0377 19.9793 19.6162 18.8289 20 17.6117C19.0238 17.2086 18.1908 16.5339 17.6048 15.6717C17.0187 14.8095 16.7056 13.798 16.7045 12.7632Z" fill="white" />
                    <path d="M13.621 3.84713C14.5372 2.77343 14.9885 1.39335 14.8792 0C13.4796 0.143519 12.1867 0.796596 11.2582 1.82911C10.8043 2.33351 10.4566 2.92033 10.235 3.55601C10.0135 4.19168 9.92244 4.86375 9.9671 5.5338C10.6672 5.54084 11.3597 5.3927 11.9927 5.10054C12.6256 4.80838 13.1824 4.37982 13.621 3.84713Z" fill="white" />
                  </svg>
                  <div className="flex flex-col items-start leading-tight">
                    <span className="text-[10px] sm:text-xs font-normal text-gray-300">Download on the</span>
                    <span className="text-base sm:text-xl font-normal tracking-tight">App Store</span>
                  </div>
                </Link>
              </motion.div>

              {/* Google Play */}
              <motion.div
                custom={1}
                variants={buttonVariants}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="#"
                  className="flex items-center gap-3 bg-black text-white px-5 sm:px-8 h-[56px] sm:h-[64px] rounded-xl sm:rounded-2xl hover:bg-neutral-900 transition-all shadow-xl shadow-black/20"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="26" viewBox="0 0 21 24" fill="none" className="shrink-0">
                    <path d="M9.80506 11.4617L0.0898438 22.0059C0.0907562 22.0078 0.0907561 22.0106 0.0916686 22.0125C0.390051 23.1574 1.41203 24 2.62564 24C3.11108 24 3.56641 23.8656 3.95695 23.6305L3.98798 23.6118L14.9232 17.1593L9.80506 11.4617Z" fill="#EA4335" />
                    <path d="M19.6332 9.66619L19.624 9.65966L14.9029 6.86123L9.58398 11.7013L14.922 17.1582L19.6177 14.3878C20.4407 13.9324 21.0001 13.045 21.0001 12.0223C21.0001 11.0052 20.4489 10.1225 19.6332 9.66619Z" fill="#FBBC04" />
                    <path d="M0.0894234 1.99325C0.0310244 2.21346 0 2.44488 0 2.68376V21.3163C0 21.5552 0.0310245 21.7866 0.0903359 22.0059L10.1386 11.7313L0.0894234 1.99325Z" fill="#4285F4" />
                    <path d="M9.87617 12L14.904 6.85945L3.98152 0.383598C3.58459 0.140054 3.12105 8.67844e-05 2.62557 8.67844e-05C1.41197 8.67844e-05 0.388161 0.84456 0.0897792 1.99043C0.0897792 1.99136 0.0888672 1.9923 0.0888672 1.99323L9.87617 12Z" fill="#34A853" />
                  </svg>
                  <div className="flex flex-col items-start leading-tight">
                    <span className="text-[10px] sm:text-xs font-normal text-gray-300">GET IT ON</span>
                    <span className="text-base sm:text-xl font-normal tracking-tight">Google Play</span>
                  </div>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
