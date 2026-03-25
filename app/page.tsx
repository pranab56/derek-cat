import { CTASection } from "@/components/CTASection"
import { DetailsSection } from "@/components/DetailsSection"
import { FAQSection } from "@/components/FAQSection"
import { Features } from "@/components/Features"
import { Hero } from "@/components/Hero"
import { HowItWorks } from "@/components/HowItWorks"
import { Pricing } from "@/components/Pricing"
import { Testimonials } from "@/components/Testimonials"

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Features />
      <div className='py-28 bg-white'>
        <DetailsSection
          title="Coordinate with your Friends instead of team effortlessly"
          description="Whether you’re planning a getaway or just grabbing dinner, the Cat Herding App makes it easy to synchronize everyone’s busy schedule to find a time to connect with friends with features such as:"
          points={["Finding days that are available ", "Suggesting and voting on the best dates and times", "RSVP Tracking ", "Creating to-do lists and managing responsibilities ", "In event messaging "]}
          imageSide="right"
          illustrationColor="bg-brand/10"
          emoji="👥"
        />

      </div>

      <HowItWorks />
      <Pricing />
      <Testimonials />
      <FAQSection />
      <CTASection />
    </main>
  )
}
