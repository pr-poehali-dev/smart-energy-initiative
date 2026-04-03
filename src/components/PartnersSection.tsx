import Icon from "@/components/ui/icon"

const partners = [
  { name: "Газпромбанк", icon: "Building2" },
  { name: "Россельхозбанк", icon: "Landmark" },
  { name: "Альфа-Банк", icon: "CreditCard" },
  { name: "ВТБ", icon: "Banknote" },
  { name: "Тинькофф", icon: "Wallet" },
  { name: "Райффайзен", icon: "ShieldCheck" },
  { name: "Росбанк", icon: "CircleDollarSign" },
]

export function PartnersSection() {
  return (
    <section className="py-10 px-4 border-y border-[#1a2a1a]">
      <p className="text-center text-xs text-gray-600 uppercase tracking-widest mb-6">Работаем с ведущими банками России</p>
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
        {partners.map((partner) => (
          <div key={partner.name} className="flex items-center gap-2 text-gray-500 hover:text-gray-300 transition-colors">
            <Icon name={partner.icon} size={16} fallback="Building2" />
            <span className="text-sm font-medium">{partner.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
