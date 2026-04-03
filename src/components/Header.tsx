import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4 border-b border-[#1e2a1e] bg-[#0a120a]">
      <div className="flex items-center gap-2">
        <СберПэйLogo />
        <span className="text-lg font-bold text-white tracking-tight">
          СберПэй<sup className="text-xs font-normal text-green-400">™</sup>
        </span>
      </div>

      <nav className="hidden md:flex items-center gap-8">
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
          Продукты
        </a>
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-1">
          Решения <ChevronDown className="h-4 w-4" />
        </a>
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
          Бизнесу
        </a>
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
          Тарифы
        </a>
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
          Контакты
        </a>
      </nav>

      <Button
        variant="outline"
        className="rounded-full border-green-600 text-green-400 hover:bg-green-600/10 hover:text-green-300 bg-transparent"
      >
        Открыть счёт
      </Button>
    </header>
  )
}

function СберПэйLogo() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="8" fill="#21A038" />
      <path d="M16 7C11.03 7 7 11.03 7 16C7 20.97 11.03 25 16 25C20.97 25 25 20.97 25 16" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M20 10L25 16L20 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
