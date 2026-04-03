import Icon from "@/components/ui/icon"

const items = [
  {
    icon: "ShieldCheck",
    title: "Шифрование данных",
    desc: "Все транзакции защищены шифрованием AES-256. Ваши данные надёжно защищены на каждом этапе.",
  },
  {
    icon: "Fingerprint",
    title: "Биометрия и 2FA",
    desc: "Двухфакторная аутентификация и биометрический вход обеспечивают доступ только вам.",
  },
  {
    icon: "Eye",
    title: "Антифрод-система",
    desc: "Искусственный интеллект анализирует каждую транзакцию и блокирует подозрительные операции.",
  },
  {
    icon: "RefreshCw",
    title: "Мгновенный возврат",
    desc: "При несанкционированном списании мы возвращаем деньги в течение 24 часов без лишних вопросов.",
  },
  {
    icon: "Lock",
    title: "Соответствие 152-ФЗ",
    desc: "Полное соответствие российскому законодательству о защите персональных данных.",
  },
  {
    icon: "Activity",
    title: "Мониторинг 24/7",
    desc: "Наша команда безопасности следит за системой круглосуточно и реагирует за минуты.",
  },
]

export function SecuritySection() {
  return (
    <section id="security" className="py-20 px-4 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-sm text-primary font-medium mb-4">
            <Icon name="Shield" size={14} /> Безопасность
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Ваши деньги под защитой</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Используем технологии банковского уровня, чтобы каждый рубль был в безопасности
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item) => (
            <div key={item.title} className="bg-card border border-border rounded-2xl p-5 hover:border-primary/30 transition-colors">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Icon name={item.icon} size={20} className="text-primary" fallback="Shield" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
