import { CTASection } from "@/components/CTASection";
import { Pricing } from "@/components/Pricing";
import { FAQSection } from '../../components/FAQSection';

export default function PricingPage() {
  return (
    <main className="">
      <div className="">
        <Pricing />
      </div>
      <FAQSection />
      <CTASection />
    </main>
  );
}