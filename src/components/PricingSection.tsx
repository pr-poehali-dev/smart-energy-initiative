import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const plans = [
  {
    name: "Базовый",
    price: "0",
    desc: "Для старта",
    features: ["До 50 транзакций в месяц", "Переводы по СБП", "Мобильное приложение", "Поддержка 24/7"],
    cta: "Начать бесплатно",
    highlight: false,
  },
  {
    name: "Бизнес",
    price: "990",
    desc: "Для растущих компаний",
    features: ["Неограниченные транзакции", "Приоритетная поддержка", "API-интеграция", "Управление командой", "Аналитика и отчёты"],
    cta: "Выбрать план",
    highlight: true,
  },
  {
    name: "Корпоративный",
    price: "4 990",
    desc: "Для крупного бизнеса",
    features: ["Всё из Бизнес", "Персональный менеджер", "Индивидуальные лимиты", "SLA 99.99%", "Мультивалютные счета"],
    cta: "Связаться с нами",
    highlight: false,
  },
]

export function PricingSection() {
  const navigate = useNavigate()

  return (
    <section id="pricing" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Простые и честные тарифы</h2>
          <p className="text-muted-foreground">Никаких скрытых комиссий</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-6 border flex flex-col ${
                plan.highlight
                  ? "border-primary bg-primary/5 shadow-lg shadow-primary/10 relative"
                  : "border-border bg-card"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">Популярный</span>
                </div>
              )}
              <div className="mb-5">
                <p className="text-sm font-medium text-muted-foreground mb-1">{plan.name}</p>
                <div className="flex items-end gap-1 mb-1">
                  <span className="text-4xl font-bold text-foreground">{plan.price === "0" ? "Бесплатно" : `${plan.price} ₽`}</span>
                  {plan.price !== "0" && <span className="text-muted-foreground mb-1">/мес</span>}
                </div>
                <p className="text-sm text-muted-foreground">{plan.desc}</p>
              </div>

              <ul className="space-y-3 mb-6 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                    <Icon name="CheckCircle2" size={16} className="text-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => navigate("/register")}
                className={plan.highlight ? "bg-primary text-primary-foreground hover:bg-primary/90 w-full" : "w-full"}
                variant={plan.highlight ? "default" : "outline"}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
