"use client"

import { Search } from "lucide-react"

export function FAQHero() {


  return (
    <section className="bg-[#0b0e1f] py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden ">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-brand/10 blur-[130px] rounded-full" />

      <div className="mx-auto max-w-4xl text-center relative z-10">
        <h1 className="text-4xl md:text-4xl font-semibold text-white tracking-tight mb-8">
          How can we help?
        </h1>

        <div className="relative group max-w-2xl mx-auto">
          <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-slate-400 group-focus-within:text-brand transition-colors" />
          </div>
          <input
            type="text"
            placeholder="Search for questions, tutorials, or troubleshooting ..."
            className="w-full bg-white rounded-2xl py-4 pl-14 pr-8 text-slate-900 font-normal placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-brand/20 transition-all shadow-2xl shadow-brand/10 text-sm md:text-base border border-white/10"
          />
        </div>
      </div>
    </section>
  )
}
