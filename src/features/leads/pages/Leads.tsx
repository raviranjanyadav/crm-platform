import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Leads(){
  const [leads,setLeads]=useState<any[]>([])
  useEffect(()=>{
    axios.get('http://localhost:4000/api/leads').then(r=>setLeads(r.data)).catch(()=>setLeads([]))
  },[])

  return (
    <div className="max-w-6xl mx-auto py-12 px-6">
      <h2 className="text-2xl font-semibold mb-4">Leads</h2>
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
    </div>
  )
}
