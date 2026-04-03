import { ShieldCheck, ArrowUpRight, Building2, ChevronDown, Info } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export function PaymentRolesCard() {
  return (
    <div className="rounded-2xl bg-card border border-border p-6 flex flex-col">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
        <ShieldCheck className="h-5 w-5 text-primary" />
      </div>

      <h3 className="mb-2 text-lg font-semibold text-foreground">Безопасность и контроль</h3>
      <p className="mb-4 text-sm text-muted-foreground">Настройте лимиты, роли и согласования для каждого сотрудника</p>

      <a href="#" className="mb-6 inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors">
        Подробнее <ArrowUpRight className="ml-1 h-4 w-4" />
      </a>

      <div className="mt-auto space-y-4 rounded-xl bg-muted/50 border border-border p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src="/professional-man-portrait.png" alt="Алексей Петров" />
              <AvatarFallback className="bg-muted text-foreground">АП</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium text-foreground">Алексей Петров</p>
              <p className="text-xs text-muted-foreground">Финансовый директор</p>
            </div>
          </div>
          <button className="text-sm text-primary hover:text-primary/80">Изменить</button>
        </div>

        <div>
          <label className="mb-2 flex items-center gap-1 text-xs text-muted-foreground">
            Способ оплаты <Info className="h-3 w-3" />
          </label>
          <div className="flex items-center justify-between rounded-lg bg-background border border-border px-3 py-2.5">
            <span className="text-sm text-foreground">Банковский перевод (СБП)</span>
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          </div>
          <p className="mt-1 text-xs text-muted-foreground">Перевод мгновенно, без комиссии.</p>
        </div>

        <div className="border-t border-dashed border-border pt-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-background border border-border">
                <Building2 className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">ООО «Ромашка»</p>
                <p className="text-xs text-muted-foreground">Счёт ••9876 · БИК ••5432</p>
              </div>
            </div>
            <button className="text-sm text-primary hover:text-primary/80">Изменить</button>
          </div>
        </div>

        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">Подтвердить</Button>
      </div>
    </div>
  )
}
