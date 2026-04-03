import { createContext, useContext, useState, ReactNode } from "react"

export type UserRole = "user" | "admin"

export interface User {
  id: string
  name: string
  email: string
  role: UserRole
  balance: number
  phone: string
  createdAt: string
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<boolean>
  register: (name: string, email: string, phone: string, password: string) => Promise<boolean>
  logout: () => void
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | null>(null)

const DEMO_USERS: User[] = [
  {
    id: "1",
    name: "Алексей Петров",
    email: "user@sberpay.ru",
    role: "user",
    balance: 145200,
    phone: "+7 (495) 123-45-67",
    createdAt: "2024-01-15",
  },
  {
    id: "admin",
    name: "Администратор",
    email: "admin@sberpay.ru",
    role: "admin",
    balance: 0,
    phone: "+7 (495) 000-00-00",
    createdAt: "2023-01-01",
  },
]

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  const login = async (email: string, password: string): Promise<boolean> => {
    await new Promise((r) => setTimeout(r, 800))
    const found = DEMO_USERS.find((u) => u.email === email)
    if (found && password.length >= 6) {
      setUser(found)
      return true
    }
    return false
  }

  const register = async (name: string, email: string, phone: string, _password: string): Promise<boolean> => {
    await new Promise((r) => setTimeout(r, 1000))
    const newUser: User = {
      id: Date.now().toString(),
      name,
      email,
      phone,
      role: "user",
      balance: 0,
      createdAt: new Date().toISOString().split("T")[0],
    }
    setUser(newUser)
    return true
  }

  const logout = () => setUser(null)

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error("useAuth must be used within AuthProvider")
  return ctx
}
