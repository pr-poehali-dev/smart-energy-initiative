import { ArrowUpRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center px-4 pt-16 pb-10 text-center">
      <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#0f1f0f] border border-green-900/50 py-2 text-sm px-3">
        <span className="rounded-full bg-green-500/20 px-2 py-0.5 text-xs font-medium text-green-400">НОВИНКА</span>
        <span className="text-gray-300">Переводы 24/7 без комиссии</span>
        <ArrowUpRight className="h-4 w-4 text-gray-400" />
      </div>

      <h1 className="mb-4 max-w-3xl text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white text-balance">
        Платежи, которым{" "}
        <span className="text-green-400">доверяет бизнес</span>
      </h1>

      <p className="mb-8 max-w-xl text-gray-400 text-lg">
        Мгновенные переводы, защита от мошенничества и полный контроль над финансами — в одном сервисе.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <Button className="rounded-full bg-green-600 px-8 py-6 text-base hover:bg-green-700 text-white font-semibold shadow-lg shadow-green-900/40">
          Открыть счёт бесплатно <ArrowUpRight className="ml-2 h-5 w-5" />
        </Button>
        <Button variant="outline" className="rounded-full border-gray-700 bg-transparent text-white hover:bg-gray-800 px-6 py-6 text-base">
          <Play className="mr-2 h-4 w-4 fill-green-500 text-green-500" /> Смотреть обзор
        </Button>
      </div>

      <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <span className="text-green-400 font-bold text-lg">10M+</span>
          <span>клиентов</span>
        </div>
        <div className="w-px h-4 bg-gray-700" />
        <div className="flex items-center gap-2">
          <span className="text-green-400 font-bold text-lg">₽2 трлн</span>
          <span>переведено</span>
        </div>
        <div className="w-px h-4 bg-gray-700" />
        <div className="flex items-center gap-2">
          <span className="text-green-400 font-bold text-lg">99.9%</span>
          <span>надёжность</span>
        </div>
      </div>
    </section>
  )
}
