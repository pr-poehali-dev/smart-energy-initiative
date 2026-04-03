import { Building2, ArrowUpRight, Plus } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

const recipients = [
  { name: "Алексей Петров", info: "alexey@sberpay.ru", code: "₽ 48 200", image: "/professional-man-portrait.png" },
  { name: "Мария Иванова", info: "+7 (495) 123-45-67", code: "₽ 12 900", image: "/professional-woman-portrait.png" },
  { name: "Елена Смирнова", info: "elena@sberpay.ru", code: "₽ 5 750", initials: "ЕС", color: "bg-teal-600" },
  { name: "Дмитрий Козлов", info: "+7 (812) 987-65-43", code: "₽ 31 000", initials: "ДК", color: "bg-green-700" },
]

export function LinkAccountsCard() {
  return (
    <div className="rounded-2xl bg-card border border-border p-6 flex flex-col">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
        <Building2 className="h-5 w-5 text-primary" />
      </div>

      <h3 className="mb-2 text-lg font-semibold text-foreground">Все счета в одном месте</h3>
      <p className="mb-4 text-sm text-muted-foreground">Подключите банки, кошельки и карты — балансы и история всегда под рукой</p>

      <a href="#" className="mb-6 inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors">
        Подробнее <ArrowUpRight className="ml-1 h-4 w-4" />
      </a>

      <div className="mt-auto space-y-2 rounded-xl bg-muted/50 border border-border p-3">
        {recipients.map((recipient, index) => (
          <div key={index} className="flex items-center justify-between rounded-lg bg-background px-3 py-2">
            <div className="flex items-center gap-3">
              <Avatar className="h-9 w-9">
                {recipient.image ? (
                  <AvatarImage src={recipient.image} alt={recipient.name} />
                ) : null}
                <AvatarFallback className={`${recipient.color || "bg-muted"} text-white text-xs`}>
                  {recipient.initials ||
                    recipient.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium text-foreground">{recipient.name}</p>
                <p className="text-xs text-muted-foreground">{recipient.info}</p>
              </div>
            </div>
            <span className="text-xs font-medium text-primary">{recipient.code}</span>
          </div>
        ))}

        <Button variant="ghost" className="w-full justify-center text-muted-foreground hover:text-foreground mt-2">
          <Plus className="mr-2 h-4 w-4" /> Добавить счёт
        </Button>
      </div>
    </div>
  )
}
