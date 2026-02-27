"use client"

import { motion, useInView, type Variants } from "framer-motion"
import { Facebook, Instagram } from "lucide-react"
import Image from 'next/image'
import Link from "next/link"
import { useRef } from "react"

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

// Variants
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE },
  },
}

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: EASE },
  },
}

const socialVariants: Variants = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: EASE, delay: i * 0.1 },
  }),
}

const linkVariants: Variants = {
  hidden: { opacity: 0, x: -12 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: EASE, delay: i * 0.08 },
  }),
}

export function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <footer
      className="bg-[#EBF0FF] py-10 sm:py-10 lg:py-10 px-4 sm:px-6 md:px-16 lg:px-24 border-t border-brand/5"
      ref={ref}
    >
      <div className="mx-auto container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-12"
        >
          {/* Logo and Description */}
          <div className="lg:col-span-12 flex flex-col md:flex-row justify-between items-start gap-10 sm:gap-12 mb-6 sm:mb-10 lg:mb-12">

            {/* Brand column */}
            <motion.div variants={fadeUp} className="flex flex-col gap-6 sm:gap-8 max-w-md">
              <motion.div
                whileHover={{ scale: 1.08, rotate: 3 }}
                transition={{ duration: 0.25, ease: EASE }}
                className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-[1.25rem] bg-brand shadow-2xl shadow-brand/30 cursor-pointer"
              >
                <Image
                  src={"/images/logo.png"}
                  height={1000}
                  width={1000}
                  alt="logo"
                  className="w-full h-full"
                />
              </motion.div>

              <p className="text-base sm:text-xl text-slate-500 font-normal">
                The modern standard for professional event management. Empowering organizers since 2018.
              </p>

              {/* Social icons */}
              <div className="flex gap-3 sm:gap-4">
                {[
                  { href: "https://facebook.com", icon: <Facebook className="h-5 w-5 sm:h-6 sm:w-6 fill-current" />, label: "Facebook" },
                  { href: "https://instagram.com", icon: <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />, label: "Instagram" },
                ].map((social, i) => (
                  <motion.div
                    key={social.label}
                    custom={i}
                    variants={socialVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.92 }}
                  >
                    <Link
                      href={social.href}
                      target="_blank"
                      aria-label={social.label}
                      className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white text-brand transition-shadow hover:shadow-md"
                    >
                      {social.icon}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Links columns */}
            <div className="grid grid-cols-2 gap-10 sm:gap-16 lg:gap-32 w-full md:w-auto">

              {/* Company links */}
              <motion.div variants={fadeUp} className="flex flex-col gap-4 sm:gap-6">
                <h3 className="text-xl sm:text-2xl font-normal text-[#0b0e1f] tracking-tight">Company</h3>
                <nav className="flex flex-col gap-3 sm:gap-4">
                  {[
                    { href: "/pricing", label: "Pricing" },
                    { href: "/faq", label: "FAQ" },
                  ].map((link, i) => (
                    <motion.div
                      key={link.href}
                      custom={i}
                      variants={linkVariants}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link
                        href={link.href}
                        className="text-base sm:text-lg text-slate-500 font-normal hover:text-brand transition-colors"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </motion.div>

              {/* Download App column */}
              <motion.div variants={fadeUp} className="flex flex-col gap-4 sm:gap-6">
                <h3 className="text-xl sm:text-2xl font-normal text-[#0b0e1f] tracking-tight">Download App</h3>
                <p className="text-sm sm:text-lg text-slate-500 font-normal">Plan Events Without the Stress.</p>
                <div className="flex flex-col gap-3 sm:gap-4">
                  {/* App Store */}
                  <motion.div
                    whileHover={{ scale: 1.04, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href="#"
                      className="flex items-center gap-2 sm:gap-3 bg-[#0b0e1f] text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl shadow-xl shadow-blue-900/10"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 20 24" fill="none">
                        <path d="M16.7045 12.763C16.7166 11.8431 16.9669 10.9411 17.4321 10.141C17.8972 9.34093 18.5621 8.66869 19.3648 8.18687C18.8548 7.47582 18.1821 6.89066 17.4 6.47785C16.6178 6.06505 15.7479 5.83597 14.8592 5.80883C12.9635 5.61456 11.1258 6.91628 10.1598 6.91628C9.17506 6.91628 7.68776 5.82812 6.08616 5.86028C5.05021 5.89296 4.04059 6.18707 3.15568 6.71395C2.27077 7.24083 1.54075 7.98252 1.03674 8.86675C-1.14648 12.5571 0.482005 17.9808 2.57338 20.9639C3.61975 22.4246 4.84264 24.0562 6.44279 23.9984C8.00863 23.9349 8.59344 23.0235 10.4835 23.0235C12.3561 23.0235 12.9048 23.9984 14.5374 23.9616C16.2176 23.9349 17.2762 22.4944 18.2859 21.0198C19.0377 19.979 19.6162 18.8287 20 17.6115C19.0238 17.2084 18.1908 16.5337 17.6048 15.6715C17.0187 14.8093 16.7056 13.7977 16.7045 12.763Z" fill="white" />
                        <path d="M13.621 3.84713C14.5372 2.77343 14.9885 1.39335 14.8792 0C13.4796 0.143519 12.1867 0.796596 11.2582 1.82911C10.8043 2.33351 10.4566 2.92033 10.235 3.55601C10.0135 4.19168 9.92244 4.86375 9.9671 5.5338C10.6672 5.54084 11.3597 5.3927 11.9927 5.10054C12.6256 4.80838 13.1824 4.37982 13.621 3.84713Z" fill="white" />
                      </svg>
                      <div className="flex flex-col">
                        <span className="text-[9px] sm:text-[10px] uppercase font-normal tracking-wider opacity-60">Download on the</span>
                        <span className="text-sm sm:text-lg font-normal leading-tight">App Store</span>
                      </div>
                    </Link>
                  </motion.div>

                  {/* Google Play */}
                  <motion.div
                    whileHover={{ scale: 1.04, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href="#"
                      className="flex items-center gap-2 sm:gap-3 bg-[#0b0e1f] text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl shadow-xl shadow-blue-900/10"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="21" height="24" viewBox="0 0 21 24" fill="none">
                        <path d="M9.80506 11.4617L0.0898438 22.0059C0.0907562 22.0078 0.0907561 22.0106 0.0916686 22.0125C0.390051 23.1574 1.41203 24 2.62564 24C3.11108 24 3.56641 23.8656 3.95695 23.6305L3.98798 23.6118L14.9232 17.1593L9.80506 11.4617Z" fill="#EA4335" />
                        <path d="M19.6332 9.66619L19.624 9.65966L14.9029 6.86123L9.58398 11.7013L14.922 17.1582L19.6177 14.3878C20.4407 13.9324 21.0001 13.045 21.0001 12.0223C21.0001 11.0052 20.4489 10.1225 19.6332 9.66619Z" fill="#FBBC04" />
                        <path d="M0.0894234 1.99325C0.0310244 2.21346 0 2.44488 0 2.68376V21.3163C0 21.5552 0.0310245 21.7866 0.0903359 22.0059L10.1386 11.7313L0.0894234 1.99325Z" fill="#4285F4" />
                        <path d="M9.87617 12L14.904 6.85945L3.98152 0.383598C3.58459 0.140054 3.12105 8.67844e-05 2.62557 8.67844e-05C1.41197 8.67844e-05 0.388161 0.84456 0.0897792 1.99043C0.0897792 1.99136 0.0888672 1.9923 0.0888672 1.99323L9.87617 12Z" fill="#34A853" />
                      </svg>
                      <div className="flex flex-col">
                        <span className="text-[9px] sm:text-[10px] uppercase font-normal tracking-wider opacity-60">Get it on</span>
                        <span className="text-sm sm:text-lg font-normal leading-tight">Google Play</span>
                      </div>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>

            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-8 sm:mt-12 pt-8 sm:pt-12 border-t border-slate-200/60 text-center"
        >
          <p className="text-slate-500 font-normal text-sm sm:text-lg tracking-tight">
            © 2026 Derek-Cat Inc. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
