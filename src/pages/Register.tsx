import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { useAuth } from "@/context/AuthContext"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import Icon from "@/components/ui/icon"

export default function Register() {
  const { register } = useAuth()
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: "", email: "", phone: "", password: "", confirm: "" })
  const [agreed, setAgreed] = useState(false)
  const [showPass, setShowPass] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    if (!form.name || !form.email || !form.phone || !form.password) { setError("Заполните все поля"); return }
    if (form.password.length < 8) { setError("Пароль должен быть не менее 8 символов"); return }
    if (form.password !== form.confirm) { setError("Пароли не совпадают"); return }
    if (!agreed) { setError("Необходимо принять условия"); return }
    setLoading(true)
    const ok = await register(form.name, form.email, form.phone, form.password)
    setLoading(false)
    if (ok) navigate("/dashboard")
  }

  const strength = form.password.length === 0 ? 0 : form.password.length < 8 ? 1 : form.password.length < 12 ? 2 : 3
  const strengthLabel = ["", "Слабый", "Средний", "Надёжный"]
  const strengthColor = ["", "bg-red-500", "bg-yellow-500", "bg-green-500"]

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-6">
            <SberLogo />
            <span className="text-xl font-bold text-foreground">СберПэй</span>
          </Link>
          <h1 className="text-2xl font-bold text-foreground">Создать аккаунт</h1>
          <p className="text-muted-foreground mt-1">Бесплатно — за 2 минуты</p>
        </div>

        <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label>Полное имя</Label>
              <div className="relative">
                <Icon name="User" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Иван Иванов" value={form.name} onChange={set("name")} className="pl-9" />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Email</Label>
              <div className="relative">
                <Icon name="Mail" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input type="email" placeholder="you@example.com" value={form.email} onChange={set("email")} className="pl-9" />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Телефон</Label>
              <div className="relative">
                <Icon name="Phone" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="+7 (___) ___-__-__" value={form.phone} onChange={set("phone")} className="pl-9" />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Пароль</Label>
              <div className="relative">
                <Icon name="Lock" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input type={showPass ? "text" : "password"} placeholder="Минимум 8 символов" value={form.password} onChange={set("password")} className="pl-9 pr-10" />
                <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                  <Icon name={showPass ? "EyeOff" : "Eye"} size={16} />
                </button>
              </div>
              {form.password.length > 0 && (
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex gap-1 flex-1">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className={`h-1 flex-1 rounded-full transition-colors ${strength >= i ? strengthColor[strength] : "bg-muted"}`} />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">{strengthLabel[strength]}</span>
                </div>
              )}
            </div>

            <div className="space-y-2">
              <Label>Повторите пароль</Label>
              <div className="relative">
                <Icon name="Lock" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input type="password" placeholder="••••••••" value={form.confirm} onChange={set("confirm")} className="pl-9" />
              </div>
            </div>

            <div className="flex items-start gap-2 pt-1">
              <Checkbox id="agree" checked={agreed} onCheckedChange={(v) => setAgreed(!!v)} className="mt-0.5" />
              <label htmlFor="agree" className="text-sm text-muted-foreground cursor-pointer">
                Я согласен с{" "}
                <span className="text-primary hover:underline cursor-pointer">условиями использования</span>{" "}
                и{" "}
                <span className="text-primary hover:underline cursor-pointer">политикой конфиденциальности</span>
              </label>
            </div>

            {error && (
              <div className="flex items-center gap-2 text-sm text-destructive bg-destructive/10 rounded-lg px-3 py-2">
                <Icon name="AlertCircle" size={14} />
                {error}
              </div>
            )}

            <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90" disabled={loading}>
              {loading ? <><Icon name="Loader2" size={16} className="animate-spin mr-2" />Создаём аккаунт...</> : "Создать аккаунт"}
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Уже есть аккаунт?{" "}
            <Link to="/login" className="text-primary font-medium hover:underline">
              Войти
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

function SberLogo() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="8" fill="#21A038" />
      <path d="M16 7C11.03 7 7 11.03 7 16C7 20.97 11.03 25 16 25C20.97 25 25 20.97 25 16" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M20 10L25 16L20 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
