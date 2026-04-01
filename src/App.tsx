import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { PublicLayout, PortalLayout } from './components/Layout'
import { ProtectedRoute } from './components/ProtectedRoute'
import { Home } from './pages/Home'
import { ExploreFunds } from './pages/ExploreFunds'
import { FundDetail } from './pages/FundDetail'
import { Compare } from './pages/Compare'
import { SIPCalculator } from './pages/SIPCalculator'
import { Login } from './pages/Login'
import { Signup } from './pages/Signup'
import { PortalRedirect } from './pages/PortalRedirect'
import {
  CompanyCompliance,
  CompanyLeads,
  CompanyOverview,
  CompanySchemes,
} from './pages/portal/CompanyPages'
import {
  DistributorAgents,
  DistributorClients,
  DistributorCommissions,
  DistributorOverview,
} from './pages/portal/DistributorPages'
import {
  AgentEarnings,
  AgentKYC,
  AgentOverview,
  AgentPipeline,
} from './pages/portal/AgentPages'

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/funds" element={<ExploreFunds />} />
            <Route path="/funds/:id" element={<FundDetail />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/sip-calculator" element={<SIPCalculator />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Route>

          <Route
            path="/portal"
            element={
              <ProtectedRoute>
                <PortalRedirect />
              </ProtectedRoute>
            }
          />

          <Route
            path="/portal/company"
            element={
              <ProtectedRoute roles={['company']}>
                <PortalLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<CompanyOverview />} />
            <Route path="schemes" element={<CompanySchemes />} />
            <Route path="leads" element={<CompanyLeads />} />
            <Route path="compliance" element={<CompanyCompliance />} />
          </Route>

          <Route
            path="/portal/distributor"
            element={
              <ProtectedRoute roles={['distributor']}>
                <PortalLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<DistributorOverview />} />
            <Route path="clients" element={<DistributorClients />} />
            <Route path="commissions" element={<DistributorCommissions />} />
            <Route path="agents" element={<DistributorAgents />} />
          </Route>

          <Route
            path="/portal/agent"
            element={
              <ProtectedRoute roles={['agent']}>
                <PortalLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<AgentOverview />} />
            <Route path="pipeline" element={<AgentPipeline />} />
            <Route path="kyc" element={<AgentKYC />} />
            <Route path="earnings" element={<AgentEarnings />} />
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}
