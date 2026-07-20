import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './features/dashboard/pages/Dashboard'
import Leads from './features/leads/pages/Leads'
import Login from './pages/Login'
import Header from './components/Header'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="min-h-screen bg-slate-900 text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/leads" element={<Leads />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App