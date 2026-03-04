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
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at."
          points={["Detail point one lorem ipsum", "Detail point two sit amet"]}
          imageSide="right"
          illustrationColor="bg-brand/10"
          emoji="👥"
        />
        <DetailsSection
          title="Seamless attendee check-in"
          description="Adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at. Curabitur vel interdum lorem."
          points={["QR code scanning built-in", "Detail point two sit amet"]}
          imageSide="left"
          illustrationColor="bg-brand/10"
          emoji="📱"
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
