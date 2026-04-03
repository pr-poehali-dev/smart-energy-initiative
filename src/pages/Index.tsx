import { Header } from "@/components/Header"
import { HeroSection } from "@/components/HeroSection"
import { PartnersSection } from "@/components/PartnersSection"
import { FeaturesSection } from "@/components/FeaturesSection"

export default function Index() {
  return (
    <main className="min-h-screen bg-[#080f08]">
      <Header />
      <HeroSection />
      <PartnersSection />
      <FeaturesSection />
      <footer className="py-10 text-center text-sm text-gray-600 border-t border-[#1a2a1a]">
        <p className="mb-1">
          Надёжные платежи для вашего бизнеса —{" "}
          <span className="font-medium text-gray-400">работаем 24/7 без перерывов.</span>
        </p>
        <p className="text-xs text-gray-700">© 2024 СберПэй · Лицензия ЦБ РФ · Все права защищены</p>
      </footer>
    </main>
  )
}
