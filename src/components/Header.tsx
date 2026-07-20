import { Link } from 'react-router-dom'

export default function Header(){
  return (
    <header className="bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <Link to="/" className="font-bold text-lg">CRM</Link>
        <nav className="space-x-4">
          <Link to="/dashboard" className="hover:underline">Dashboard</Link>
          <Link to="/leads" className="hover:underline">Leads</Link>
          <Link to="/login" className="hover:underline">Login</Link>
        </nav>
      </div>
    </header>
  )
}
