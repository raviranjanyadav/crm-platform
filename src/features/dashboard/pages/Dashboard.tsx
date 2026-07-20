import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Dashboard(){
  const [leads,setLeads]=useState<any[]>([])

  useEffect(()=>{
    axios.get('http://localhost:4000/api/leads').then(r=>setLeads(r.data)).catch(()=>setLeads([]))
  },[])

  return (
    <div className="max-w-6xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-semibold mb-6">Dashboard</h2>
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <div className="bg-slate-800 p-4 rounded">Total Leads<br/><div className="text-2xl font-bold">{leads.length}</div></div>
        <div className="bg-slate-800 p-4 rounded">Open Opportunities<br/><div className="text-2xl font-bold">3</div></div>
        <div className="bg-slate-800 p-4 rounded">Monthly Revenue<br/><div className="text-2xl font-bold">$12,400</div></div>
      </div>

      <section>
        <h3 className="text-xl font-semibold mb-3">Recent Leads</h3>
        <div className="space-y-2">
          {leads.map(l=> (
            <div key={l.id} className="bg-slate-800 p-3 rounded flex justify-between">
              <div>
                <div className="font-medium">{l.name}</div>
                <div className="text-sm text-slate-400">{l.contact}</div>
              </div>
              <div className="text-sm text-slate-300">{l.status}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
