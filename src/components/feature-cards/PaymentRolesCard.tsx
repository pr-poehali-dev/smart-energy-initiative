import { ShieldCheck, ArrowUpRight, Building2, ChevronDown, Info } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export function PaymentRolesCard() {
  return (
    <div className="rounded-2xl bg-[#0e1a0e] border border-[#1e2e1e] p-6 flex flex-col">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-green-900/30 border border-green-800/40">
        <ShieldCheck className="h-5 w-5 text-green-400" />
      </div>

      <h3 className="mb-2 text-lg font-semibold text-white">Безопасность и контроль</h3>
      <p className="mb-4 text-sm text-gray-400">Настройте лимиты, роли и согласования для каждого сотрудника</p>

      <a href="#" className="mb-6 inline-flex items-center text-sm text-green-400 hover:text-green-300 transition-colors">
        Подробнее <ArrowUpRight className="ml-1 h-4 w-4" />
      </a>

      <div className="mt-auto space-y-4 rounded-xl bg-[#0a120a] border border-[#1e2e1e] p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src="/professional-man-portrait.png" alt="Алексей Петров" />
              <AvatarFallback className="bg-gray-700 text-white">АП</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium text-white">Алексей Петров</p>
              <p className="text-xs text-gray-500">Финансовый директор</p>
            </div>
          </div>
          <button className="text-sm text-green-400 hover:text-green-300">Изменить</button>
        </div>

        <div>
          <label className="mb-2 flex items-center gap-1 text-xs text-gray-400">
            Способ оплаты <Info className="h-3 w-3" />
          </label>
          <div className="flex items-center justify-between rounded-lg bg-[#111b11] border border-[#1e2e1e] px-3 py-2.5">
            <span className="text-sm text-white">Банковский перевод (СБП)</span>
            <ChevronDown className="h-4 w-4 text-gray-500" />
          </div>
          <p className="mt-1 text-xs text-gray-500">Перевод мгновенно, без комиссии.</p>
        </div>

        <div className="border-t border-dashed border-[#1e2e1e] pt-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#111b11] border border-[#1e2e1e]">
                <Building2 className="h-5 w-5 text-green-500" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">ООО «Ромашка»</p>
                <p className="text-xs text-gray-500">Счёт ••9876 · БИК ••5432</p>
              </div>
            </div>
            <button className="text-sm text-green-400 hover:text-green-300">Изменить</button>
          </div>
        </div>

        <Button className="w-full bg-green-700 text-white hover:bg-green-600 font-semibold">Подтвердить</Button>
      </div>
    </div>
  )
}
