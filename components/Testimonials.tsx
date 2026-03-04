"use client"

import { motion, useInView, type Variants } from "framer-motion"
import { Star } from "lucide-react"
import { useRef } from "react"
import { Autoplay, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

const testimonials = [
  {
    text: "This platform has completely transformed how we handle large-scale corporate summits. The real-time tracking is a game- changer.",
    name: "David Chen",
    role: "SENIOR PARTNER, GLOBAL LAW",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
  },
  {
    text: "The attention to detail and ease of use is incredible. My clients love the professional experience it provides for their guests.",
    name: "David Chen",
    role: "SENIOR PARTNER, GLOBAL LAW",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Chen",
  },
  {
    text: "Simple, powerful, and intuitive. It's the most reliable event management tool we've used in the it provides for last decade.",
    name: "David Chen",
    role: "SENIOR PARTNER, GLOBAL LAW",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=DavidChen",
  },
  {
    text: "This platform has completely transformed how we handle large-scale corporate summits. The real-time tracking is a game- changer.",
    name: "David Chen",
    role: "SENIOR PARTNER, GLOBAL LAW",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David4",
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

const swiperVariants: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: EASE, delay: 0.2 },
  },
}

const starVariants: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: EASE, delay: i * 0.07 },
  }),
}

export function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section
      className="bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-10 lg:px-24"
      ref={ref}
    >
      <div className="mx-auto container">

        {/* Heading */}
        <motion.h2
          variants={headingVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-3xl sm:text-4xl font-semibold text-[#1a1f36] text-center mb-10 sm:mb-12 lg:mb-16"
        >
          What Our Users Say
        </motion.h2>

        {/* Swiper carousel */}
        <motion.div
          variants={swiperVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 5000 }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
            className="pb-14 sm:pb-16"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  // whileHover={{ y: -6, boxShadow: "0 24px 60px -12px rgba(0,0,0,0.12)" }}
                  // transition={{ duration: 0.3, ease: EASE }}
                  className="flex flex-col h-full bg-white rounded-xl p-5 sm:p-8 border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-300 cursor-default"
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-4 sm:mb-6">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        custom={i}
                        variants={starVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                      >
                        <Star className="h-5 w-5 sm:h-6 sm:w-6 fill-[#ffcc00] text-[#ffcc00]" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Quote text */}
                  <p className="text-sm sm:text-base lg:text-lg text-slate-500 font-normal mb-6 sm:mb-8 flex-1">
                    &quot;{item.text}&quot;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 sm:gap-4 border-t border-slate-50 pt-4 sm:pt-6">
                    <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-slate-100 overflow-hidden border-2 border-white shadow-sm shrink-0">
                      <img src={item.avatar} alt={item.name} className="h-full w-full object-cover" />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-normal text-slate-900 leading-none mb-1">{item.name}</h4>
                      <p className="text-xs sm:text-xs font-normal text-gray-500 ">{item.role}</p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

      </div>

      <style>{`
        .swiper-pagination-bullet {
          background: #668CF9 !important;
          opacity: 0.3;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          width: 24px;
          border-radius: 12px;
        }
      `}</style>
    </section>
  )
}
