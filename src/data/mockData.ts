import type { MutualFund } from '../types'

export const mutualFunds: MutualFund[] = [
  {
    id: 'vf-growth',
    name: 'Vertex Flexi Cap Fund',
    amc: 'Vertex AMC',
    category: 'Flexi Cap',
    risk: 'High',
    nav: 68.42,
    aumCr: 12400,
    expenseRatio: 0.62,
    returns1y: 18.4,
    returns3y: 14.2,
    returns5y: 16.8,
    minSip: 500,
    rating: 5,
    objective:
      'Long-term capital appreciation by investing across market caps with a flexi-cap mandate.',
  },
  {
    id: 'hl-balanced',
    name: 'Harbor Balanced Advantage Fund',
    amc: 'Harbor Mutual Fund',
    category: 'Balanced Advantage',
    risk: 'Moderate',
    nav: 42.15,
    aumCr: 8900,
    expenseRatio: 0.71,
    returns1y: 12.1,
    returns3y: 11.4,
    returns5y: 12.9,
    minSip: 500,
    rating: 4,
    objective:
      'Dynamic allocation between equity and debt to manage volatility while seeking growth.',
  },
  {
    id: 'ns-elss',
    name: 'Northstar Tax Saver (ELSS)',
    amc: 'Northstar AMC',
    category: 'ELSS',
    risk: 'High',
    nav: 91.03,
    aumCr: 5600,
    expenseRatio: 0.85,
    returns1y: 15.7,
    returns3y: 13.1,
    returns5y: 15.2,
    minSip: 500,
    rating: 4,
    objective: 'Tax saving under Section 80C with a three-year lock-in and equity exposure.',
  },
  {
    id: 'ri-liquid',
    name: 'Ridge Liquid Fund',
    amc: 'Ridge Asset Management',
    category: 'Liquid',
    risk: 'Low',
    nav: 2856.22,
    aumCr: 45200,
    expenseRatio: 0.18,
    returns1y: 6.8,
    returns3y: 6.2,
    returns5y: 6.5,
    minSip: 1000,
    rating: 5,
    objective: 'Capital preservation and liquidity with minimal interest-rate risk.',
  },
  {
    id: 'cf-mid',
    name: 'Crest Midcap Opportunities',
    amc: 'Crest Mutual Fund',
    category: 'Mid Cap',
    risk: 'High',
    nav: 124.88,
    aumCr: 3200,
    expenseRatio: 0.78,
    returns1y: 22.3,
    returns3y: 18.9,
    returns5y: 19.4,
    minSip: 500,
    rating: 4,
    objective: 'Focus on emerging mid-cap companies with scalable business models.',
  },
  {
    id: 'mp-debt',
    name: 'Maple Corporate Bond Fund',
    amc: 'Maple MF',
    category: 'Corporate Bond',
    risk: 'Moderate',
    nav: 28.94,
    aumCr: 2100,
    expenseRatio: 0.45,
    returns1y: 7.9,
    returns3y: 7.4,
    returns5y: 8.1,
    minSip: 1000,
    rating: 4,
    objective: 'Income through high-quality corporate debt with active duration management.',
  },
]

export function getFundById(id: string): MutualFund | undefined {
  return mutualFunds.find((f) => f.id === id)
}

export const companyStats = {
  schemesLive: 12,
  aumCr: 18420,
  monthlyInflowCr: 342,
  pendingApprovals: 3,
}

export const distributorStats = {
  activeClients: 1847,
  aumCr: 428,
  mtdCommissionLakh: 12.4,
  agents: 24,
}

export const agentStats = {
  leadsMonth: 56,
  kycPending: 8,
  sipBookedMonth: 34,
  targetPercent: 72,
}

export const companyLeads = [
  { id: '1', name: 'Rahul Verma', city: 'Pune', interest: 'ELSS', status: 'New' },
  { id: '2', name: 'Anita Desai', city: 'Mumbai', interest: 'Flexi Cap', status: 'Contacted' },
  { id: '3', name: 'Karthik Iyer', city: 'Chennai', interest: 'Liquid', status: 'New' },
]

export const distributorClients = [
  { id: 'c1', name: 'Meera Shah', folios: 4, aumLakh: 42.1, lastTxn: 'SIP — 01 Apr 2026' },
  { id: 'c2', name: 'Vikram Patel', folios: 2, aumLakh: 18.6, lastTxn: 'Lumpsum — 28 Mar 2026' },
  { id: 'c3', name: 'Sneha Reddy', folios: 6, aumLakh: 95.3, lastTxn: 'Switch — 25 Mar 2026' },
]

export const agentPipeline = [
  { id: 'p1', investor: 'Arjun Mehta', product: 'SIP — Vertex Flexi', stage: 'KYC', amount: '₹5,000/mo' },
  { id: 'p2', investor: 'Divya Nair', product: 'Lumpsum — ELSS', stage: 'Payment', amount: '₹1,50,000' },
  { id: 'p3', investor: 'Mohit Singh', product: 'SIP — Midcap', stage: 'Proposal', amount: '₹10,000/mo' },
]
