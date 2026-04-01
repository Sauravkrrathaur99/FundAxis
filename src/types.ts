export type UserRole = 'company' | 'distributor' | 'agent'

export interface User {
  id: string
  email: string
  name: string
  role: UserRole
  orgName?: string
}

export interface MutualFund {
  id: string
  name: string
  amc: string
  category: string
  risk: 'Low' | 'Moderate' | 'High'
  nav: number
  aumCr: number
  expenseRatio: number
  returns1y: number
  returns3y: number
  returns5y: number
  minSip: number
  rating: number
  objective: string
}
