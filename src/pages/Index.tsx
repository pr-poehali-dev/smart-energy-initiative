import { Header } from "@/components/Header"
import { HeroSection } from "@/components/HeroSection"
import { PartnersSection } from "@/components/PartnersSection"
import { FeaturesSection } from "@/components/FeaturesSection"
import { SecuritySection } from "@/components/SecuritySection"
import { PricingSection } from "@/components/PricingSection"
import { CtaSection } from "@/components/CtaSection"

export default function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <PartnersSection />
      <FeaturesSection />
      <SecuritySection />
      <PricingSection />
      <CtaSection />
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2026 СберПэй · Лицензия ЦБ РФ · Все права защищены</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Условия</a>
            <a href="#" className="hover:text-foreground transition-colors">Конфиденциальность</a>
            <a href="#" className="hover:text-foreground transition-colors">Поддержка</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
