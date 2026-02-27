"use client"

import { BookOpen, CreditCard, LifeBuoy, Users } from "lucide-react"

const categories = [
  {
    title: "Getting Started",
    description: "Learn the basics of event planning and setup.",
    icon: BookOpen,
  },
  {
    title: "Account Management",
    description: "Manage your profile, team, and security.",
    icon: Users,
  },
  {
    title: "Billing",
    description: "Payments, invoices, and subscription plans.",
    icon: CreditCard,
  },
  {
    title: "Technical Support",
    description: "Troubleshooting and API documentation.",
    icon: LifeBuoy,
  },
]

export function FAQCategories() {

  return (
    <section className="bg-white py-24 px-6 md:px-12 lg:px-24">
      <div className="mx-auto container">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#0b0e1f] tracking-tight mb-16">
          Browse by Category
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="category-card group p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-2 cursor-pointer"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/10 text-brand group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                <category.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-[#0b0e1f] mb-3 group-hover:text-brand transition-colors">
                {category.title}
              </h3>
              <p className="text-slate-500 font-medium leading-relaxed">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
