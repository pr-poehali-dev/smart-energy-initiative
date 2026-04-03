import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "@/context/AuthContext"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useTheme } from "@/context/ThemeContext"
import Icon from "@/components/ui/icon"

const mockUsers = [
  { id: "1", name: "Алексей Петров", email: "user@sberpay.ru", balance: 145200, status: "active", joined: "15.01.2024" },
  { id: "2", name: "Мария Иванова", email: "maria@mail.ru", balance: 32000, status: "active", joined: "20.02.2024" },
  { id: "3", name: "Дмитрий Козлов", email: "kozlov@mail.ru", balance: 8900, status: "blocked", joined: "05.03.2024" },
  { id: "4", name: "Елена Смирнова", email: "elena@mail.ru", balance: 67400, status: "active", joined: "11.03.2024" },
]

const mockTransactions = [
  { id: "tx001", from: "Алексей Петров", to: "Мария Иванова", amount: 12500, date: "03.04.2026", status: "success" },
  { id: "tx002", from: "Мария Иванова", to: "ООО Ромашка", amount: 8900, date: "02.04.2026", status: "success" },
  { id: "tx003", from: "Дмитрий Козлов", to: "Елена Смирнова", amount: 25000, date: "01.04.2026", status: "pending" },
  { id: "tx004", from: "Елена Смирнова", to: "Алексей Петров", amount: 3200, date: "31.03.2026", status: "success" },
]

const stats = [
  { label: "Всего пользователей", value: "4", icon: "Users", color: "text-blue-500", bg: "bg-blue-100 dark:bg-blue-900/30" },
  { label: "Оборот за месяц", value: "₽ 2.1М", icon: "TrendingUp", color: "text-green-500", bg: "bg-green-100 dark:bg-green-900/30" },
  { label: "Транзакций сегодня", value: "128", icon: "Activity", color: "text-purple-500", bg: "bg-purple-100 dark:bg-purple-900/30" },
  { label: "Активных сессий", value: "42", icon: "Wifi", color: "text-orange-500", bg: "bg-orange-100 dark:bg-orange-900/30" },
]

