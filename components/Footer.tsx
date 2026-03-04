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
      className="bg-[#f0f4ff] py-10 px-4 sm:px-6 md:px-16 lg:px-24"
      ref={ref}
    >
      <div className="mx-auto container max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-24 mb-16"
        >
          {/* Brand Column */}
          <motion.div variants={fadeUp} className="flex flex-col gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="h-14 w-14 rounded-2xl bg-brand flex items-center justify-center p-2.5 shadow-xl shadow-brand/20"
            >
              <Image
                src="/images/logo.png"
                height={60}
                width={60}
                alt="logo"
                className="w-full h-full object-contain"
              />
            </motion.div>

            <p className="text-lg text-slate-500 font-normal leading-relaxed max-w-sm">
              The modern standard for professional event management. Empowering organizers since 2018.
            </p>

            <div className="flex gap-4">
              {[
                { href: "#", icon: <Facebook className="h-6 w-6 fill-current" />, label: "Facebook" },
                { href: "#", icon: <Instagram className="h-6 w-6" />, label: "Instagram" },
              ].map((social, i) => (
                <motion.div
                  key={social.label}
                  custom={i}
                  variants={socialVariants}
                  whileHover={{ y: -3 }}
                >
                  <Link
                    href={social.href}
                    className="h-12 w-12 flex items-center justify-center rounded-full bg-[#cbd9ff] text-brand transition-all hover:bg-brand hover:text-white"
                  >
                    {social.icon}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Company Column */}
          <motion.div variants={fadeUp} className="flex flex-col gap-8 md:pl-12 lg:pl-24">
            <h3 className="text-2xl font-normal text-[#0b0e1f] tracking-tight">Company</h3>
            <nav className="flex flex-col gap-6">
              {[
                { href: "/pricing", label: "Pricing" },
                { href: "/faq", label: "FAQ" },
              ].map((link, i) => (
                <motion.div key={link.href} custom={i} variants={linkVariants} whileHover={{ x: 5 }}>
                  <Link
                    href={link.href}
                    className="text-lg text-slate-500 font-normal hover:text-brand transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>

          {/* Download App Column */}
          <motion.div variants={fadeUp} className="flex flex-col gap-8">
            <h3 className="text-2xl font-normal text-[#0b0e1f] tracking-tight">Download App</h3>
            <p className="text-lg text-slate-500 font-normal">Plan Events Without the Stress.</p>

            <div className="flex flex-wrap gap-4">
              {/* App Store */}
              <motion.div whileHover={{ y: -3 }}>
                <Link
                  href="#"
                  className="flex items-center gap-3 bg-[#0b0e1f] text-white px-5 h-14 rounded-xl shadow-lg hover:bg-black transition-all"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 20 24" fill="none">
                    <path d="M16.7045 12.763C16.7166 11.8431 16.9669 10.9411 17.4321 10.141C17.8972 9.34093 18.5621 8.66869 19.3648 8.18687C18.8548 7.47582 18.1821 6.89066 17.4 6.47785C16.6178 6.06505 15.7479 5.83597 14.8592 5.80883C12.9635 5.61456 11.1258 6.91628 10.1598 6.91628C9.17506 6.91628 7.68776 5.82812 6.08616 5.86028C5.05021 5.89296 4.04059 6.18707 3.15568 6.7142C2.27077 7.24108 1.54075 7.98277 1.03674 8.867C-1.14648 12.5571 0.482005 17.9808 2.57338 20.9639C3.61975 22.4248 4.84264 24.0562 6.44279 23.9984C8.00863 23.9349 8.59344 23.0235 10.4835 23.0235C12.3561 23.0235 12.9048 23.9984 14.5374 23.9616C16.2176 23.9352 17.2762 22.4946 18.2859 21.0198C19.0377 19.9790 19.6162 18.8287 20 17.6115C19.0238 17.2084 18.1908 16.5337 17.6048 15.6715C17.0187 14.8093 16.7056 13.7977 16.7045 12.763Z" fill="white" />
                    <path d="M13.621 3.84713C14.5372 2.77343 14.9885 1.39335 14.8792 0C13.4796 0.143519 12.1867 0.796596 11.2582 1.82911C10.8043 2.33351 10.4566 2.92033 10.235 3.55601C10.0135 4.19168 9.92244 4.86375 9.9671 5.5338C10.6672 5.54084 11.3597 5.3927 11.9927 5.10054C12.6256 4.80838 13.1824 4.37982 13.621 3.84713Z" fill="white" />
                  </svg>
                  <div className="flex flex-col leading-none">
                    <span className="text-[10px]  font-normal text-gray-100 mb-1">Download on the</span>
                    <span className="text-lg font-normal tracking-tight">App Store</span>
                  </div>
                </Link>
              </motion.div>

              {/* Google Play */}
              <motion.div whileHover={{ y: -3 }}>
                <Link
                  href="#"
                  className="flex items-center gap-3 bg-[#0b0e1f] text-white px-5 h-14 rounded-xl shadow-lg hover:bg-black transition-all"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 21 24" fill="none">
                    <path d="M9.80506 11.4617L0.0898438 22.0059C0.0907562 22.0078 0.0907561 22.0106 0.0916686 22.0125C0.390051 23.1574 1.41203 24 2.62564 24C3.11108 24 3.56641 23.8656 3.95695 23.6305L3.98798 23.6118L14.9232 17.1593L9.80506 11.4617Z" fill="#EA4335" />
                    <path d="M19.6332 9.66619L19.624 9.65966L14.9029 6.86123L9.58398 11.7013L14.922 17.1582L19.6177 14.3878C20.4407 13.9324 21.0001 13.045 21.0001 12.0223C21.0001 11.0052 20.4489 10.1225 19.6332 9.66619Z" fill="#FBBC04" />
                    <path d="M0.0894234 1.99325C0.0310244 2.21346 0 2.44488 0 2.68376V21.3163C0 21.5552 0.0310245 21.7866 0.0903359 22.0059L10.1386 11.7313L0.0894234 1.99325Z" fill="#4285F4" />
                    <path d="M9.87617 12L14.904 6.85945L3.98152 0.383598C3.58459 0.140054 3.12105 8.67844e-05 2.62557 8.67844e-05C1.41197 8.67844e-05 0.388161 0.84456 0.0897792 1.99043C0.0897792 1.99136 0.0888672 1.9923 0.0888672 1.99323L9.87617 12Z" fill="#34A853" />
                  </svg>
                  <div className="flex flex-col leading-none">
                    <span className="text-[10px]  font-normal text-gray-100 mb-1">Get it on</span>
                    <span className="text-lg font-normal tracking-tight">Google Play</span>
                  </div>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="pt-7 border-t border-slate-200 flex justify-center"
        >
          <p className="text-slate-500 font-normal text-base tracking-tight">
            © 2026 Derek-Cat Inc. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
