"use client"

import { Button } from "@/components/ui/button"
import { AnimatePresence, motion, type Variants } from "framer-motion"
import { Menu, X } from "lucide-react"
import Image from 'next/image'
import Link from "next/link"
import { usePathname, useRouter } from 'next/navigation'
import { useState } from "react"

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

const headerVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
}

const navItemVariants: Variants = {
  hidden: { opacity: 0, y: -8 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: EASE, delay: 0.2 + i * 0.1 },
  }),
}

const mobileMenuVariants: Variants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.38, ease: EASE },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.28, ease: EASE },
  },
}

const mobileNavItemVariants: Variants = {
  hidden: { opacity: 0, x: -16 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, ease: EASE, delay: i * 0.08 },
  }),
}

const navLinks = [
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
]

export function Header() {
  const router = useRouter()
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-[#f3f6ff]/50 w-full max-w-[100vw]"
    >
      {/* Main header row */}
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-10 lg:px-24 py-3 sm:py-4 lg:py-5 w-full">

        {/* Logo */}
        <motion.div
          onClick={() => router.push("/")}
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
          className="flex cursor-pointer h-9 w-9 sm:h-10 sm:w-10 lg:h-12 lg:w-12 items-center justify-center rounded-xl lg:rounded-2xl bg-brand shadow-xl shadow-brand/30"
        >
          <Image
            src={"/images/logo.png"}
            height={1000}
            width={1000}
            alt="logo"
            className="w-full h-full"
          />
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 md:gap-8 lg:gap-12 md:flex">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.href}
              custom={i}
              variants={navItemVariants}
              initial="hidden"
              animate="visible"
            >
              <Link
                href={link.href}
                className={`text-sm font-bold transition-colors hover:text-brand ${pathname === link.href ? "text-brand" : "text-slate-700"
                  }`}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Desktop CTA + Mobile hamburger */}
        <div className="flex items-center gap-3">
          {/* Desktop CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, ease: EASE, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="hidden md:block"
          >
            <Button className="rounded-sm cursor-pointer bg-brand px-5 md:px-6 lg:px-8 py-4 md:py-5 lg:py-6 text-sm lg:text-base font-medium text-white transition-all hover:bg-brand/90 shadow-lg shadow-brand/20 border-none">
              Download App
            </Button>
          </motion.div>

          {/* Mobile hamburger */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="md:hidden flex items-center justify-center h-9 w-9 rounded-lg bg-brand/10 text-brand"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-5 w-5" />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-5 w-5" />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      <AnimatePresence initial={false}>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden overflow-hidden bg-[#f3f6ff]/98 backdrop-blur-md border-t border-brand/10 shadow-lg"
          >
            <div className="flex flex-col px-4 sm:px-6 py-3 sm:py-4 gap-1.5 sm:gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  custom={i}
                  variants={mobileNavItemVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block w-full text-sm font-bold py-3 sm:py-2.5 px-3 rounded-lg transition-colors hover:bg-brand/10 hover:text-brand ${pathname === link.href ? "text-brand bg-brand/5" : "text-slate-700"}`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                custom={navLinks.length}
                variants={mobileNavItemVariants}
                initial="hidden"
                animate="visible"
                className="mt-2"
              >
                <Button className="w-full rounded-lg cursor-pointer bg-brand py-5 text-sm font-medium text-white hover:bg-brand/90 shadow-lg shadow-brand/20 border-none">
                  Download App
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