export default function Admin() {
  const { user, logout } = useAuth()
  const { theme, toggle } = useTheme()
  const navigate = useNavigate()
  const [tab, setTab] = useState("stats")
  const [search, setSearch] = useState("")
  const [users, setUsers] = useState(mockUsers)

  if (!user || user.role !== "admin") { navigate("/"); return null }

  const filteredUsers = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase()) ||
    u.email.toLowerCase().includes(search.toLowerCase())
  )

  const toggleBlock = (id: string) => {
    setUsers((prev) => prev.map((u) => u.id === id ? { ...u, status: u.status === "active" ? "blocked" : "active" } : u))
  }

  const tabs = [
    { id: "stats", label: "Статистика", icon: "BarChart2" },
    { id: "users", label: "Пользователи", icon: "Users" },
    { id: "transactions", label: "Транзакции", icon: "ArrowLeftRight" },
    { id: "settings", label: "Настройки сайта", icon: "Settings" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <SberLogo />
            <div>
              <span className="font-bold text-lg text-foreground">СберПэй</span>
              <span className="ml-2 text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full font-medium">Админ</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={toggle} className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground">
              <Icon name={theme === "dark" ? "Sun" : "Moon"} size={18} />
            </button>
            <Button variant="outline" size="sm" onClick={() => navigate("/dashboard")}>
              <Icon name="User" size={14} className="mr-1" /> Кабинет
            </Button>
            <Button variant="ghost" size="sm" onClick={() => { logout(); navigate("/") }} className="text-muted-foreground">
              <Icon name="LogOut" size={16} />
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex gap-2 mb-6 bg-muted rounded-xl p-1 w-fit flex-wrap">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                tab === t.id ? "bg-card shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon name={t.icon} size={15} fallback="Circle" />
              {t.label}
            </button>
          ))}
        </div>

        {tab === "stats" && (
          <div className="space-y-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-card border border-border rounded-2xl p-5">
                  <div className={`w-10 h-10 ${s.bg} rounded-xl flex items-center justify-center mb-3`}>
                    <Icon name={s.icon} size={20} className={s.color} fallback="Circle" />
                  </div>
                  <p className="text-2xl font-bold text-foreground">{s.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="bg-card border border-border rounded-2xl p-5">
                <h3 className="font-semibold text-foreground mb-4">Последние регистрации</h3>
                <div className="space-y-3">
                  {mockUsers.slice(0, 3).map((u) => (
                    <div key={u.id} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-semibold">
                          {u.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">{u.name}</p>
                          <p className="text-xs text-muted-foreground">{u.joined}</p>
                        </div>
                      </div>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${u.status === "active" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"}`}>
                        {u.status === "active" ? "Активен" : "Заблокирован"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-card border border-border rounded-2xl p-5">
                <h3 className="font-semibold text-foreground mb-4">Системные показатели</h3>
                <div className="space-y-4">
                  {[
                    { label: "Нагрузка сервера", value: 34 },
                    { label: "Использование БД", value: 62 },
                    { label: "Успешность транзакций", value: 98 },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-muted-foreground">{item.label}</span>
                        <span className="text-foreground font-medium">{item.value}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${item.value > 80 ? "bg-red-500" : item.value > 60 ? "bg-yellow-500" : "bg-primary"}`}
                          style={{ width: `${item.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {tab === "users" && (
          <div className="bg-card border border-border rounded-2xl overflow-hidden">
            <div className="p-5 border-b border-border flex items-center gap-3">
              <div className="relative flex-1 max-w-xs">
                <Icon name="Search" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Поиск пользователей..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9" />
              </div>
              <Button className="bg-primary text-primary-foreground"><Icon name="UserPlus" size={16} className="mr-2" />Добавить</Button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    {["Пользователь", "Баланс", "Статус", "Регистрация", "Действия"].map((h) => (
                      <th key={h} className="text-left px-5 py-3 text-xs font-semibold text-muted-foreground uppercase">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {filteredUsers.map((u) => (
                    <tr key={u.id} className="hover:bg-muted/30 transition-colors">
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-semibold">
                            {u.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                          </div>
                          <div>
                            <p className="text-sm font-medium text-foreground">{u.name}</p>
                            <p className="text-xs text-muted-foreground">{u.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-4 text-sm text-foreground font-medium">{u.balance.toLocaleString("ru-RU")} ₽</td>
                      <td className="px-5 py-4">
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${u.status === "active" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"}`}>
                          {u.status === "active" ? "Активен" : "Заблокирован"}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-sm text-muted-foreground">{u.joined}</td>
                      <td className="px-5 py-4">
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm" className="h-7 text-xs" onClick={() => toggleBlock(u.id)}>
                            <Icon name={u.status === "active" ? "Ban" : "CheckCircle"} size={13} className="mr-1" />
                            {u.status === "active" ? "Блок" : "Разблокировать"}
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {tab === "transactions" && (
          <div className="bg-card border border-border rounded-2xl overflow-hidden">
            <div className="p-5 border-b border-border flex items-center justify-between">
              <h3 className="font-semibold text-foreground">Все транзакции</h3>
              <Button variant="outline" size="sm"><Icon name="Download" size={14} className="mr-2" />Экспорт</Button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    {["ID", "Отправитель", "Получатель", "Сумма", "Дата", "Статус"].map((h) => (
                      <th key={h} className="text-left px-5 py-3 text-xs font-semibold text-muted-foreground uppercase">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {mockTransactions.map((tx) => (
                    <tr key={tx.id} className="hover:bg-muted/30 transition-colors">
                      <td className="px-5 py-4 text-xs text-muted-foreground font-mono">{tx.id}</td>
                      <td className="px-5 py-4 text-sm text-foreground">{tx.from}</td>
                      <td className="px-5 py-4 text-sm text-foreground">{tx.to}</td>
                      <td className="px-5 py-4 text-sm font-semibold text-foreground">{tx.amount.toLocaleString("ru-RU")} ₽</td>
                      <td className="px-5 py-4 text-sm text-muted-foreground">{tx.date}</td>
                      <td className="px-5 py-4">
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${tx.status === "success" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"}`}>
                          {tx.status === "success" ? "Выполнено" : "В обработке"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {tab === "settings" && (
          <div className="space-y-4 max-w-lg">
            <div className="bg-card border border-border rounded-2xl p-5 space-y-4">
              <h3 className="font-semibold text-foreground">Настройки сайта</h3>
              {[
                { label: "Название сервиса", defaultVal: "СберПэй" },
                { label: "Контактный email", defaultVal: "support@sberpay.ru" },
                { label: "Телефон поддержки", defaultVal: "8-800-555-55-55" },
              ].map((f) => (
                <div key={f.label} className="space-y-1.5">
                  <label className="text-sm font-medium text-foreground">{f.label}</label>
                  <Input defaultValue={f.defaultVal} />
                </div>
              ))}
              <Button className="w-full bg-primary text-primary-foreground">Сохранить изменения</Button>
            </div>
            <div className="bg-card border border-border rounded-2xl p-5 space-y-4">
              <h3 className="font-semibold text-foreground">Режимы работы</h3>
              {[
                { label: "Техническое обслуживание", desc: "Отключить доступ к сайту", enabled: false },
                { label: "Регистрация пользователей", desc: "Разрешить новые регистрации", enabled: true },
                { label: "Международные переводы", desc: "Переводы за рубеж", enabled: true },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between py-2 border-b border-border last:border-0">
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
        )}
      </div>
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
