import { Zap, Building2, ChevronDown, Info } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { ArrowUpRight } from "lucide-react"

export function SendFundsCard() {
  return (
    <div className="rounded-2xl bg-card border border-border p-6 flex flex-col">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
        <Zap className="h-5 w-5 text-primary" />
      </div>

      <h3 className="mb-2 text-lg font-semibold text-foreground">Мгновенные переводы</h3>
      <p className="mb-4 text-sm text-muted-foreground">Отправляйте деньги клиентам, партнёрам и поставщикам за секунды</p>

      <a href="#" className="mb-6 inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors">
        Подробнее <ArrowUpRight className="ml-1 h-4 w-4" />
      </a>

      <div className="mt-auto space-y-4 rounded-xl bg-muted/50 border border-border p-4">
        <div className="flex items-center justify-between rounded-lg bg-background border border-border px-3 py-2.5">
          <div className="flex items-center gap-3">
            <Building2 className="h-5 w-5 text-primary" />
            <div>
              <p className="text-sm font-medium text-foreground">Расчётный счёт</p>
              <p className="text-xs text-muted-foreground">Доступно: 1 500 000 ₽</p>
            </div>
          </div>
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </div>

        <div>
          <label className="mb-2 flex items-center gap-1 text-xs text-muted-foreground">
            Сумма перевода <Info className="h-3 w-3" />
          </label>
          <div className="flex items-center rounded-lg bg-background border border-border px-3 py-2.5">
            <span className="text-primary mr-2 font-medium">₽</span>
            <input
              type="text"
              placeholder="0,00"
              className="flex-1 bg-transparent text-foreground placeholder-muted-foreground outline-none text-sm"
            />
          </div>
        </div>

        <div>
          <label className="mb-2 flex items-center gap-1 text-xs text-muted-foreground">
            Назначение платежа
            <span className="text-muted-foreground">(необязательно)</span>
          </label>
          <div className="relative">
            <textarea
              placeholder="Сообщение для получателя..."
              className="w-full rounded-lg bg-background border border-border px-3 py-2.5 text-sm text-foreground placeholder-muted-foreground outline-none resize-none h-16 focus:border-primary transition-colors"
            />
            <span className="absolute bottom-2 right-2 text-xs text-muted-foreground">0/200</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2">
          <Switch className="data-[state=checked]:bg-primary" />
          <span className="text-sm text-muted-foreground">Регулярный платёж</span>
        </div>
      </div>
    </div>
  )
}
