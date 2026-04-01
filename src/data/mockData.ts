import type { MutualFund } from '../types'

export const mutualFunds: MutualFund[] = [
  {
    id: 'sbi-bluechip',
    name: 'SBI Bluechip Fund',
    amc: 'SBI Mutual Fund',
    category: 'Flexi Cap',
    risk: 'High',
    nav: 86.31,
    aumCr: 46350,
    expenseRatio: 0.88,
    returns1y: 22.1,
    returns3y: 15.7,
    returns5y: 16.4,
    minSip: 500,
    rating: 5,
    objective:
      'Long-term wealth creation through large-cap oriented equity allocation and disciplined portfolio management.',
  },
  {
    id: 'hdfc-balanced-adv',
    name: 'HDFC Balanced Advantage Fund',
    amc: 'HDFC Mutual Fund',
    category: 'Balanced Advantage',
    risk: 'Moderate',
    nav: 61.84,
    aumCr: 78210,
    expenseRatio: 0.72,
    returns1y: 14.2,
    returns3y: 12.1,
    returns5y: 13.4,
    minSip: 500,
    rating: 4,
    objective:
      'Dynamic equity-debt rebalancing to manage volatility while targeting steady long-term returns.',
  },
  {
    id: 'uti-elss',
    name: 'UTI Long Term Equity Fund (ELSS)',
    amc: 'UTI Mutual Fund',
    category: 'ELSS',
    risk: 'High',
    nav: 210.44,
    aumCr: 3920,
    expenseRatio: 1.03,
    returns1y: 18.3,
    returns3y: 14.3,
    returns5y: 15.1,
    minSip: 500,
    rating: 4,
    objective: 'Tax saving under Section 80C with a three-year lock-in and diversified equity allocation.',
  },
  {
    id: 'icici-liquid',
    name: 'ICICI Prudential Liquid Fund',
    amc: 'ICICI Prudential Mutual Fund',
    category: 'Liquid',
    risk: 'Low',
    nav: 411.32,
    aumCr: 54890,
    expenseRatio: 0.18,
    returns1y: 7.2,
    returns3y: 6.5,
    returns5y: 6.2,
    minSip: 1000,
    rating: 5,
    objective: 'Short-term parking solution focused on liquidity, capital safety, and low duration risk.',
  },
  {
    id: 'bandhan-midcap',
    name: 'Bandhan Midcap Fund',
    amc: 'Bandhan Mutual Fund',
    category: 'Mid Cap',
    risk: 'High',
    nav: 41.27,
    aumCr: 6240,
    expenseRatio: 0.71,
    returns1y: 28.4,
    returns3y: 20.8,
    returns5y: 21.3,
    minSip: 500,
    rating: 4,
    objective: 'Long-term growth by investing in fundamentally strong mid-cap businesses in India.',
  },
  {
    id: 'nippon-corp-bond',
    name: 'Nippon India Corporate Bond Fund',
    amc: 'Nippon India Mutual Fund',
    category: 'Corporate Bond',
    risk: 'Moderate',
    nav: 63.48,
    aumCr: 19870,
    expenseRatio: 0.39,
    returns1y: 8.3,
    returns3y: 7.6,
    returns5y: 7.9,
    minSip: 1000,
    rating: 4,
    objective: 'Income generation through high-credit-quality corporate debt instruments.',
  },
]

export function getFundById(id: string): MutualFund | undefined {
  return mutualFunds.find((f) => f.id === id)
}

export const companyStats = {
  schemesLive: 26,
  aumCr: 127540,
  monthlyInflowCr: 1532,
  pendingApprovals: 7,
}

export const distributorStats = {
  activeClients: 3642,
  aumCr: 1286,
  mtdCommissionLakh: 39.7,
  agents: 46,
}

export const agentStats = {
  leadsMonth: 84,
  kycPending: 12,
  sipBookedMonth: 51,
  targetPercent: 78,
}

export const companyLeads = [
  { id: '1', name: 'Rahul Verma', city: 'Pune', interest: 'ELSS', status: 'New' },
  { id: '2', name: 'Anita Desai', city: 'Mumbai', interest: 'Large Cap', status: 'Contacted' },
  { id: '3', name: 'Karthik Iyer', city: 'Chennai', interest: 'Liquid', status: 'KYC Pending' },
]

export const distributorClients = [
  { id: 'c1', name: 'Meera Shah', folios: 4, aumLakh: 42.1, lastTxn: 'SIP - 01 Apr 2026' },
  { id: 'c2', name: 'Vikram Patel', folios: 2, aumLakh: 18.6, lastTxn: 'Lumpsum - 28 Mar 2026' },
  { id: 'c3', name: 'Sneha Reddy', folios: 6, aumLakh: 95.3, lastTxn: 'STP - 25 Mar 2026' },
]

export const agentPipeline = [
  { id: 'p1', investor: 'Arjun Mehta', product: 'SIP - SBI Bluechip', stage: 'CKYC', amount: '₹5,000/mo' },
  { id: 'p2', investor: 'Divya Nair', product: 'Lumpsum - UTI ELSS', stage: 'Payment', amount: '₹1,50,000' },
  { id: 'p3', investor: 'Mohit Singh', product: 'SIP - Bandhan Midcap', stage: 'Proposal', amount: '₹10,000/mo' },
]
