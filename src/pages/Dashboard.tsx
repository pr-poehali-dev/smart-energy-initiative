import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "@/context/AuthContext"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useTheme } from "@/context/ThemeContext"
import Icon from "@/components/ui/icon"

const transactions = [
  { id: 1, type: "in", title: "Пополнение счёта", amount: 50000, date: "03.04.2026", status: "success" },
  { id: 2, type: "out", title: "Перевод Марии Ивановой", amount: -12500, date: "02.04.2026", status: "success" },
  { id: 3, type: "out", title: "Оплата услуг ООО Ромашка", amount: -8900, date: "01.04.2026", status: "success" },
  { id: 4, type: "in", title: "Возврат от поставщика", amount: 3200, date: "31.03.2026", status: "success" },
  { id: 5, type: "out", title: "Перевод Дмитрию Козлову", amount: -25000, date: "30.03.2026", status: "pending" },
]

const cards = [
  { last4: "4521", type: "Visa", color: "from-green-700 to-green-900", balance: 145200 },
  { last4: "9876", type: "Mastercard", color: "from-slate-700 to-slate-900", balance: 32000 },
]

export default function Dashboard() {
  const { user, logout } = useAuth()
  const { theme, toggle } = useTheme()
  const navigate = useNavigate()
  const [transferOpen, setTransferOpen] = useState(false)
  const [transferForm, setTransferForm] = useState({ to: "", amount: "", note: "" })
  const [transferSuccess, setTransferSuccess] = useState(false)
  const [transferLoading, setTransferLoading] = useState(false)
  const [activeTab, setActiveTab] = useState("overview")

  if (!user) { navigate("/login"); return null }

  const handleLogout = () => { logout(); navigate("/") }

  const handleTransfer = async (e: React.FormEvent) => {
    e.preventDefault()
    setTransferLoading(true)
    await new Promise((r) => setTimeout(r, 1200))
    setTransferLoading(false)
    setTransferSuccess(true)
    setTimeout(() => { setTransferSuccess(false); setTransferOpen(false); setTransferForm({ to: "", amount: "", note: "" }) }, 2000)
  }

  const tabs = [
    { id: "overview", label: "Обзор", icon: "LayoutDashboard" },
    { id: "cards", label: "Карты", icon: "CreditCard" },
    { id: "history", label: "История", icon: "History" },
    { id: "security", label: "Безопасность", icon: "ShieldCheck" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <SberLogo />
            <span className="font-bold text-lg text-foreground">СберПэй</span>
          </div>
          <div className="flex items-center gap-3">
            {user.role === "admin" && (
              <Button variant="outline" size="sm" onClick={() => navigate("/admin")} className="text-primary border-primary">
                <Icon name="Settings" size={14} className="mr-1" /> Админ-панель
              </Button>
            )}
            <button onClick={toggle} className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground">
              <Icon name={theme === "dark" ? "Sun" : "Moon"} size={18} />
            </button>
            <div className="flex items-center gap-2 text-sm text-foreground">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold text-xs">
                {user.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
              </div>
              <span className="hidden sm:block">{user.name}</span>
            </div>
            <Button variant="ghost" size="sm" onClick={handleLogout} className="text-muted-foreground">
              <Icon name="LogOut" size={16} />
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex gap-2 mb-6 bg-muted rounded-xl p-1 w-fit">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === tab.id ? "bg-card shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon name={tab.icon} size={15} fallback="Circle" />
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === "overview" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-card border border-border rounded-2xl p-5">
                <p className="text-sm text-muted-foreground mb-1">Общий баланс</p>
                <p className="text-3xl font-bold text-foreground">{user.balance.toLocaleString("ru-RU")} ₽</p>
                <p className="text-xs text-green-500 mt-1 flex items-center gap-1"><Icon name="TrendingUp" size={12} /> +5.2% за месяц</p>
              </div>
              <div className="bg-card border border-border rounded-2xl p-5">
                <p className="text-sm text-muted-foreground mb-1">Расходы за месяц</p>
                <p className="text-3xl font-bold text-foreground">46 400 ₽</p>
                <p className="text-xs text-muted-foreground mt-1">4 транзакции</p>
              </div>
              <div className="bg-card border border-border rounded-2xl p-5">
                <p className="text-sm text-muted-foreground mb-1">Доходы за месяц</p>
                <p className="text-3xl font-bold text-foreground">53 200 ₽</p>
                <p className="text-xs text-green-500 mt-1 flex items-center gap-1"><Icon name="ArrowDownLeft" size={12} /> 2 поступления</p>
              </div>
            </div>

            <div className="flex gap-3">
              <Button onClick={() => setTransferOpen(true)} className="bg-primary text-primary-foreground hover:bg-primary/90 flex-1 sm:flex-none">
                <Icon name="Send" size={16} className="mr-2" /> Перевести
              </Button>
              <Button variant="outline" className="flex-1 sm:flex-none">
                <Icon name="Plus" size={16} className="mr-2" /> Пополнить
              </Button>
              <Button variant="outline" className="flex-1 sm:flex-none">
                <Icon name="QrCode" size={16} className="mr-2" /> QR-код
              </Button>
            </div>

            <div className="bg-card border border-border rounded-2xl p-5">
              <h3 className="font-semibold text-foreground mb-4">Последние операции</h3>
              <div className="space-y-3">
                {transactions.slice(0, 5).map((tx) => (
                  <div key={tx.id} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-full flex items-center justify-center ${tx.type === "in" ? "bg-green-100 dark:bg-green-900/30" : "bg-red-100 dark:bg-red-900/30"}`}>
                        <Icon name={tx.type === "in" ? "ArrowDownLeft" : "ArrowUpRight"} size={16} className={tx.type === "in" ? "text-green-600" : "text-red-500"} />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">{tx.title}</p>
                        <p className="text-xs text-muted-foreground">{tx.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`text-sm font-semibold ${tx.amount > 0 ? "text-green-500" : "text-foreground"}`}>
                        {tx.amount > 0 ? "+" : ""}{tx.amount.toLocaleString("ru-RU")} ₽
                      </p>
                      <p className={`text-xs ${tx.status === "pending" ? "text-yellow-500" : "text-muted-foreground"}`}>
                        {tx.status === "pending" ? "В обработке" : "Выполнено"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "cards" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {cards.map((card) => (
                <div key={card.last4} className={`bg-gradient-to-br ${card.color} rounded-2xl p-6 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/5 -translate-y-8 translate-x-8" />
                  <p className="text-sm opacity-70 mb-4">{card.type}</p>
                  <p className="text-xl font-mono tracking-widest mb-6">•••• •••• •••• {card.last4}</p>
                  <p className="text-2xl font-bold">{card.balance.toLocaleString("ru-RU")} ₽</p>
                  <p className="text-xs opacity-60 mt-1">Доступно</p>
                </div>
              ))}
              <div className="border-2 border-dashed border-border rounded-2xl p-6 flex items-center justify-center cursor-pointer hover:border-primary hover:bg-primary/5 transition-colors">
                <div className="text-center">
                  <Icon name="Plus" size={24} className="mx-auto text-muted-foreground mb-2" />
                  <p className="text-sm text-muted-foreground">Добавить карту</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "history" && (
          <div className="bg-card border border-border rounded-2xl overflow-hidden">
            <div className="p-5 border-b border-border flex items-center justify-between">
              <h3 className="font-semibold text-foreground">История операций</h3>
              <Button variant="outline" size="sm"><Icon name="Download" size={14} className="mr-2" />Скачать</Button>
            </div>
            <div className="divide-y divide-border">
              {transactions.map((tx) => (
                <div key={tx.id} className="flex items-center justify-between p-4 hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center ${tx.type === "in" ? "bg-green-100 dark:bg-green-900/30" : "bg-red-100 dark:bg-red-900/30"}`}>
                      <Icon name={tx.type === "in" ? "ArrowDownLeft" : "ArrowUpRight"} size={16} className={tx.type === "in" ? "text-green-600" : "text-red-500"} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{tx.title}</p>
                      <p className="text-xs text-muted-foreground">{tx.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`text-xs px-2 py-0.5 rounded-full ${tx.status === "pending" ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400" : "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"}`}>
                      {tx.status === "pending" ? "В обработке" : "Выполнено"}
                    </span>
                    <p className={`text-sm font-semibold ${tx.amount > 0 ? "text-green-500" : "text-foreground"}`}>
                      {tx.amount > 0 ? "+" : ""}{tx.amount.toLocaleString("ru-RU")} ₽
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "security" && (
          <div className="space-y-4 max-w-lg">
            <div className="bg-card border border-border rounded-2xl p-5">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <Icon name="ShieldCheck" size={18} className="text-green-500" />
                Безопасность аккаунта
              </h3>
              <div className="space-y-3">
                {[
                  { label: "Двухфакторная аутентификация", desc: "SMS или приложение", enabled: true },
                  { label: "Уведомления о входе", desc: "Email-уведомление при каждом входе", enabled: true },
                  { label: "Биометрия", desc: "Вход по отпечатку или Face ID", enabled: false },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                    <div>
                      <p className="text-sm font-medium text-foreground">{item.label}</p>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                    <div className={`w-10 h-5 rounded-full flex items-center px-0.5 cursor-pointer transition-colors ${item.enabled ? "bg-primary justify-end" : "bg-muted justify-start"}`}>
                      <div className="w-4 h-4 bg-white rounded-full shadow" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-card border border-border rounded-2xl p-5">
              <h3 className="font-semibold text-foreground mb-3">Сменить пароль</h3>
              <div className="space-y-3">
                <Input type="password" placeholder="Текущий пароль" />
                <Input type="password" placeholder="Новый пароль" />
                <Input type="password" placeholder="Повторите новый пароль" />
                <Button className="w-full bg-primary text-primary-foreground">Сохранить</Button>
              </div>
            </div>
          </div>
        )}
      </div>

      <Dialog open={transferOpen} onOpenChange={setTransferOpen}>
        <DialogContent className="bg-card border-border">
          <DialogHeader>
            <DialogTitle className="text-foreground">Перевод средств</DialogTitle>
          </DialogHeader>
          {transferSuccess ? (
            <div className="flex flex-col items-center py-6">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-3">
                <Icon name="CheckCircle2" size={32} className="text-green-500" />
              </div>
              <p className="text-lg font-semibold text-foreground">Перевод выполнен!</p>
              <p className="text-sm text-muted-foreground">{transferForm.amount} ₽ успешно отправлено</p>
            </div>
          ) : (
            <form onSubmit={handleTransfer} className="space-y-4 pt-2">
              <div>
                <Label>Получатель (телефон или email)</Label>
                <Input placeholder="+7 (___) ___-__-__ или email" value={transferForm.to} onChange={(e) => setTransferForm((f) => ({ ...f, to: e.target.value }))} className="mt-1.5" />
              </div>
              <div>
                <Label>Сумма</Label>
                <div className="relative mt-1.5">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">₽</span>
                  <Input type="number" placeholder="0" className="pl-7" value={transferForm.amount} onChange={(e) => setTransferForm((f) => ({ ...f, amount: e.target.value }))} />
                </div>
              </div>
              <div>
                <Label>Сообщение (необязательно)</Label>
                <Input placeholder="За что перевод?" value={transferForm.note} onChange={(e) => setTransferForm((f) => ({ ...f, note: e.target.value }))} className="mt-1.5" />
              </div>
              <Button type="submit" className="w-full bg-primary text-primary-foreground" disabled={transferLoading}>
                {transferLoading ? <><Icon name="Loader2" size={16} className="animate-spin mr-2" />Отправляем...</> : `Перевести ${transferForm.amount ? transferForm.amount + " ₽" : ""}`}
              </Button>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

function SberLogo() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="8" fill="#21A038" />
      <path d="M16 7C11.03 7 7 11.03 7 16C7 20.97 11.03 25 16 25C20.97 25 25 20.97 25 16" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M20 10L25 16L20 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
