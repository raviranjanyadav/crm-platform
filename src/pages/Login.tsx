import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Login(){
  const [email,setEmail]=useState('')
  const navigate = useNavigate()

  const submit = async (e:any)=>{
    e.preventDefault()
    const res = await axios.post('http://localhost:4000/api/auth/login',{ email })
    if(res?.data?.token){
      // store token in memory for demo
      sessionStorage.setItem('demo_token', res.data.token)
      navigate('/dashboard')
    }
  }

  return (
    <div className="max-w-md mx-auto py-24 px-6">
      <h2 className="text-2xl font-semibold mb-4">Sign in</h2>
      <form onSubmit={submit} className="space-y-4 bg-slate-800 p-6 rounded">
        <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="email" className="w-full p-2 rounded bg-slate-700" />
        <button className="w-full py-2 bg-indigo-600 rounded">Sign in</button>
      </form>
    </div>
  )
}
