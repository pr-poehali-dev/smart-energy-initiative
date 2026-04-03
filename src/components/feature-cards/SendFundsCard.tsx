import { Zap, Building2, ChevronDown, Info } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { ArrowUpRight } from "lucide-react"

export function SendFundsCard() {
  return (
    <div className="rounded-2xl bg-[#0e1a0e] border border-[#1e2e1e] p-6 flex flex-col">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-green-900/30 border border-green-800/40">
        <Zap className="h-5 w-5 text-green-400" />
      </div>

      <h3 className="mb-2 text-lg font-semibold text-white">Мгновенные переводы</h3>
      <p className="mb-4 text-sm text-gray-400">Отправляйте деньги клиентам, партнёрам и поставщикам за секунды</p>

      <a href="#" className="mb-6 inline-flex items-center text-sm text-green-400 hover:text-green-300 transition-colors">
        Подробнее <ArrowUpRight className="ml-1 h-4 w-4" />
      </a>

      <div className="mt-auto space-y-4 rounded-xl bg-[#0a120a] border border-[#1e2e1e] p-4">
        <div className="flex items-center justify-between rounded-lg bg-[#111b11] border border-[#1e2e1e] px-3 py-2.5">
          <div className="flex items-center gap-3">
            <Building2 className="h-5 w-5 text-green-500" />
            <div>
              <p className="text-sm font-medium text-white">Расчётный счёт</p>
              <p className="text-xs text-gray-500">Доступно: 1 500 000 ₽</p>
            </div>
          </div>
          <ChevronDown className="h-4 w-4 text-gray-500" />
        </div>

        <div>
          <label className="mb-2 flex items-center gap-1 text-xs text-gray-400">
            Сумма перевода <Info className="h-3 w-3" />
          </label>
          <div className="flex items-center rounded-lg bg-[#111b11] border border-[#1e2e1e] px-3 py-2.5">
            <span className="text-green-400 mr-2 font-medium">₽</span>
            <input
              type="text"
              placeholder="0,00"
              className="flex-1 bg-transparent text-white placeholder-gray-600 outline-none text-sm"
            />
          </div>
        </div>

        <div>
          <label className="mb-2 flex items-center gap-1 text-xs text-gray-400">
            Назначение платежа <span className="text-green-400">*</span>
            <span className="text-gray-600">(необязательно)</span>
          </label>
          <div className="relative">
            <textarea
              placeholder="Сообщение для получателя..."
              className="w-full rounded-lg bg-[#111b11] border border-[#1e2e1e] px-3 py-2.5 text-sm text-white placeholder-gray-600 outline-none resize-none h-16 focus:border-green-700 transition-colors"
            />
            <span className="absolute bottom-2 right-2 text-xs text-gray-600">0/200</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2">
          <Switch className="data-[state=checked]:bg-green-600" />
          <span className="text-sm text-gray-400">Регулярный платёж</span>
        </div>
      </div>
    </div>
  )
}
